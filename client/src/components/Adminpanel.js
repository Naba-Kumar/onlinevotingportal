import React,{useEffect} from 'react'

import {useHistory} from "react-router-dom"

import { NavLink } from 'react-router-dom'

import "../assets/css/admin.css"

 
function Adminpanel() {
     function toggleNav_none() {
         if(window.innerWidth<945){

             const non = document.getElementById("admin_menu")
             
             non.style.display = 'none';
            }
    }
    
    function toggleNav_block() {
        if(window.innerWidth<945){

        const block_ = document.getElementById("admin_menu")
    
        block_.style.display = 'block';
        }
    }


    
    const history = useHistory();
    const callAdminPage = async () => {
        try{
            const res = await fetch('/Adminpanel',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type": "application/json"
                },
                credentials:"include"
            });

            const data = await res.json();
            console.log(data)

            if(!res.status===200) {
                const error =new Error(res.error)
                throw error;
            }

        }
        catch(e){
            console.log(e)
            history.push('/adminlogin')
        }
    }


    useEffect(() => {
        callAdminPage();
    }, []);


    return (
        <>
        <nav class="admin_nav">

            <div class="admin_hamburger">
                <button onClick={toggleNav_block}> <i class="fas fa-bars"></i></button>
            </div>

            <div class="admin_nav_p">
                <p>Administration Panel</p>
            </div>

        </nav>


        <section class="admin_menu" id="admin_menu">
            <div class="admin_menu_sidebar">
            <div id="admin_menu_close">
                   <button onClick={toggleNav_none}><i class="fas fa-times"></i></button> 

                </div>
                <ul id="admin_menu_ul">
                {/* <li> <div id="admin_menu_close">
                   <button onClick={toggleNav_none}><i class="fas fa-times"></i></button> 
                </div></li> */}
                    <li class="slidebaritems"><NavLink onClick={toggleNav_none} to="/Adminpanel/Applications" ><i class="far fa-list-alt"></i> Applications</NavLink> </li>
                   
                    {/* <li class="slidebaritems"><NavLink to="/Adminpanel/Statistics"><i class="fas fa-chart-pie"></i> Statistics</NavLink> </li> */}
                    
                    <li class="slidebaritems"><NavLink onClick={toggleNav_none} to="/Adminpanel/Complains" ><i class="fas fa-exclamation"></i> Complains</NavLink> </li>
                    <li class="slidebaritems"><NavLink onClick={toggleNav_none} to="/Adminpanel/Admins" ><i class="fas fa-users-cog"></i> Admins</NavLink> </li>
                    <li class="slidebaritems"><NavLink onClick={toggleNav_none} to="/" onclick="toggleNav_none()"><i
                        class="fas fa-users"></i> User&nbsp;panel</NavLink></li>

                    <li class="slidebaritems"><NavLink onClick={toggleNav_none} to="/Adminpanel/Alogout" ><i class="fas fa-sign-out-alt"></i> logout</NavLink> </li>
                   
                </ul>

            </div>
        </section> 
        <section className="cover1"></section>
        <section className="cover2"></section>
        
           
    </>
    )
}

export default Adminpanel