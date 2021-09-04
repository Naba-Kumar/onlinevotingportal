import React, { useState } from 'react'
import { useHistory } from "react-router-dom"



import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import "../assets/css/applications.css"

function UserVote() {
    const popup = {

        "max-width": "600px"
    }

    const width = {
        width: "90%"
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
        email: "", password: ""
    });


    let name, value;



    const handleInputs = (e) => {
        console.log(e)
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }


    const alr = (a) => {
        alert(a);
    }


    const callUserVote = async (e) => {

        try {

            e.preventDefault();

            const { email, password } = user;

            const res = await fetch("/check", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",



                },

                body: JSON.stringify({
                    email, password
                })
            });

            const data = await res.json();



            const alert = data.massage

            
            alr(alert)
            
            if (data.status === 400) {
                
                // console.log(data.massage)

            } else {
                // console.log(data.massage)
                history.push('/Stats')


            }
        } catch (err) {
            console.log(err)
        }




    }


    return (

        <>
            <div class="view" style={{ "margin-left": " 0px" }}>

                <section class="admin_option" style={popup}>

                    <section class="admin_approval_forms" style={clr}>
                        <div class="admin_option_head" style={bg}>
                            <h2 style={h2}><i class="fas fa-user-tie"></i>  Application Status</h2>
                        </div>
                        <hr />

                        <form class="modal-content">




                            <div class="input_items" style={width}>

                                <label for="email"> Email :</label>
                                <div class="inputs">

                                    <input type="text" placeholder="Enter Email"
                                        name="email" id="email"
                                        value={user.email}
                                        onChange={handleInputs}
                                        required />
                                </div>
                            </div>


                            <div class="input_items" style={width}>

                                <label for="password">Password :</label>

                                <input type="password" placeholder="Enter Password" name="password" id="password" required
                                    value={user.password}
                                    onChange={handleInputs}
                                />

                            </div>





                            <div class="input_cluster" id="admin_input_cluster">
                                <div id="remove_button">

                                    <input type="submit" value="Check" onClick={callUserVote}
                                    />


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

export default UserVote