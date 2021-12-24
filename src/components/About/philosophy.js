import React , {Component} from "react";
import "../../assests/styles/About/philosophy.css"
import jQuery from "jquery";

class Philosophy extends Component{
    render(){
        function changing_to_new(){
            const mainw = jQuery("#big-circle").width()
            const mainh = jQuery("#big-circle").height() - 200

            const sidew = jQuery("#small-circle2").width()
            const sideh = jQuery("#small-circle2").height()
            console.log(sidew,sideh)
            jQuery("#small_1_changing").animate({"height":mainh,"width":mainw},500,"linear")
            jQuery("#big_changing").animate({"height":sideh,"width":sidew},500,"linear")
        }

        function changing_to_old(){
            jQuery("#small_1_changing").animate({"height":"320px","width":"320px"},500,"linear")
            jQuery("#big_changing").animate({"height":"480px","width":"480px"},500,"linear")
        }
        return(
            <div className="quality-philosophy">
                    <div>
                        <h1 className="quality-head">Our Quality Philosophy</h1>
                        <table className="quality-names">
                            <tr>
                                <td rowSpan="2" id="big-circle"><div id="big_changing" >Quality <br/>Processes</div></td>
                                <td  id="small-circle1" onMouseEnter={() => changing_to_new()} onMouseLeave={() => changing_to_old()} ><div id="small_1_changing">Quality <br/> Livestock</div></td>
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