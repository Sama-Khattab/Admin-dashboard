import React from "react";
import { Link } from "react-router-dom";
import "../style/lib.css";
import "../style/min.css";
import "../style/Home.css";

const Home = () => {
    return (
        <div className="main">
            <div className="home">
                <h1>Wellcome, Admin !!</h1>
                <h4 > The available controles !! </h4>
                <div className="availableCont">
                    <Link to={"/controle trips"}>
                        <buttons className="mdl-button mdl-js-button mdl-button--raised color--light-blue">
                            Trips
                        </buttons>
                    </Link>
                    <Link to={"/control hotels"}>
                        <buttons className="mdl-button mdl-js-button mdl-button--raised color--light-blue">
                            Hotels
                        </buttons>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Home;