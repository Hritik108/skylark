import React , {Component} from "react";
import Footer from "../Footer"
// import 'bootstrap/dist/css/bootstrap.min.css'
import "../../assests/styles/Home/about.css"
import Ceo3 from "../../assests/images/Ceo3.png"
import Ceo2 from "../../assests/images/Ceo2.png"
import Ceo1 from "../../assests/images/CEO1.png"
import chicken from "../../assests/images/Chicken.png"
import bank from "../../assests/images/Bank.png"
import gitbranch from "../../assests/images/GitBranch.png"
import feed from "../../assests/images/Feed.png"
import eggs from "../../assests/images/Eggs.png"
import charging from "../../assests/images/charging-outline.png"
import chartbar from "../../assests/images/ChartBar.png"
import chartpie from "../../assests/images/ChartPieSlice.png"
import ayurvet from "../../assests/images/image 33.png"
import Face from "../../assests/images/image 32.png"
import pfi from "../../assests/images/image 35.png"
import IAI from "../../assests/images/image 37.png"
import clfma from "../../assests/images/image 39.png"
import HIFA from "../../assests/images/image 37-1.png"
import india from "../../assests/images/India.png"
import { InputGroup , FormControl,Button } from "react-bootstrap";
// import '../../../node_modules/font-awesome/css/font-awesome.min.css';

