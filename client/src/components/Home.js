import React from 'react'
import "../assets/css/home.css"



import { NavLink } from 'react-router-dom'



function Home() {
    return (
        <>
        <section className="upperbody">
        <div className="upperbody_container">
            <p>“The vote is precious. It is the most powerful non-violent tool we have in a democratic society, and we
                must use it.”</p>
            <button><NavLink to="/Votingpage"><i class="fas fa-vote-yea"></i>  Vote Now</NavLink></button>
        </div>
    </section>

    
    <section className="feature_container">
        <h1>Features</h1>
        <div  className="features">

            
            <div className="box">
                <NavLink to="/Newapllication" ><i class="far fa-address-card"></i> New Application</NavLink>
                
            </div>
            <div className="box">
                <NavLink to="/Statistics"><i  className="fas fa-chart-pie"></i> Statistic</NavLink>
            </div>
            <div className="box">
                <NavLink  to="/Stats" ><i className="far fa-question-circle"></i> Application Status</NavLink>
            </div>
            <div className="box">
                <NavLink  to="/Usercomplain"><i className="fas fa-exclamation"></i> Register Complain</NavLink>
            </div>
        </div>
        </section>

       
    <section className="about">
        <div className="about_left ,about_box">
            <h2>About Project </h2>
            
            <p>E-Voting prtal is a System where it allows user to vo in a election system with proper authentication</p>

            <h2>Technology used</h2>
            <p>M-MongoDB</p>
            <p>E-ExpressJs</p>
            <p>R-ReactJs</p>
            <p>N-NodeJs</p>

        </div>
        <div id="about_mid">

        </div>
        <div className="about_right ,about_box">
            <h2>Important Links</h2>
            <a href="https://onlinevotingportal.herokuapp.com/"><i className="fas fa-link"></i> Apply for Voter Card</a>
            <a href="https://onlinevotingportal.herokuapp.com/"><i className="fas fa-link"></i> Public Grievance</a>
            <a href="https://onlinevotingportal.herokuapp.com/"><i className="fas fa-link"></i> RTI Online</a>
           
            <h2>Contacts</h2>

            <p><i className="fas fa-phone-volume"></i>  TOLL-FREE 101010</p>
            <p><i className="far fa-envelope"></i>  Project@info.com</p>
           

        </div>
    </section>
    <footer>
        <p>College Project PDUAM &copy; 2021</p> <p>Developed By Naba Kr Chouhan</p>
    </footer>
       </>
        
    )
}

export default Home
