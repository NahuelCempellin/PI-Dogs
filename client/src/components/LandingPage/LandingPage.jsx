import {React} from "react";
import { Link } from "react-router-dom";
import Sorita from '../../Styles/Doges/Sorita.jpeg';
import Clarita from '../../Styles/Doges/Clarita.jpeg';
import Tuca from '../../Styles/Doges/Tuca.jpeg';
import Diamond from '../../Styles/Doges/Diamond.jpeg';
import Titi from '../../Styles/Doges/Titi.jpeg';
import Lula from '../../Styles/Doges/Lula.jpeg';
import { Slyder, Ul,Li, P, Div, Div2, DivContTotal } from "../../Styles/landing";
import { Button1 } from "../../Styles/Button/button";
import LogoDog from "../Logo/Logo";

export default function LandingPage(){
  

    return(
        <DivContTotal>
            <LogoDog/>
            <Div>
                <P>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    
                    I hope you enjoy this page as I did when making it.
                    The dogs belong to the students of group 1 of the 23rd cohort of Soy Henry!
                </P>
                <Div2>
            <Slyder>
                <Ul>
                    
                    <Li><img src={Sorita} alt=''/></Li>
                    <Li><img src={Clarita} alt=''/></Li>
                    <Li><img src={Tuca} alt=''/></Li>
                    <Li><img src={Titi} alt=''/></Li>
                    <Li><img src={Diamond} alt=''/></Li>
                    <Li><img src={Lula} alt=''/></Li>
                    
                </Ul>
            </Slyder>
            <Link to='/dogs'>
            <Button1 className="learn-more">GO!</Button1>
            </Link>
            </Div2>
            </Div>
        </DivContTotal>
    )
}