import React from 'react';
import { NavLink } from 'react-router-dom';
import Projectdata from './Projectdata';

const Projects = () =>{
    return (
        <>
            <div className="container mt-4">
            <div class="row row-cols-1 row-cols-md-2 g-4"> 
                {
                    Projectdata.map((val)=>{
                        return(
                            <div class="col  shadow p-2 mb-5bg-white rounded">
                                <div class="card border-primary">
                                    <div className="d-flex justify-content-center "   >
                                    <img src={val.imgsrc} class="card-img-top  img-thumbnail shadow p-3 mb-5 bg-white rounded "  style= {{height: "10rem", width: "23rem"}} alt={val.altname}/>
                                    </div>
                                    <div class="card-body fw-bold ">
                                        <h5 className="card-title">{val.projectname}</h5>
                                        <p className="card-text">{val.description}</p>
                                        <NavLink to={val.link}>{val.projectname}</NavLink>
                                    </div>
                                </div>
                            </div>
                            )
                    })
                }               
            </div> 
            </div>
               
        </>
    )
};

export default Projects;
