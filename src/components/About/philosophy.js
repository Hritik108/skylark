import React , {Component} from "react";
import "../../assests/styles/About/philosophy.css"


class Philosophy extends Component{
    render(){
        return(
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
        )
    }
}
export default Philosophy;