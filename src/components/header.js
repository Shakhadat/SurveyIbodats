import React from "react";
import logo from '../assets/gerb2.jpg'


export default function(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container">
                  <a className="navbar-brand" href="#">
                      <img src={logo} alt="" />
                  </a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                      <a className="nav-link active" aria-current="page" href="#">Asosiy sahifa</a>
                      <a className="nav-link" href="#statistixs">Statistik ma'lumotlar</a>
                      <a className="nav-link" href="#so'rovnoma">So'rovnoma</a>
                    </div>
                  </div>
                </div>
            </nav>
        </div>
    );
}