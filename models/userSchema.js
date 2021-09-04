const jwt = require ('jsonwebtoken');
const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const citizenSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        default: null
    },
    voterCode:{
        type:String,
        unique:true,
        require:true

    },
   
    password:{
        type: String,
        require : true
    },
    dob: {
        type: Date,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
        

    },
    email: {
        type: String,
        require: true
        

    },
    state: {
        type: String,
        require: true
    },

    district: {
        type: String,
        require: true
    },
    assemblyConstituency: {
        type: String,
        require: true
    },
   
    tokens:[
        {
            token : {
                type: String,
                require: true
            }
        }
    ]

})



citizenSchema.methods.generateAuthToken = async function() {
    try{
        let token = jwt.sign({_id:this._id.toString()}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token});
        await this.save()
        console.log(token)
        return token;

    }
    catch(err){
        console.log(err);

    }
}

const citizen = new mongoose.model('citizen', citizenSchema)

module.exports.citizen = citizen






const citizenAppSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        default: null
    },

    dob: {
        type: Date,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true,
        maxLength:10,
        minLength:10
        

    },
    email: {
        type: String,
        require: true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                res.json({massage:"Invalid email"})
            }
        }

    },
    state: {
        type: String,
        require: true
    },

    district: {
        type: String,
        require: true
    },
    assemblyConstituency: {
        type: String,
        require: true
    },
    password:{
        type: String,
        require : true
    },
    checked:{
        type: Boolean,
        require : true,
        default:false
    },
    approved:{
        type: Boolean,
        require : true,
        default:false
    },
    tokens:[
        {
            token : {
                type: String,
                require: true
            }
        }
    ]


})


citizenAppSchema.pre('save', async function(next) {
    if(this.isModified('password')){
        this.password = bcrypt.hashSync(this.password, 12);
    }
    next();

});

citizenAppSchema.methods.generateAuthToken = async function() {
    try{
        let token = jwt.sign({_id:this._id.toString()}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token});
        await this.save()
        console.log(token)
        return token;

    }
    catch(err){
        console.log(err);

    }
}



const citizenapllication = new mongoose.model("citizenapllication", citizenAppSchema)

module.exports.citizenapllication = citizenapllication





const votedcitizenSchema = new mongoose.Schema({

    voterCode: {
        type: String,
        require: true,
        unique: true
    },

  

    state: {
        type: String,
        require: true
    }

})

const voted_assam_2021_lae = new mongoose.model('voted_assam_2021_lae', votedcitizenSchema)

module.exports.voted_assam_2021_lae = voted_assam_2021_lae




const votecountSchema = new mongoose.Schema({

    party: {
        type: String,
        unique: true
    },
    votecount: {
        type: Number,
        require: true
    },
    total: {
        type: Number,
        require: true
    }

})

const coun_assam_2021_lae = new mongoose.model('coun_assam_2021_lae', votecountSchema)

module.exports.coun_assam_2021_lae = coun_assam_2021_lae





const questionSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true

    },
    
    question: {
        type: String,
        require: true
    }

})

const askquestion = new mongoose.model('askquestion', questionSchema)
module.exports.askquestion = askquestion


const complainSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    subject:{
        type: String,
        require: true

    },
    
    complain: {
        type: String,
        require: true
    },
    resolved: {
        type:Boolean,
        require:true,
        default:false
    }

})

const askcomplain = new mongoose.model('askcomplain', complainSchema)
module.exports.askcomplain = askcomplain




const adminSchema = new mongoose.Schema({

    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        default: null
    },
   
    dob: {
        type: Date,
        require: true
    },
    empId:{
        type: String,
        unique:true,
        require: true

    },

    password: {
        type: String,
        require: true
    },
    tokens:[
        {
            token : {
                type: String,
                require: true
            }
        }
    ]

})

adminSchema.pre('save', async function(next) {
    if(this.isModified('password')){
        this.password = bcrypt.hashSync(this.password, 12);
    }
    next();

});

adminSchema.methods.generateAuthToken = async function() {
    try{
        let token = jwt.sign({_id:this._id.toString()}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token});
        await this.save()
        console.log(token)
        return token;

    }
    catch(err){
        console.log(err);

    }
}


const admin = new mongoose.model('admin', adminSchema)
module.exports.admin = admin;

















const tempSchema = new mongoose.Schema({

    code: {
        type: String,
        unique: true,
        require: true
    },
    no: {
        type: Number,
        require: true,
        default: 0
    }

})

const temp = new mongoose.model('temp', tempSchema)

module.exports.temp = temp



const voterSchema = new mongoose.Schema({
    Party:{
        type:String,
        require:true,
        unique:true
    },
    votes:{
        type:Number,
        require:true,
        default:0
    }

})

const counting = new mongoose.model("counting" , voterSchema)
module.exports.counting=counting