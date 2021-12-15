import React , {Component} from "react";
import "../../assests/styles/About/timeline.css"
import bank from "../../assests/images/Bank.png"
class Timeline extends Component{
    render(){
        return(
            <div className="timeline-body">
                <div> 
                <h1 className="h">Our Journey</h1>
                </div>

                <div className="d">
                    <p>Celeberating 50 Years of glory in the Hatcheries era</p>
                </div>

                <div><i className="arrow up"></i></div>


                <div className="timeline">

                <div className="dg">
                    <h1 className="Years">1985</h1>
                    <div className="timeline-container right">
                    <div className="content">
                        <p id="timeline-descp">
            Me. Jagbir Singh Dhull and Mr. Jasbir Singh Deswal established Skylark Hatcheries
                        </p>
                    </div>
                </div>
            </div>
            

            <div className="dg"><h1 className="Years H1">1985</h1>
            <div className="timeline-container right b1">
                <div className="content c1">
                <p id="timeline-desp">Skylark research and breeding farm established at village Urlana Kalan, Haryana
            </p>
                </div>
            </div>
            </div>
            
            <div className="dg"><h1 className="Years">1985</h1>
            <div className="timeline-container right">
                <div className="content">
                <p id="timeline-descp">Himgiri Hatcheries was set up in a village in Himachal Pradesh
            </p>
                </div>
            </div>
            </div>


            <div className="dg"><h1 className="Years H2">1985</h1>
            <div className="timeline-container right b2">
                    <div className="content c2">
                <p id="timeline-desp">Breeder capacity increased to 2,00,000. Skylark breeding farm renamed
            </p>
                </div>
            </div>
            </div>

            </div>
                <div><i className="arrow down"></i></div>
            </div>
        )
    }
}
export default Timeline;