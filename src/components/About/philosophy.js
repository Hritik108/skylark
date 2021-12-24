import React , {Component} from "react";
import "../../assests/styles/About/philosophy.css"
import jQuery from "jquery";

class Philosophy extends Component{
    render(){
        function changing_to_new(){
            const w = jQuery("#big-circle").width()
            const h = jQuery("#big-circle").height() - 200
            console.log(h)
            jQuery("#changing").animate({"height":h,"width":w},500,"linear")
        }

        function changing_to_old(){
            jQuery("#changing").animate({"height":"320px","width":"320px"},500,"linear")
        }
        return(
            <div className="quality-philosophy">
                    <div>
                        <h1 className="quality-head">Our Quality Philosophy</h1>
                        <table className="quality-names">
                            <tr>
                                <td rowSpan="2" id="big-circle"><div>Quality <br/>Processes</div></td>
                                <td  id="small-circle1" onMouseEnter={() => changing_to_new()} onMouseLeave={() => changing_to_old()} ><div id="changing">Quality <br/> Livestock</div></td>
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