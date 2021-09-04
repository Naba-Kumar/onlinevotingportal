import React,{useEffect, useState} from 'react'

import {useHistory} from "react-router-dom"

import { NavLink } from 'react-router-dom'


import "../assets/css/profile.css"


function Profile() {

    const btn = {
        "margin": "24px auto",
        "border-radius": "4px",
        "border": "none",
        "background-color":"rgb(0, 61, 122)",
        "cursor": "pointer",
        
        
    }
    
    const a = {
        "display":"inline-block",
        "font-family": 'Ubuntu',
        "text-decoration": "none",
        "padding": "10px 40px",
        "font-weight": "bold",
        "color": "#fff",
        "font-family": 'Arial',
        "font-weight":"400"
    }

    const m0={
        "margin":"0",
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
        color: "#000",
    }


    const history= useHistory();

    const [user, setUser] = useState ({
        firstName: "", lastName: "", voterCode: "", dob: "", gender: "", phone: "", email: "", state: "", district: "", assemblyConstituency: ""
    });


   const callProfile = async () => {
        try{
            const res = await fetch('/Profile', {
                method:'GET',
                headers: {
                    Accept:"application/json",
                    "Content-Type": "application/json; charset=UTF-8"
                    
                },
                credentials:"include"
            })
            const data = await res.json()
            setUser(data)
            if(!res.status === 200 ){
                const error = new Error(res.error)
                throw error;
                // window.alert("Invalid Registration")
            }

        }
        catch(e){
            console.log(e)
            history.push('/userLogin')

        }
    }

    useEffect(() => {
        callProfile();
        
    }, [])







    return (
        <>


            <div class="view" style={m0}>
                <section class="admin_option">

                    <section class="admin_approval_forms" style={clr}>
                        <div class="admin_option_head" style={bg}>
                            <h2 style={h2}><i class="fas fa-user-circle"> </i> &nbsp;Profile Page</h2>
                            <hr style={{ "background-color": "black" }} />
                        </div>
                        <div>
                            <form class="modal-content">

                                <div class="input_cluster">
                                    <div class="input_items">

                                        <label for="First Name">First Name :</label>

                                        <input type="text" name="First Name" value={user.firstName} required />


                                    </div>

                                    <div class="input_items">
                                        <label for="Last Name">Last Name :</label>
                                        <div class="inputs">

                                            <input type="text" name="Last Name" value={user.lastName}
                                          required />
                                        </div>


                                    </div>
                                </div>
                                <div class="input_cluster">
                                    <div class="input_items">

                                        <label for="voterCode">Voter Code :</label>
                                        <div class="inputs">

                                            <input type="text" 
                                                name="voterCode" value={user.voterCode} required />
                                        </div>
                                    </div>
                                    <div class="input_items">

                                        <label for="DOB">Date Of Birth :</label>

                                        <input type="text"  name="DOB" value={user.dob} required 
                                        />
                                    </div>
                                </div>



                                <div class="input_cluster">

                                    <div class="input_items">

                                        <label>Gender:</label>
                                      <input type="text" name="gender" value={user.gender}/>

                                    </div>
                                    <div class="input_items">

                                        <label for="Phone">Phone :</label>

                                        <input type="number" id="Phone" name="Phone" value={user.phone} required />

                                    </div>


                                </div>

                                <div class="input_cluster">

                                    <div class="input_items">

                                        <label for="Email">Email:</label>

                                        <input type="email"value={user.email} id="Email" name="Email" required />

                                    </div>

                                    <div class="input_items">

                                        <label for="State">State:</label>
                                        <input type="text" name="state" value={user.state} />
                                    </div>

                                </div>



                                <div class="input_cluster">


                                    <div class="input_items">
                                        <label for="">District:</label>
                                        <input type="text" value={user.district} id="District" name="District" required />

                                    </div>

                                    <div class="input_items">
                                        <label for="Assembly constituency">Assembly constituency:</label>
                                       <input type="text" name="assemblyConstituency" value={user.assemblyConstituency} />
                                    </div>

                                </div>
                                <div class="input_cluster" id="admin_input_cluster">
                                <div class="input_item_button">
                                    
                                    <button style={btn}><NavLink style={a} to="/Ulogout">Logout</NavLink></button>

                                </div>

                            </div>
                                <div class="input_cluster">

                                    <div class="input_items">

                                     

                                    </div>



                                </div>
                                <div class="input_cluster">

                                    <div class="input_items">

                                     

                                    </div>



                                </div>

                             
                            </form>


                        </div>




                    </section>
                </section>
            </div>
        </>
    )
}

export default Profile