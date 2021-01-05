import React from 'react';
import Data from './Cvjson.json'
import mine from '../pic/me.JPG';
import './css/About.css';

const About = ( ) =>{
  const basic = Data.basics;
  console.log(basic.name);

  const generateElement = (key, value) =>{
      return(
         <div key={key} className="row">
         <div className= "d-inline col-12 pt-5 pt-lg-0 order-2 order-lg-1  justify-content-center flex-column">{key}
         <div className="d-inline col-12 order-1 order-lg-2">{value}</div>
         </div>
         
         
         
       </div>
      );
  };

  const generateData = (data)=> {
     const newData = Object.keys(data).reduce((result, currentKey) => {
         if (typeof data[currentKey] === 'string' || data[currentKey] instanceof String) {
           const elementToPush = generateElement(currentKey, data[currentKey]);
           result.push(elementToPush);
         } else {
           const nested = generateData(data[currentKey]);
           result.push(...nested);
         }
         return result;
       }, []);
       return newData;

  }
 
    return(
      <>
        <div className="container mt-4">
          <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col " style={{width: "100%"}}>
            <div class="card border-info mb-3 shadow-lg  mb-3 bg-white rounded" >
              <div class="row g-0 ">
                <div class="col-md-4">
                  <img src={mine} alt="amrita" class="img-thumbnail"/>
                </div>
                <div class="col-md-8" >
                  <div class="card-body basicinfo ">
                    <p class="card-text fw-bold">{generateData(Data.basics)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
            
            <div class="col">
              <div class="card  border-info shadow-lg  mb-3 bg-white rounded">
                <div class="card-body eduinfo">
                  <p class="card-text fw-bold ">{generateData(Data.education)}</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-info shadow-lg  mb-3 bg-white rounded">
                <div class="card-body appinfo">
                  <p class="card-text fw-bold fst-italic fs-5 ">{generateData(Data.application)}</p>
                </div>
              </div>
            </div>
            <div class="col " style={{width: "100%"}}>
              <div class="card border-info shadow-lg  mb-3 bg-white rounded">
                <div class="card-body text-wrap skillinfo">
                  <p class="card-text fw-bold ">{generateData(Data.skills)}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </>
    );
};

export default About;