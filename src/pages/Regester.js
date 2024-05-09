import React from "react";
import "../style/login.css";
import "../style/lib.css";
import "../style/min.css";
import { Link } from "react-router-dom";

const Regester = () => {
    return (
        <div>
            <div className="mdl-layout mdl-js-layout color--gray is-small-screen login">
    <main className="mdl-layout__content" style={{backgroundImage:"url('../images/Dark_background_1920x1080.png')"}}>
        <div className="mdl-card mdl-card__login mdl-shadow--2dp" style={{marginTop:"5%", marginBottom:"5.85%"}}>
        <div className="mdl-card__supporting-text color--dark-gray">
            <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone">
                    <span className="mdl-card__title-text text-color--smooth-gray">DARKBOARD</span>
                </div>
                <div className="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone">
                    <span className="login-name text-color--white">Sign up</span>
                </div>
                <div className="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label full-size">
                        <input className="mdl-textfield__input" type="text" placeholder="Name" id="name"/>
                    </div>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label full-size">
                        <input className="mdl-textfield__input" type="text" placeholder="password" id="password"/>
                    </div>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label full-size">
                        <input className="mdl-textfield__input" type="text" placeholder="Email" id="e-mail"/>
                        
                    </div>
                    <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect checkbox--colored-light-blue checkbox--inline" for="checkbox-1">
                        <input type="checkbox" id="checkbox-1" className="mdl-checkbox__input" checked/>

                    </label>
                    <span className="login-link">I agree all statements in <a href="#" className="underlined">terms of service</a></span>
                </div>
                <div className="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone submit-cell">
                    <Link to={"/"} className="login-link">I have already signed up</Link>
                    <div className="mdl-layout-spacer"></div>
                    <Link to={"/controlers"}>
                        <buttons className="mdl-button mdl-js-button mdl-button--raised color--light-blue">
                            SIGN UP
                        </buttons>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </main>
</div>
        </div>
    )
}

export default Regester;