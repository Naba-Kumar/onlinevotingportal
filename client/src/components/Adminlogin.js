import React,{useState} from 'react'
import {useHistory} from "react-router-dom"

import "../assets/css/applications.css"

function Adminlogin() {
    const width={
        width:"100%",
        "max-width":"600px"
    } 
    const popup={

        "max-width":"600px"
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
        empId: "",  password: ""
    });

    
    let name, value;



    const handleInputs = (e) => {
        console.log(e)
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }



    const callAdminlogin = async (e) => {

        try {

            e.preventDefault();

            const { empId, password } = user; 
            console.log(user)

            const res = await fetch("/adminLogin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Accept":"application/json"

                },

                body: JSON.stringify({
                    empId, password
                })
            });

            const data = await res.json();
            alert(data.massage)
            if (data.status === 400 ) {

            } else {
                console.log("Login Successfull")
                history.push('/adminPanel/Applications')

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
                            <h2 style={h2}> <i class="fas fa-user-shield"></i>  Admin Login</h2>
                        </div>
                        <hr />

                        <form class="modal-content">
                            {/* <div class="input_cluster"> */}
                            <div class="input_items" style={{ "width": "100%", "display": "flex", "justifyContent": "center", "flexDirection": "column" }}>


                                



                                <div class="input_items" style={width}>

                                    <label for="empId">Employee ID :</label>
                                    <div class="inputs">

                                        <input type="text" placeholder="Enter 6 digit Employee ID"
                                            name="empId" id="empId" required 
                                            value={user.email}
                                            onChange={handleInputs}
                                            />
                                    </div>
                                </div>
                               

                                <div class="input_items" style={width}>

                                    <label for="password">Password :</label>

                                    <input type="password" placeholder="Password" name="password" id="password" required 
                                    value={user.password}
                                    onChange={handleInputs}
                                    />
                                </div>



                            </div>




                            <div class="input_cluster" id="admin_input_cluster">
                                <div class="input_item_button">
                                    <input type="submit" value="Submit"  
                                    onClick={callAdminlogin}
                                    />

                                </div>
                                

                            </div>

                            
                  

                        </form>

                    </section>
                </section>
            </div>
        </>
    )
}

export default Adminlogin