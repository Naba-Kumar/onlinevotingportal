import React from 'react'
import  { Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Newapllication from "./components/Newapplication"
import Profile from "./components/Profile"
import Adminpanel from "./components/Adminpanel"
import Statistics from "./components/Statistics"
import Applications from "./components/Applications"
import Admins from "./components/Addadmins"
import Complains from "./components/Complains"
import Usercomplain from "./components/Usercomplain"
import Votingpage from "./components/Votingpage"

import Userlogin from "./components/Userlogin"
import Adminlogin from "./components/Adminlogin"

import Approve from "./components/Approve"
import UserVote from "./components/Uservote"

import Check from "./components/Check"
import Stats from "./components/Stats"

import Alogout from "./components/Alogout"

import Ulogout from "./components/Ulogout"




 

function App() {
  return (
    <>
      
        <Navbar />

          {/* <Route exact path="/projectfrontent">
             <Home />
          </Route>  */}
          <Route exact path="/">
             <Home />
          </Route>

          <Route path="/Votingpage">
            <Votingpage />
          </Route>

          <Route path="/Newapllication">
            <Newapllication />
          </Route>
          
          <Route path="/Profile">
            <Profile />
          </Route>
          <Route path="/UserVote">
            <UserVote />
          </Route>

          <Route path="/Statistics">
            <Statistics />
          </Route>

          

          <Route path="/Usercomplain">
            <Usercomplain />
          </Route>

          <Route path="/Userlogin">
            <Userlogin />
          </Route>
          <Route path="/Adminlogin">
            <Adminlogin />
          </Route>


          <Route path="/Check">
            <Check />
          </Route>
          <Route path="/Stats">
            <Stats />
          </Route>

          <Route path="/Ulogout">
            <Ulogout />
          </Route>


      

          <Route path="/Adminpanel">
            <Adminpanel />
            <>
            <Route  path="/Adminpanel/Applications">
              <Applications />
            </Route>
            <Route  path="/Adminpanel/Approve">
              <Approve />
            </Route>
            

       
            <Route  path="/Adminpanel/Admins">
              <Admins />
            </Route>
            
            <Route  path="/Adminpanel/Complains">
              <Complains />
            </Route>

            <Route  path="/Adminpanel/Alogout">
              <Alogout />
            </Route>


            </>
            </Route>

        

    
    </>
  )
}

export default App
