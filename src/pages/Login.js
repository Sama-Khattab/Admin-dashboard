import React from "react";

import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="main">
            <div classNameName="mdl-layout mdl-js-layout color--gray is-small-screen login">
    <main className="mdl-layout__content" style={{height:"100%"}}>
                    <div className="mdl-card mdl-card__login mdl-shadow--2dp" style={{ marginBottom: " 6.65%",marginTop:"-1.55%" , width:"40%",marginLeft:"35%" }}>
                <div className="mdl-card__supporting-text color--dark-gray">
                    <div className="mdl-grid">
                        <div className="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone">
                            <span className="mdl-card__title-text text-color--smooth-gray">DARKBOARD</span>
                        </div>
                        <div className="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone">
                            <span className="login-name text-color--white">Sign in</span>
                            <span className="login-secondary-text text-color--smoke">Enter fields to sign in to DARKBOARD</span>
                        </div>
                        <div className="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone">
                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label full-size">
                                <input className="mdl-textfield__input" required type="text" placeholder="Email" id="e-mail"/>
                            </div>
                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label full-size">
                                <input className="mdl-textfield__input" required type="text" placeholder="passwprd" id="password"/>
                            </div>
                            <Link to={"/Forget Password"} className="login-link">Forgot password?</Link>
                        </div>
                        <div className="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone submit-cell">
                            <Link to={ "/Regesteration"} className="login-link">Don't have account?</Link>
                            <div className="mdl-layout-spacer"></div>
                            <Link to={ "/controlers"} >
                                <buttons className="mdl-button mdl-js-button mdl-button--raised color--light-blue">
                                    SIGN IN
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

export default Login;