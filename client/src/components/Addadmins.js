import React, {NavLink,useState} from "react"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import "../assets/css/delete.css"

function Admins() {
    const width = {
        width: "90%"
    }


    const [user, setUser] = useState({
        firstName: "", lastName: "",  empId: "", dob: "", password: ""
    });



    let name, value;



    const handleInputs = (e) => {
        console.log(e)
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }



    const postAdminApplication = async (e) => {

        try {

            e.preventDefault();

            const { firstName, lastName, empId, dob, password } = user;
            console.log(user)

            const res = await fetch("/addadmin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                    // "Accept":"application/json"

                },

                body: JSON.stringify({
                    firstName, lastName, empId, dob, password
                })
            });

            const data = await res.json();
            const wr = data.massage
            
                toast(wr);
            
        } catch (err) {
            console.log(err)
        }




    }






    return (
        <>
            <div class="view">

                <section class="admin_option">

                    <section class="admin_approval_forms">
                        <div class="admin_option_head">
                            <h2> Add Admins</h2>
                        </div>

                        <form class="modal-content-delete">

                            <div class="input_items" style={width}>

                                <label for="firstName">First Name :</label>

                                <input type="text" name="firstName" id="firstName" autoComplete="off"
                                    value={user.firstName}
                                    onChange={handleInputs}
                                    placeholder="Enter First Name"
                                    required
                                />


                            </div>

                            <div class="input_items" style={width}>
                                <label for="lastName">Last Name :</label>
                                <div class="inputs">

                                    <input type="text" name="lastName" id="lastName"
                                        value={user.lastName}
                                        onChange={handleInputs}
                                        placeholder="Enter Last Name"
                                        required />
                                </div>


                            </div>



                            <div class="input_items" style={width}>

                                <label for="empId">Assign Employee ID </label>
                                <div class="inputs">

                                    <input type="text" 
                                        name="empId" id="empId"
                                        value={user.empId}
                                        onChange={handleInputs}
                                        placeholder="Assing 6 digit Employee ID EX-id0001"
                                        required />
                                </div>
                            </div>
                            <div class="input_items" style={width}>

                                <label for="dob">Date Of Birth :</label>

                                <input type="date" name="dob" id="dob"
                                    value={user.dob}
                                    onChange={handleInputs}
                                    placeholder="Enter DOB"
                                    required />
                            </div>

                            <div class="input_items" style={width}>

                            <label for="password">Create a password :</label>
                                    <div class="inputs">

                                        <input type="password" name="password" id="password"
                                            value={user.password}
                                            onChange={handleInputs}
                                            placeholder="create a password"
                                            required/>
                                    </div>
                            </div>




                            <div class="input_cluster" id="admin_input_cluster">
                                <div id="remove_button">

                                    <input type="submit" value="Add" 
                                    onClick={postAdminApplication}/>


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

export default Admins