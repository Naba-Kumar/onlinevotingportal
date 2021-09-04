const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());



const router = new express.Router();

app.use(express.json())

const mySchema = require('../models/userSchema');
const auth = require("../middleware/userauthenticate")
const { application } = require('express');



router.post('/userLogin', async (req, res) => {

    try {
        const { voterCode, password } = req.body

        if (!voterCode || !password) {
            return res.status(400).json({ massage: "All fields must be filled" });
        }
        const adauth = await mySchema.citizen.findOne({ voterCode: voterCode })
        console.log(voterCode)

        if (adauth) {
            const isMatch = await bcrypt.compare(password, adauth.password)
            console.log(password)
            console.log(adauth.password)

            if (!isMatch) {
                res.status(400).json({ massage: "Invalid Credential" })
            }
            else {

                const token = await adauth.generateAuthToken();
                console.log(token)
                res.cookie("jwtoken", token, { httpOnly: true })
                res.status(200).json({ massage: "signed in successfully" })
            }

        } else {
            res.status(400).json({ massage: "Invalid Credential" })

        }

    } catch (e) {
        res.status(400).json({ massage: "Something went wrong try again" })
    }
})




router.post('/adminLogin', async (req, res) => {

    try {
        const { empId, password } = req.body

        if (!empId || !password) {
            return res.status(400).json({ massage: "All fields must be filled" });
        }
        const adauth = await mySchema.admin.findOne({ empId: empId })
        console.log(empId)

        if (adauth) {
            const isMatch = await bcrypt.compare(password, adauth.password)
            console.log(password)
            console.log(adauth.password)


            if (!isMatch) {
                res.status(400).json({ massage: "Invalid Credential" })
            }
            else {
                const token = await adauth.generateAuthToken();
                console.log(token)
                res.cookie("jwtoken", token, { httpOnly: true })
                res.status(200).json({ massage: "signed in successfully" })
            }

        } else {
            res.status(400).json({ massage: "Invalid Credential" })

        }

    } catch (e) {
        res.status(400).json({ massage: "Something went wrong try again" })
    }
})





router.post('/check', async (req, res) => {

    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ massage: "All fields must be filled" });
        }
        const em = email.toLowerCase()
        const adauth = await mySchema.citizenapllication.findOne({ email: em })
        console.log(email)

        if (adauth) {
            const isMatch = await bcrypt.compare(password, adauth.password)
            console.log(password)
            console.log(adauth.password)

            if (!isMatch) {

                res.status(400).json({ massage: "Invalid Credential" })

            }
            else {
                const token = await adauth.generateAuthToken();
                console.log(token)
                res.cookie("jwtoken", token, { httpOnly: true })
                res.status(200).json({ massage: "signed in successfully" })
            }

        } else {
            res.status(400).json({ massage: "Invalid Credential" })

        }

    } catch (e) {
        res.status(400).json({ massage: "Something went wrong try again" })
    }
})


router.get("/Stats", auth.checkAuthenticate, (req, res) => {
    res.send(req.user)

})



router.get("/Adminpanel", auth.AdminAuthenticate, (req, res) => {
    res.send(req.admin)

})




router.get("/logout", (req, res) => {
    console.log("logout")
    res.clearCookie('jwtoken', { path: '/'});
    res.status(200).send("Logout successfull")

})



router.get("/Profile", auth.UserAuthenticate, (req, res) => {
    res.send(req.citizen)
})


router.get("/Votingpage", auth.UserAuthenticate, (req, res) => {
    res.send(req.citizen)
})






router.post('/newapllication', async (req, res) => {

    const { firstName, lastName, password, dob, gender, phone, email, state, district, assemblyConstituency } = req.body

    if (!firstName || !lastName || !password || !dob || !gender || !phone || !email || !state || !district || !assemblyConstituency) {
        res.json({ massage: "All fields must be filled" });
    }
    try {
        const check = await mySchema.citizenapllication.findOne({ email: email })
        if (check) {
            res.status(442).json({ massage: "Email Id alredy registered" })
        }
        const application = new mySchema.citizenapllication({ firstName, lastName, password, dob, gender, phone, email, state, district, assemblyConstituency })

        const saved = await application.save()
        console.log(saved)
        res.status(201).json({ massage: "Successfully  Submitted" })

    } catch (e) {
        res.status(400).json({ massage: "Invalid Details Or Something Went Wrong" })
        

    }
})





router.post('/apllicationapprove', async (req, res) => {

    const { firstName, lastName, voterCode, password, dob, gender, phone, email, state, district, assemblyConstituency } = req.body
    const vc = req.body.voterCode

    if (!firstName || !lastName || !voterCode || !password || !dob || !gender || !phone || !email || !state || !district || !assemblyConstituency) {
        res.json({ error: "All fields must be filled ha ha" });
    }
    try {
        const application = new mySchema.citizen({ firstName, lastName, voterCode, password, dob, gender, phone, email, state, district, assemblyConstituency })
        console.log(req.body)

        const saved = await application.save()
        console.log(saved)
        const update = await mySchema.citizenapllication.findByIdAndUpdate({ _id: vc }, { $set: { checked: true, approved: true } })
        res.status(201).json({ massage: "Successfully  regitered" })

    } catch (e) {
        res.status(400).json({ massage: "Something went wrong please try again" })
    }
})




router.post('/apllicationreject', async (req, res) => {

    const { voterCode } = req.body
    const vc = req.body.voterCode
    console.log(vc)
    if (!voterCode) {
        res.json({ error: "All fields must be filled ha ha" });
    }
    try {

        const update = await mySchema.citizenapllication.findByIdAndUpdate({ _id: vc }, { $set: { checked: true, approved: false } })
        res.status(201).json({ massage: "Successfully  regitered" })

    } catch (e) {
        res.status(400).json({ massage: "Something went wrong please try again" })
    }
})


