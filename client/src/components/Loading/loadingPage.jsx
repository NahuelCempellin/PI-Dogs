import React from "react";
import { TIME_OUT } from "../Constants/Constants";
import { DivWait } from "../../Styles/Loading/pleaseWait";

export default function LoadingPage({setLoading}){
    return(
        <DivWait>
            <div>
                <h2>PLEASE WAIT...</h2>
                <img src={TIME_OUT} alt=""/>
            </div>
            <div className="setLoading">
                {
                    setTimeout(()=>{
                        setLoading(false);
                    }, 3000)
                }
            </div>
        </DivWait>
    )
}