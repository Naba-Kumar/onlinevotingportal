import React, { useEffect, useState } from 'react'

import "../assets/css/applications.css"

function Applications() {

    const width = {
        "width":"100%"
    }
    const width2 = {
        "width":"95%"
    }

    const note={
        "padding":"10px 20px 0 20px",
        "color":"red"
    }



    
    
    const [applications, setApplications] = useState([{
        _id:"", firstName: "", lastName: "", password: "", dob: "", gender: "", phone: "", email: "", state: "", district: "", assemblyConstituency: ""
    }]);

    useEffect(() => {
        fetch("/applications").then(res => {
            if (res.ok) {

                return res.json()
            }
        }).then(jsonres => setApplications(jsonres) ,
        
        )
    })
    
    
    

    
 




    const [user, setUser] = useState ({
        firstName: "", lastName: "",voterCode:"", password: "", dob: "", gender: "", phone: "", email: "", state: "", district: "", assemblyConstituency: ""
    });



    let name,value;



    const handleInputs = (e) => {
        console.log(e)
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
    }



    const postApplication = async(e) => {

        try{

            e.preventDefault();

            const {firstName, lastName,voterCode, password, dob, gender, phone, email, state, district, assemblyConstituency} = user;
            console.log(user)
    
            const res = await fetch("/apllicationapprove",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                    
                },
    
                body: JSON.stringify({
                    firstName, lastName,voterCode, password, dob, gender, phone, email, state, district, assemblyConstituency
                })
            });
    
            const data = await res.json();
            console.log(data)
            if(data.status === 422 || !data){
                window.alert("Invalid Registration")
                console.log("Invalid Registration")
            }else {
                // window.alert("Registration Successfull")
                console.log("Registration Successfull")
    
            }
        }catch(err){
            console.log(err)
        }
        

       
        
    }



    const rejectApplication = async(e) => {

        try{

            e.preventDefault();

            const {voterCode} = user;
    
            const res = await fetch("/apllicationreject",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                    
                },
    
                body: JSON.stringify({
                    voterCode
                })
            });
    
            const data = await res.json();
            console.log(data)
            if(data.status === 422 || !data){
                
                console.log("Invalid Rejection")
            }else {
                console.log("Rejection Successfull")
    
            }
        }catch(err){
            console.log(err)
        }
        

       
        
    }




    return (
        <>
            <div class="view">
                {applications.map(application =>


                    <section class="admin_option">

                        <section class="admin_approval_forms">
                            <div class="admin_option_head">
                                <h2>Applications </h2>
                            </div>


                            <form class="modal-content">
                                <div class="input_cluster">
                                    <div class="input_items">

                                        <label for="firstName">First Name :</label>

                                        <input type="text" name="firstName" id="firstName" value={user.firstName=application.firstName} onChange={handleInputs} required  />


                                    </div>

                                    <div class="input_items">
                                        <label for="lastName">Last Name :</label>
                                        <div class="inputs">

                                            <input type="text" name="lastName" id="lastName" value={user.lastName= application.lastName}  />
                                        </div>


                                    </div>
                                </div>

                                <div class="input_cluster">
                                    <div class="input_items">

                                        <label for="voterCode">Voter Code :</label>
                                        <div class="inputs">

                                            <input type="text" 
                                                name="voterCode" id="voterCode"
                                                value={user.voterCode=application._id}
                                            onChange={handleInputs}
                                                
                                               />
                                        </div>
                                    </div>
                                    <div class="input_items">

                                        <label for="dob">Date Of Birth :</label>

                                        <input type="text" name="dob" id="dob" value={user.dob= application.dob}  />
                                    </div>
                                </div>



                                <div class="input_cluster">

                                    <div class="input_items">

                                        <label for="gender">Gender :</label>


                                        <input type="text"
                                            name="gender" id="gender" value={user.gender=application.gender}  />

                                    </div>
                                    <div class="input_items">

                                        <label for="phone">Phone</label>

                                        <input type="number" name="phone" id="phone" value={user.phone= application.phone}  />

                                    </div>


                                </div>

                                <div class="input_cluster">

                                    <div class="input_items">

                                        <label for="email">Email:</label>

                                        <input type="email" id="email" name="email" value={user.email= application.email}  />

                                    </div>

                                    <div class="input_items">

                                        <label for="state">State:</label>
                                        <input type="text" id="state"
                                            value={user.state=application.state} name="state"  />
                                    </div>

                                </div>



                                <div class="input_cluster">


                                    <div class="input_items">
                                        <label for="district">District:</label>
                                        <input type="text" id="district" name="district" value={user.district=application.district}  />

                                    </div>

                                    <div class="input_items">
                                        <label for="">Assembly constituency:</label>
                                        <input type="text" id="assemblyConstituency"
                                            name="assemblyConstituency" id="assemblyConstituency"
                                            value={user.assemblyConstituency=application.assemblyConstituency}
                                             />

                                    </div>

                                </div>
                                <div class="input_cluster">


                                    <div class="input_items" style={width}>
                                        <label for="password">password:</label>
                                        <input style={width2} type="text" id="password" name="password" value={user.password=application.password}  />

                                    </div>

                                    
                                </div>


                                <div class="input_cluster">


                                    <p style={note}> <b>NOTE</b>  : Please <b>APPROVE</b> From Bottom To Top </p>
                                </div>


                                <div class="input_cluster" id="admin_input_cluster">
                                    <div class="input_item_button">
                                        <input type="reset" value="APPROVE" onClick={postApplication} />

                                    </div>
                                    <div class="input_item_button">
                                        <input type="submit" value="REJECT" onClick={rejectApplication} />

                                    </div>

                                </div>

                            </form>

                        </section>
                    </section>
                )};
            </div>
        </>
    )
}

export default Applications