class about extends Component{
    render(){
        return(
            <div className="about-home">
                <div className="about-heading">
                    <div>
                        <h1 id="about-head">About Us</h1>
                        <h5 id="about-subhead">We have our offices Everywhere</h5>
                    </div>
                </div>
                <div className="company-aim">
                    <div>
                        <h3 id="aim">
                            Our <span className="keyword">passion for quality</span> has
                            helped us <br/> emerge as one of the most reputed and<br/> trusted names in the poultry industry.
                        </h3>
                    </div>
                </div>
                <div className="quality-philosophy">
                    <div>
                        <h1 className="quality-head">Our Quality Philosophy</h1>
                        <table className="quality-names">
                            <tr>
                                <td rowSpan="2" id="big-circle"><div>Quality Processes</div></td>
                                <td id="small-circle1"><div>Quality Livestock</div></td>
                            </tr>
                            <tr>
                            <td id="small-circle2"><div>Quality Livestock</div></td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="team">
                    <div>
                        <h1 id="team-heading">Our leadership team</h1>
                        <h5 id ="team-subhead">We have our offices everywhere</h5>
                    </div>
                    <div className="team-members">
                        <div className="member">
                            <div className="image"><img src={Ceo3} alt="Ceo3"></img></div>
                            <div className="member-name"><h1 id="name">Jagbir Singh Dhull</h1></div>
                            <div className="member-position"><p id="position">Managing Director, <span className="keyword">Skylark Group</span></p></div>
                            <div className="member-quote"><p id="quote">“Quality, at Skylark, is not just a word but a philosophy that is ingrained across our processes and operations”</p></div>
                        </div>
                        <div className="member">
                            <div className="image"><img src={Ceo1} alt="Ceo1"></img></div>
                            <div className="member-name"><h1 id="name">Vikas Dhull</h1></div>
                            <div className="member-position"><p id="position">Managing Director, <span className="keyword">Skylark Feeds</span></p></div>
                            <div className="member-quote"><p id="quote">“Quality, at Skylark, is not just a word but a philosophy that is ingrained across our processes and operations”</p></div>
                        </div>
                        <div className="member">
                            <div className="image"><img src={Ceo2} alt="Ceo2"></img></div>
                            <div className="member-name"><h1 id="name">Nitesh Dhull</h1></div>
                            <div className="member-position"><p id="position">Director, HR, <span className="keyword">Skylark Group</span></p></div>
                            <div className="member-quote"><p id="quote">“Quality, at Skylark, is not just a word but a philosophy that is ingrained across our processes and operations”</p></div>
                        </div>
                    </div>
                </div>
                
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
                <p>Skylark research and breeding farm established at village Urlana Kalan, Haryana
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
                <p>Breeder capacity increased to 2,00,000. Skylark breeding farm renamed
            </p>
                </div>
            </div>
            </div>

            </div>
                <div><i className="arrow down"></i></div>
            </div>
        <div className="company-awards">
            <div className="award-heading"><h1 id="award-head">Our rich experience of over two decades in the poultry industry 
is acknowledged by a host of awards:</h1></div>
            <div className="award-section1">
                <div className="award-main">
                    <div className="award-img1"><img id="img" src={ayurvet} alt="ayurvet"></img></div>
                    <div className="award-descp"><p id="descp">Felicitated as the Chief Guest at a
national seminar on 'Novel Feed
Additives' organised by Ayurvet, in 2012</p></div>
                </div>
                <div className="award-main">
                    <div className="award-img2"><img id="img" src={Face} alt="face"></img></div>
                    <div className="award-descp"><p id="descp">Appreciation award for contribution
to 1st Meat and Poultry
Summit 2013 by CII and FACE</p></div>
                </div>
                <div className="award-main">
                    <div className="award-img3"><img id="img" src={pfi} alt="pfi"></img></div>
                    <div className="award-descp"><p id="descp">Felicitated as the Chief Guest at a
national seminar on 'Novel Feed
Additives' organised by Ayurvet, in 2012</p></div>
                </div>
            </div>
            <div className="award-section2">
                <div className="award-main">
                    <div className="award-img4"><img id="img" src={IAI} alt="IAI"></img></div>
                    <div className="award-descp"><p id="descp">Honoured as the Guest of Honour at
the International Animal Industry (IAI)
Expo 2011</p></div>
                </div>
                <div className="award-main">
                    <div className="award-img5"><img id="img" src={clfma} alt="CLFMA"></img></div>
                    <div className="award-descp"><p id="descp">Awarded a certificate by CLFMA for the
Seminar on 'Animal Agriculture -
The Future' in 2010</p></div>
                </div>
                <div className="award-main">
                    <div className="award-img4"><img id="img" src={HIFA} alt="HIFA"></img></div>
                    <div className="award-descp"><p id="descp">Awarded the 'Karmayogi Samman'
(2007-2008) by HIFA
</p></div>
                </div>
            </div>
        </div>

        <div className="company-network">
		<h1 class="head">We are spread everywhere</h1>
		<div class="description">
		<p id="network-descp">An extensive network of farms, processing facilities, trade partners, distributors and contract farmers across India</p>	
		</div>

		<div class="imag"><img src={india}/></div>

<div className="tabl">
			
<table className="network">
  <tr className="row1">
    <td className="td"><img src={bank}></img></td>
    <td className="td"><img src={gitbranch} /></td>
    <td className="td"><img src={feed} /></td>
    <td className="td"><img src={chicken} /></td>
  </tr>
  <tr class="row2">
    <td className="td"><p className="iconName">4 Corporate offices</p></td>
    <td className="td"><p className="iconName">25 Corporate offices</p></td>
    <td className="td"><p className="iconName">120 Feed Plants</p></td>
    <td className="td"><p className="iconName">30 Breeding Centers</p></td>
  </tr>
  <tr className="row1">
    <td className="td"><img src={eggs} /></td>
    <td className="td"><img src={chartpie} /></td>
    <td className="td"><img src={chartbar} /></td>
    <td className="td"><img src={charging} /></td>
  </tr>
   <tr className="row2">
    <td className="td"><p className="iconName">21 Hatcheries</p></td>
    <td className="td"><p className="iconName">2 Processing (Nutrich)</p></td>
    <td className="td"><p className="iconName">5 Sales & Marketing</p></td>
    <td className="td"><p className="iconName">12 Mineral mixture plant</p></td>
  </tr>
</table>
		</div>
 
		<div className="mapicons">
			<div className="mapicons1 map"><img src={bank} className="my"/></div>
			<div className="mapicons2 map"><img src={bank} className="my"/></div>
			<div className="mapicons3 map"><img src={bank} className="my"/></div>
			<div className="mapicons4 map"><img src={bank} className="my"/></div>
			<div className="baricons1 map"><img src={chartbar} className="my"/></div>
			<div className="baricons2 map"><img src={chartbar} className="my"/></div>
			<div className="baricons3 map"><img src={chartbar} className="my"/></div>
			<div className="baricons4 map"><img src={chartbar} className="my"/></div>
			<div className="baricons5 map"><img src={chartbar} className="my"/></div>
			<div className="baricons6 map"><img src={chartbar} className="my"/></div>
			<div className="baricons7 map"><img src={chartbar} className="my"/></div>
			<div className="officeicons1 map"><img src={gitbranch} className="my"/></div>
			<div className="officeicons2 map"><img src={gitbranch} className="my"/></div>
			<div className="officeicons3 map"><img src={gitbranch} className="my"/></div>
			<div className="officeicons4 map"><img src={gitbranch} className="my"/></div>
			<div className="officeicons5 map"><img src={gitbranch} className="my"/></div>
			<div className="officeicons6 map"><img src={gitbranch} className="my"/></div>
			<div className="officeicons7 map"><img src={gitbranch} className="my"/></div>
		</div>

	</div>
            
            <div>
                <Footer color={"#EFF9F8"} />
            </div>
            </div>
            )
    }
}

export default about;
