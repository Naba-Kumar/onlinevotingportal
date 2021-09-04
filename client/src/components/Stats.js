import React, { useEffect, useState } from 'react'

import { useHistory } from "react-router-dom"

import { NavLink } from 'react-router-dom'



import "../assets/css/profile.css"


function Stats() {

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

    const ml = {
        "margin": "15px"
    }
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
        color: "#000",
    }


    const history = useHistory();

    const [user, setUser] = useState({
        _id: "", checked: "", approved: ""
    });


    const callProfile = async () => {
        try {
            const res = await fetch('/Stats', {
                method: 'GET',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json; charset=UTF-8"

                },
                credentials: "include"
            })
            const data = await res.json()
            setUser(data)
            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error;
                // window.alert("Invalid Registration")
            }

        }
        catch (e) {
            console.log(e)
            history.push('/Check')

        }
    }

    const id = function () {
        if (user.approved == true) {
            return user._id
        } else {
            return "NA"
        }
        return id
    }
    const ch = function () {
        if (user.checked == true) {
            return "YES"
        } else {
            return "NO"
        }
        return ch
    }
    const st = function () {
        if (user.approved == true && user.checked == true) {
            return "Accepted"
        } else if (user.approved == false && user.checked == true) {
            return "Rejected"
        } else if (user.checked == false) {
            return "Pending"
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
                            <h2 style={h2}><i class="fas fa-user-circle"> </i> &nbsp;Application Status</h2>
                            <hr style={{ "background-color": "black" }} />
                        </div>
                        <div>
                            <div class="modal-content">



                                <div class="input_cluster" id="admin_input_cluster">
                                    <div class="input_item_button">
                                        {/* <input type="reset" value="Edit" /> */}

                                    </div>


                                </div>

                                <div class="input_cluster" style={ml} >
                                    <p>Voter Code : &nbsp;{id()}</p>

                                </div>



                                <div class="input_cluster" style={ml} >
                                    <p>Is Your Application Checked : {ch()}</p>

                                </div>



                                <div class="input_cluster" style={ml} >
                                    <p>Status : {st()}</p>

                                </div>


                                <div class="input_cluster" id="admin_input_cluster">
                                    <div class="input_item_button">

                                        <button style={btn}><NavLink style={a} to="/Ulogout">Logout</NavLink></button>
                                      
                                    </div>


                                </div>
                            </div>


                        </div>




                    </section>
                </section>
            </div>
        </>
    )
}

export default Stats