import React,{useState} from 'react'
import {useHistory} from "react-router-dom"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import "../assets/css/applications.css"

function Userlogin() {
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
        voterCode: "",  password: ""
    });

    
    let name, value;



    const handleInputs = (e) => {
        console.log(e)
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }



    const callUserlogin = async (e) => {

        try {


            e.preventDefault();

            const { voterCode, password } = user;
            console.log(user)

            const res = await fetch("/userLogin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept":"application/json"



                },

                body: JSON.stringify({
                    voterCode, password
                })
            });

            const data = await res.json();

            alert(data.massage)

            if (data.status === 400) {

            }else{
                history.push('/Profile')
                
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
                            <h2 style={h2}><i class="fas fa-user-tie"></i>  User Login</h2>
                        </div>
                        <hr />

                        <form class="modal-content">
                           



                            <div class="input_items" style={width}>

                                <label for="voterCode"> Voter Code :</label>
                                <div class="inputs">

                                    <input type="text" placeholder="Enter voterCode"
                                        name="voterCode" id="voterCode" 
                                        value={user.voterCode}
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

                                    <input type="submit" value="Login" onClick={callUserlogin}
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

export default Userlogin