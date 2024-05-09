import React from "react";
import "../style/lib.css";
import "../style/min.css";
import { Link } from "react-router-dom";

const ForgetPass = () => {
    return (
        <div>
            <div className="mdl-layout mdl-js-layout color--gray is-small-screen login">
    <div className="mdl-layout__content" style={{width:"100%" ,height:"100%"}}>
    <div className="mdl-card mdl-card__login mdl-shadow--2dp" style={{paddingTop:"10%",paddingBottom:"11.75%", }}>
        <div className="mdl-card__supporting-text color--dark-gray" style={{marginBottom:"8",marginTop:"8"}} >
            <div className="mdl-grid" >
                <div className="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone">
                    <span className="mdl-card__title-text text-color--smooth-gray">DARKBOARD</span>
                </div>
                <div className="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone">
                    <span className="login-name text-color--white">Forgot password?</span>
                    <span className="login-secondary-text text-color--smoke">Enter your email below to recieve your password</span>
                </div>
                <div className="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label full-size">
                        <input className="mdl-textfield__input" placeholder="Email" type="text" id="e-mail"/>
                    </div>
                </div>
                <div className="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone submit-cell">
                    <div className="mdl-layout-spacer"></div>
                    <a href="index.html">
                        <buttons className="mdl-button mdl-js-button mdl-button--raised color--light-blue">
                            SEND PASSWORD
                        </buttons>
                    </a>
                </div>
            </div>
        </div>
    </div>
    </div>
</div>
        </div>
    )
}
export default ForgetPass;