import React, { useState, useEffect } from 'react'

import "../assets/css/questionsComps.css"
function Complains() {

    const [datas, setdatas] = useState([{
        _id:"",name: "", email: "", subject: "", complain: ""
    }]);

    useEffect(() => {
        fetch("/showcomplains").then(res => {
            if (res.ok) {

                return res.json()
            }
        }).then(jsonres => setdatas(jsonres))
    })







    const [user, setUser] = useState ({
        resolved:""
    });



    let name,value;



    const handleInputs = (e) => {
        console.log(e)
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
    }







    const post = async (e) => {

        try {

            e.preventDefault();

            const { resolved } = user;

            const res = await fetch("/resolved", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"

                },

                body: JSON.stringify({
                    resolved
                })
            });

            const data = await res.json();
            console.log(user.resolved)
           
        } catch (err) {
            console.log(err)
        }




    }

    return (
        <>
            <section class="view">
                {datas.map(data =>

                    <section class="admin_option , q-c-container">
                        <div class="q-c-body">


                            <p>Complain No : {user.resolved=data._id} </p>
                            <p>Name: {data.name}</p>
                            <p>Email:  {data.email}</p>
                            <p>Subject:  {data.subject}</p>
                            <p>Complain Details: </p>
                            <p id="q-c-disc">{data.complain}</p>
                            <p style={{"color":"red"}}>Note : Please Resolve From Bottom To Top </p>
                            <div class="input_cluster" id="admin_input_cluster">
                              
                                <div class="input_item_button">
                                    <input style={{"display":"block"}} type="submit" value="Resolved" onClick={post} />

                                </div>


                            </div>
                        </div>


                    </section>
                )}
            </section>


        </>
    )
}
export default Complains