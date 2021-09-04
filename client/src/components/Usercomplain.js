import React, {NavLink,useState} from "react"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import "../assets/css/applications.css"

function Usercomplain() {
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



    
    const [user, setUser] = useState({
        name: "",  email: "", subject: "", complain: ""
    });



    let name, value;



    const handleInputs = (e) => {
        console.log(e)
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }



    const submitComplain = async (e) => {

        try {

            e.preventDefault();

            const { name, email, subject , complain } = user;
            console.log(user)

            const res = await fetch("/userComplain", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"

                },

                body: JSON.stringify({
                    name, email, subject , complain
                })
            });

            const data = await res.json();
            console.log(data.massage)
           toast(data.massage)
        } catch (err) {
            console.log(err)
        }




    }





    return (
        <>
            <div class="view" style={{ "margin-left": " 0px" }}>

                <section class="admin_option">

                    <section class="admin_approval_forms" style={clr}>
                        <div class="admin_option_head" style={bg}>
                            <h2 style={h2}><i class="far fa-address-card"></i>Register Complain Here</h2>
                        </div>
                        <hr/>

                        <form class="modal-content">
                            <div class="input_items" style={{ "width": "100%", "display": "flex", "justifyContent": "center", "flexDirection": "column" }}>

                                <label for="fullName">Full Name :</label>

                                <input type="text" placeholder="Enter Full Name" name="name" id="name" required
                                 value={user.name}
                                 onChange={handleInputs}
                                />


                                <label for="email">Email:</label>

                                <input type="email" placeholder="Enter Email" id="email" name="email" required 
                                 value={user.email}
                                 onChange={handleInputs}
                                />


                                <label for="subject">Subject :</label>

                                <input type="text" placeholder="Enter subject of your complain" name="subject" id="subject" required 
                                 value={user.subject}
                                 onChange={handleInputs}
                                />


                                <label for="complain">complain :</label>

                                <textarea style={{ "display": "block", "height": "200px" }}
                                 type="textarea" placeholder="Enter your complain under 250" id="complain" name="complain" required 
                                 value={user.complain}
                                 onChange={handleInputs}
                                 />

                                {/* </div> */}


                            </div>




                            <div class="input_cluster" id="admin_input_cluster">
                                <div class="input_item_button">
                                    <input type="submit" value="Submit" onClick={submitComplain} />

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

export default Usercomplain