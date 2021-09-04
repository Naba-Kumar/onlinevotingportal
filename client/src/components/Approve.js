
import React, { NavLink, useState } from "react"



function Approve() {

    const width = {
        "width": "100%"
    }
    const width2 = {
        "width": "95%"
    }

    const note = {
        "padding": "0 20px",
        "letter-spacing": "1px"
    }




    const [user, setUser] = useState({
        firstName: "", lastName: "", password: "", epicNumber: "", dob: "", gender: "", phone: "", email: "", state: "", district: "", assemblyConstituency: ""
    });



    let name, value;



    const handleInputs = (e) => {
        console.log(e)
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }



    const Approve = async (e) => {

        try {

            e.preventDefault();

            const { firstName, lastName, epicNumber, password, dob, gender, phone, email, state, district, assemblyConstituency } = user;
            console.log(user)

            const res = await fetch("/apllicationApprove", {
                method: "POST",
                headers: {
                    "Content-Type": "user/json; charset=UTF-8"

                },

                body: JSON.stringify({
                    firstName, lastName, epicNumber, password, dob, gender, phone, email, state, district, assemblyConstituency
                })
            });

            const data = await res.json();
            console.log(data)
            if (data.status === 422 || !data) {
                window.alert("Invalid Registration")
                console.log("Invalid Registration")
            } else {
                window.alert("Citizen Added")
                console.log("Registration Successfull")

            }
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
                            <h2>users </h2>
                        </div>


                        <form class="modal-content">
                            <div class="input_cluster">
                                <div class="input_items">

                                    <label for="firstName">First Name :</label>

                                    <input type="text" name="firstName" id="firstName" value={user.firstName} required onChange={handleInputs} placeholder="Enter first Name" required />


                                </div>

                                <div class="input_items">
                                    <label for="lastName">Last Name :</label>
                                    <div class="inputs">

                                        <input type="text" name="lastName" id="lastName" value={user.lastName} onChange={handleInputs} placeholder="Enter last Name" required />
                                    </div>


                                </div>
                            </div>

                            <div class="input_cluster">
                                <div class="input_items">

                                    <label for="epicNumber">Assign a Unique Epic Number :</label>
                                    <div class="inputs">

                                        <input type="text"
                                            name="epicNumber" id="epicNumber"
                                            value={user.epicNumber}
                                            onChange={handleInputs}
                                            placeholder="ABC0000000-ABC9999999"
                                        required />
                                    </div>
                                </div>
                                <div class="input_items">

                                    <label for="dob">Date Of Birth :</label>

                                    <input type="text" name="dob" id="dob" value={user.dob} onChange={handleInputs} placeholder="Enter Date of Birth" required />
                                </div>
                            </div>



                            <div class="input_cluster">

                                <div class="input_items">

                                    <label for="gender">Gender :</label>


                                    <input type="text"
                                        name="gender" id="gender" value={user.gender} onChange={handleInputs}
                                        placeholder="Enter Gender " required />

                                </div>
                                <div class="input_items">

                                    <label for="phone">Phone</label>

                                    <input type="number" name="phone" id="phone" value={user.phone} onChange={handleInputs} placeholder="Enter Gender" required />

                                </div>


                            </div>

                            <div class="input_cluster">

                                <div class="input_items">

                                    <label for="email">Email:</label>

                                    <input type="email" id="email" name="email" value={user.email} onChange={handleInputs} placeholder="Enter Email" required />

                                </div>

                                <div class="input_items">

                                    <label for="state">State:</label>
                                    <input type="text" id="state"
                                        value={user.state} name="state" onChange={handleInputs} placeholder="Enter State" required />
                                </div>

                            </div>



                            <div class="input_cluster">


                                <div class="input_items">
                                    <label for="district">District:</label>
                                    <input type="text" id="district" name="district" value={user.district} onChange={handleInputs} required placeholder="Enter District"/>

                                </div>

                                <div class="input_items">
                                    <label for="">Assembly constituency:</label>
                                    <input type="text" id="assemblyConstituency"
                                        name="assemblyConstituency" id="assemblyConstituency"
                                        value={user.assemblyConstituency}
                                        onChange={handleInputs} placeholder="Enter Assembly constituency" required />

                                </div>

                            </div>
                            <div class="input_cluster">


                                <div class="input_items" >
                                    <label for="password"> Hashed password:</label>
                                    <input type="text" id="password" name="password" value={user.password} onChange={handleInputs} placeholder="Enter Hashed password" required />

                                </div>


                            </div>





                            <div class="input_cluster" id="admin_input_cluster">
                                <div class="input_item_button">
                                    <input type="submit" value="APPROVE" onClick={Approve} />

                                </div>


                            </div>

                        </form>

                    </section>
                </section>

            </div>
        </>
    )

}

export default Approve