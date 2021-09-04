import React,{useState,useEffect} from 'react'
import "../assets/css/statistics.css"
import bjp from "../assets/image/bjp.png"
import inc from "../assets/image/inc.png"
import bpf from "../assets/image/bpf.png"
import ajp from "../assets/image/ajp.png"
import none from "../assets/image/none.png"

    
    


function Statistics() {



    const [statistics, setApplications] = useState([{
       party:"", votecount:"", total:""
    }]);
    

    useEffect(() => {
        fetch("/statistics").then(res => {
            if (res.ok) {
    
                return res.json()
            }
        }).then(jsonres => setApplications(jsonres) ,
        
        )
    })


    



    return (
        <>
            <section className="statistics">
     
                    <div  className="stat-h2"><h2>Statistics</h2></div>

                <section id="admin_stats_container">
                    
                {statistics.map(stat =>
                    <div className="admin_stat_box">

                        <div className="admin_stats_container_up , stat-box">
                            <p style={{"text-transform":"uppercase"}}>{stat.party}</p>

                        </div>

                        <div className="admin_stats_container_mid , stat-box">
                            <p>{stat.votecount}</p>
                        </div>

                        <div className="admin_stats_container_lw , stat-box">
                            <p>{((stat.votecount*100)/stat.total).toFixed(1)} %</p>

                        </div>
                        <div class="hr"></div>

                    </div>
                   
                   )}


                </section>


            </section>

        </>
    )
}
export default Statistics