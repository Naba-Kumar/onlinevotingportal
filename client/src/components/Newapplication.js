


// import React from 'react'

import React, {NavLink,useState} from "react"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import "../assets/css/applications.css"


function Newapplication() {
    const m0 = {
        "margin": "0",
        "margin-top": "70px"

    }
    const clr = {
        "background-image": "linear-gradient(to right, rgb(255, 84, 0), #f7ff00)",
        "border": "none"
    }
    const bg = {
        "background-color": "rgb(0,0,0,0)"

    }
    const h2 = {
        color: "#000"
    }



    const [user, setUser] = useState ({
        firstName: "", lastName: "", password: "", dob: "", gender: "", phone: "", email: "", state: "", district: "", assemblyConstituency: ""
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

            const {firstName, lastName, password, dob, gender, phone, email, state, district, assemblyConstituency} = user;
            console.log(user)
    
            const res = await fetch("/newapllication",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                    // "Accept":"application/json"
                    
                },
    
                body: JSON.stringify({
                    firstName, lastName, password, dob, gender, phone, email, state, district, assemblyConstituency
                })
            });
    
            const data = await res.json();
            toast(data.massage);
        }catch(err){
            console.log(err)
        }
        

       
        
    }


    return (
        <>
            <div class="view" style={m0}>

                <section class="admin_option">

                    <section class="admin_approval_forms" style={clr}>
                        <div class="admin_option_head" style={bg}>
                            <h2 style={h2}>New Voter Application Form</h2>
                        </div>
                        <hr />

                        <form method="POST" class="modal-content" id="application-form">
                            <div class="input_cluster">
                                <div class="input_items">

                                    <label for="firstName">First Name :</label>

                                    <input type="text" name="firstName" id="firstName" autoComplete="off"
                                        value={user.firstName}
                                        onChange={handleInputs}
                                        placeholder="Enter First Name"
                                        required
                                    />


                                </div>

                                <div class="input_items">
                                    <label for="lastName">Last Name :</label>
                                    <div class="inputs">

                                        <input type="text" name="lastName" id="lastName"
                                            value={user.lastName}
                                            onChange={handleInputs}
                                            placeholder="Enter Last Name"
                                            required />
                                    </div>


                                </div>
                            </div>

                            <div class="input_cluster">
                                <div class="input_items">

                                    <label for="password">Create a password :</label>
                                    <div class="inputs">

                                        <input type="password" name="password" id="password"
                                            value={user.password}
                                            onChange={handleInputs}
                                            placeholder="create a password"
                                            required/>
                                    </div>
                                </div>
                                <div class="input_items">

                                    <label for="dob">Date Of Birth :</label>

                                    <input type="date" name="dob" id="dob"
                                        value={user.dob}
                                        onChange={handleInputs}
                                        placeholder="Enter DOB"
                                        required />
                                </div>
                            </div>



                            <div class="input_cluster">

                                <div class="input_items">

                                    <label for="gender">gender:</label>

                                    <select name="gender" id="gender"
                                     value={user.gender} 
                                     onChange={handleInputs}>
                                        <option value="" disabled selected>SELECT</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="pns">Prefer Not To Say</option>

                                    </select>


                                </div>


                                <div class="input_items">

                                    <label for="phone">Phone</label>

                                    <input type="number" name="phone" id="phone"
                                        value={user.phone}
                                        onChange={handleInputs}
                                        placeholder="Enter Phone No" required />

                                </div>


                            </div>

                            <div class="input_cluster">

                                <div class="input_items">

                                    <label for="email">Email:</label>

                                    <input type="email" name="email" id="email"
                                        value={user.email}
                                        onChange={handleInputs}
                                        placeholder="Enter Email" required />

                                </div>

                                <div class="input_items">

                                    <label for="state">State:</label>
                                    <select name="state" id="state" 
                                    value={user.state} 
                                    onChange={handleInputs}>
                                        <option value="" disabled selected>Select</option>
                                        <option value="ASSAM">ASSAM</option>

                                    </select>
                                </div>

                            </div>



                            <div class="input_cluster">


                                <div class="input_items">
                                    <label for="district">District:</label>
                                    <select name="district" id="district" name="district" 
                                    value={user.district} 
                                    onChange={handleInputs}>
                                        <option value="" disabled selected>Select</option>
                                        <option value="DARRANG">DARRANG</option>
                                    </select>

                                </div>

                                <div class="input_items">
                                    <label for="AssemblyConstituency">Assembly Constituency:</label>
                                    <select name="assemblyConstituency" id="assemblyConstituency"
                                    value={user.assemblyConstituency} onChange={handleInputs}>
                                        <option value="" disabled selected>Select </option>
                                        <option value="65 KALAIGAON">65 KALAIGAON</option>
                                        <option value="66 SIPAJHAR">66 SIPAJHAR</option>
                                        <option value="67 MANGALDAI">67 MANGALDAI</option>
                                        <option value="68 DALGAON">68 DALGAON</option>

                                    </select>
                                </div>

                            </div>

                            <div class="input_cluster" id="admin_input_cluster">
                                <div class="input_item_button">
                                    <input type="submit" value="Submit" id="submit" onClick={postApplication} />

                                </div>
                               
                            </div>

                        </form>

                    </section>
                </section>
            </div>
            <ToastContainer />

        </>
    )

}

export default Newapplication