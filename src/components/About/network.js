import React , {Component} from "react";
import "../../assests/styles/About/network.css"
import chicken from "../../assests/images/Chicken.png"
import bank from "../../assests/images/Bank.png"
import gitbranch from "../../assests/images/GitBranch.png"
import feed from "../../assests/images/Feed.png"
import eggs from "../../assests/images/Eggs.png"
import charging from "../../assests/images/charging-outline.png"
import chartbar from "../../assests/images/ChartBar.png"
import chartpie from "../../assests/images/ChartPieSlice.png"
import india from "../../assests/images/India.png"

class Network extends Component{
    render(){
        return(
            <div className="company-network">
		<h1 class="head">We are spread everywhere</h1>
		<div class="description">
		<p id="network-descp">An extensive network of farms, processing facilities, trade partners, distributors and contract farmers across India</p>	
		</div>

		<div class="imag"><img id="india-img" src={india}/></div>

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
 
		{/* <div className="mapicons">
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
		</div> */}

	</div>
        )
    }
}
export default Network;