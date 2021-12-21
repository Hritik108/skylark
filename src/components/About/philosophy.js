import React , {Component} from "react";
import "../../assests/styles/About/philosophy.css"
import jQuery from "jquery";

class Philosophy extends Component{
    render(){
        // function changes(){
        //     jQuery("#small-circle1").css({"width":"340px","height":"340px","transition":"2s"})
        // }
        return(
            <div className="quality-philosophy">
                    <div>
                        <h1 className="quality-head">Our Quality Philosophy</h1>
                        <table className="quality-names">
                            <tr>
                                <td rowSpan="2" id="big-circle"><div>Quality <br/>Processes</div></td>
                                <td  id="small-circle1"><div>Quality <br/> Livestock</div></td>
                            </tr>
                            <tr>
                            <td id="small-circle2"><div>Quality <br/> Livestock</div></td>
                            </tr>
                        </table>
                    </div>
            </div>
        )
    }
}
export default Philosophy;