router.post('/resolved', async (req, res) => {

    const { resolved } = req.body
    const vc = req.body.resolved
    console.log(req.body)

    try {

        const update = await mySchema.askcomplain.findByIdAndUpdate({ _id: vc }, { $set: { resolved: true } })

    } catch (e) {
        res.status(400).json({ massage: "Something went wrong please try again" })
    }
})





router.post('/votenow', async (req, res) => {

    const { voterCode, state, party } = req.body
    console.log(req.body)

    const partyee=req.body.party;
 
    if (!voterCode || !state || !party) {
        res.json({ massage: "All fields must be filled" });
    }
    try {
        
        
        const auth = await mySchema.voted_assam_2021_lae.findOne({ voterCode: voterCode })
        console.log(auth)
        if (auth) {
            res.json({ massage: "You Are Already Voted" })
        } else {
            
            const vt = new mySchema.voted_assam_2021_lae({  voterCode,state, })

            const saved = await vt.save()
            console.log(saved)           
             // const save = await store.save();
            // console.log(save)

            
            if (party == "none") {
                await mySchema.coun_assam_2021_lae.findOneAndUpdate({ party: "none" }, { $inc: { 'votecount': 1 } })
                await mySchema.coun_assam_2021_lae.updateMany({}, { $inc: { 'total': 1 } })
            }
            else if (party == "a") {
                await mySchema.coun_assam_2021_lae.findOneAndUpdate({ party: "a" }, { $inc: { 'votecount': 1 } })
                await mySchema.coun_assam_2021_lae.updateMany({}, { $inc: { 'total': 1 } })
            }
            else if (party == "b") {
                await mySchema.coun_assam_2021_lae.findOneAndUpdate({ party: "b" }, { $inc: { 'votecount': 1 } })
                await mySchema.coun_assam_2021_lae.updateMany({}, { $inc: { 'total': 1 } })
            }
            else if (party == "c") {
                await mySchema.coun_assam_2021_lae.findOneAndUpdate({ party: "c" }, { $inc: { 'votecount': 1 } })
                await mySchema.coun_assam_2021_lae.updateMany({}, { $inc: { 'total': 1 } })
            }
            else if (party == "d") {
                await mySchema.coun_assam_2021_lae.findOneAndUpdate({ party: "d" }, { $inc: { 'votecount': 1 } })
                await mySchema.coun_assam_2021_lae.updateMany({}, { $inc: { 'total': 1 } })
            }

            res.status(201).json({ massage: "You are Voted Successfully" })
            await mySchema.coun_assam_2021_lae.findOneAndUpdate({ party: "total" }, { $inc: { 'votecount': 1 } })
        }

    } catch (e) {
        res.status(400).json({ massage: "Something went wrong please try again" })
    }
})







router.post('/postcomplain', async (req, res) => {

    const { name, email, subject, complain } = req.body

    if (!name || !email || !subject || !complain) {
        res.json({ massage: "All fields must be filled" });
    }
    try {
        const application = new mySchema.askcomplain({ name, email, subject, complain })

        const saved = await application.save()
        console.log(saved)
        res.status(201).json({ massage: "Successfully  sent" })

    } catch (e) {
        res.status(400).json({ massage: "Something went wrong try again" })
    }
})


router.get('/showcomplains', (req, res) => {

    let i = 1;
    while (i--) {

        mySchema.askcomplain.find({ resolved: "false" })
            .then(foundapps => res.json(foundapps))
    }

})





router.post('/userQuestion', async (req, res) => {

    const { name, email, question } = req.body

    if (!name || !email || !question) {
        res.json({ error: "All fields must be filled" });
    }

    try {

        const data = new mySchema.askquestion({ name, email, question })
        const saved = await data.save()
        console.log(saved)
        res.status(201).json({ massage: "Successfully submitted" })

    } catch (e) {
        res.status(400).json({ massage: "Something went wrong try again" })
    }
})




router.post('/userComplain', async (req, res) => {

    const { name, email, subject, complain } = req.body

    if (!name || !email || !subject || !complain) {
        res.json({ massage: "All fields must be filled" });
    }

    try {

        const data = new mySchema.askcomplain({ name, email, subject, complain })
        console.log(data)
        const saved = await data.save()
        console.log(saved)
        res.status(201).json({ massage: "Successfully submitted" })

    } catch (e) {
        res.status(400).json({ massage: "Something went wrong try again" })
    }
})


router.get('/applications', (req, res) => {

    let i = 1;
    while (i--) {

        mySchema.citizenapllication.find({ checked: "false" })
            .then(foundapps => res.json(foundapps))
    }

})

router.get('/statistics', (req, res) => {

    let i = 1;
    while (i--) {

        mySchema.coun_assam_2021_lae.find()
            .then(foundapps => res.json(foundapps))
    }

})


router.post('/addadmin', async (req, res) => {

    const { firstName, lastName, empId, dob, password } = req.body
    console.log(req.body)

    if (!firstName || !lastName || !empId || !dob || !password) {
        res.json({ massage: "All fields must be filled" });
    }
    try {

        const check = await mySchema.admin.findOne({ empId: empId })
        if (check) {
            res.status(442).json({ massage: "Employee Id alredy registered" })
        }


        console.log(check)

        const data = new mySchema.admin({ firstName, lastName, empId, dob, password })

        const token = await data.generateAuthToken();
        console.log(token)
        res.cookie("jwtoken", token, {httpOnly: true})

        const saved = await data.save()
        console.log("saved")
        res.json({ massage: "Successfully Added" })
    } catch (e) {
        res.status(400).json({ massage: "Something went wrong try again" })
    }
})





module.exports = router