import React,{useState} from 'react'
import "../assets/css/delete.css"

function Delete() {
    const width={
        width:"90%"
    }
    
    

    
        
    const [user, setUser] = useState({
        firstName: "", lastName: "" , epicNumber: ""
    });

    

    let name, value;

    
    
    const handleInputs = (e) => {
        console.log(e)
        name = e.target.name;
        value = e.target.value;
        
        setUser({ ...user, [name]: value });
    }

    

    const Delete = async (e) => {

        try {

            e.preventDefault();

            const { firstName, lastName, epicNumber } = user;
            console.log(user)

            const res = await fetch("/userDelete", {
                method: "POST",
                headers: {
                    "Content-Type": "user/json; charset=UTF-8"

                },

                body: JSON.stringify({
                    firstName, lastName, epicNumber
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
                        <h2>Remove citizen</h2>
                    </div>

                    <form class="modal-content-delete">
                        
                            <div class="input_items" style={width}>

                                <label for="First Name">First Name :</label>

                                <input type="text" placeholder="Enter First Name" name="First Name" value={user.firstName} onChange={handleInputs} required />


                            </div>

                            <div class="input_items" style={width}>
                                <label for="Last Name">Last Name :</label>
                                <div class="inputs">

                                    <input type="text" placeholder="Enter Last Name" name="Last Name" value={user.lastName} onChange={handleInputs} required />
                                </div>


                            </div>
                        

                        
                            <div class="input_items" style={width}>

                                <label for="Epic Number">Epic Number:</label>
                                <div class="inputs">

                                    <input type="text" placeholder="Epic Number:"
                                        name="epicNumber" value={user.epicNumber} onChange={handleInputs} required />
                                </div>
                            </div>
                           
                        




                        <div class="input_cluster" id="admin_input_cluster">
                            <div id="remove_button">
                               
                                <input type="submit" value="Remove" onClick={Delete} />


                            </div>
                            
                            
                        </div>

                    </form>

                </section>
            </section>
        </div>
    </>
    )
}

export default Delete