import React, { useEffect, useState } from 'react'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { NavLink } from 'react-router-dom'


import { useHistory } from "react-router-dom"

function Votingpage() {
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
        firstName: "", lastName: "", phone: "", dob: "", voterCode: "", state: "", district: "",
    });


    const [users, setUsers] = useState({
         voterCode: "", state: "", party: ""
    });


    let name, value;




    const handleInputs = (e) => {
        console.log(e)
        name = e.target.name;
        value = e.target.value;

        setUsers({ ...users, [name]: value });
    }







    const Vote = async (e) => {

        try {

            e.preventDefault();

            const { voterCode, state, party } = users;

            const res = await fetch("/votenow", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                    // "Accept":"application/json"

                },

                body: JSON.stringify({
                    voterCode, state,party
                })
            });

            const data = await res.json();
            console.log(data)


           toast(data.massage)
           console.log(data.error)

        } catch (err) {
            console.log(err)
        }
    }





    const callvotingpage = async () => {
        try {
            const res = await fetch('/Votingpage', {
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
            history.push('/UserVote')

        }
    }

    useEffect(() => {
        callvotingpage();

    }, [])













    return (
        <>
            <div class="view" style={m0}>

                <section class="admin_option">

                    <section class="admin_approval_forms" style={clr}>
                        <div class="admin_option_head" style={bg}>
                            <h2 style={h2}><i class="fas fa-vote-yea"></i> &nbsp;Voting Page</h2>
                            <hr style={{ "background-color": "black" }} />
                        </div>

                        <form class="modal-content">
                            <div class="input_cluster">
                                <div class="input_items">

                                    <label for="First Name">First Name :</label>

                                    <input type="text" value={users.firstName = user.firstName} onChange={handleInputs} placeholder="Enter First Name" id="firstName" name="firstName" value={user.firstName} onChange={handleInputs} readOnly />


                                </div>

                                <div class="input_items">
                                    <label for="lastName">Last Name :</label>
                                    <div class="inputs">

                                        <input type="text"
                                            value={users.lastName = user.lastName}
                                            onChange={handleInputs}
                                            name="lastName" id="lastName" />
                                    </div>


                                </div>
                            </div>

                            <div class="input_cluster">
                                <div class="input_items">

                                    <label for="voterCode">voterCode :</label>
                                    <div class="inputs">

                                        <input type="text"
                                            name="voterCode"
                                            id="voterCode"
                                            value={users.voterCode = user.voterCode} onChange={handleInputs} />
                                    </div>
                                </div>
                                <div class="input_items">

                                    <label for="dob">Date Of Birth :</label>

                                    <input type="text"
                                        name="dob" id="dob"
                                        value={users.dob = user.dob}
                                        onChange={handleInputs} readOnly />
                                </div>
                            </div>




                            <div class="input_cluster">

                                <div class="input_items">

                                    <label for="phone">Phone:</label>

                                    <input type="number" value={users.phone = user.phone} onChange={handleInputs} id="phone" name="phone" required />

                                </div>

                                <div class="input_items">
                                    <label for="state">State:</label>

                                    <input type="text" value={users.state = user.state} onChange={handleInputs} id="state" name="state" required />
                                </div>

                            </div>



                            <div class="input_cluster">


                                <div class="input_items">
                                    <label for="election">Election:</label>
                                    <select value={users.election = user.election} onChange={handleInputs} id="election" name="election" required >
                                        <option value="" disabled selected>Select Election :</option>

                                        <option value="stateassemblyassam2021">State Assembly Assam 2021</option>
                                    </select>
                                </div>

                                <div class="input_items">
                                    <label for="">Select Party : </label>
                                    <select value={users.party} onChange={handleInputs} id="party"
                                        name="party" required >
                                        <option value="" disabled selected>Select Party</option>
                                        <option value="none">None</option>
                                        <option value="a">A</option>
                                        <option value="b">B</option>
                                        <option value="c">C</option>
                                        <option value="d">D</option>
                                    </select>

                                </div>

                            </div>





                            <div class="input_cluster" id="admin_input_cluster">
                                <div class="input_item_button">
                                    <input type="submit" value="Vote" onClick={Vote} />
                                    <button style={btn}><NavLink style={a} to="/Ulogout">Logout</NavLink></button>

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

export default Votingpage