import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../pic/co.jpg'

const Home = () =>{
    return(
        <>
            <section id="header" className="d-flex algin-items-center">
                <div className="container-fluid nav-bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>
                                        Learning is a best way of <strong className=" btn-outline-primary pe-none">GROWING</strong>
                                    </h1>
                                    <h2 className="my-3">
                                        Coding == Skill<strong>++</strong>.
                                    </h2>
                                    <div className="mt3">
                                        <NavLink to="./about" className="btn btn-outline-primary">
                                            KNOW ME BETTER
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={web} className="img-fluid animated" alt="home-img" />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;