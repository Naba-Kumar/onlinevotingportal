import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom"


// import "../assets/css/Alogout.css"

function Alogout() {
    
    const history = useHistory();


    useEffect(() => {
        fetch("/logout", {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json"

            },
            credentials: "include"
        }).then((res) => {
            history.push('/Adminlogin', { replace: true })
            if(res.status != 200){
                const err = new Error(res.error);
                throw err
            }
        }).catch((e) => {
            console.log(e)
        })
    })







    return (
        <>

        </>
    )
}

export default Alogout