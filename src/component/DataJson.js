import React from "react";
import { Data } from "./Data";
export const DataJson = () => {
    return (
      <>
     
        
        {Data.map((data, key) => {
          return (
            <div className="col-md-3" key={key}>
                <div className="box-data">
                    <img src={data.image} />
                    <div className="label_product"><span className="label_sale wow animate__bounceIn">-6%</span></div>
                    <div className="pro-data">
                      <h4 className="wow animate__fadeInUp">{data.name}</h4>
                      <p className="price wow animate__fadeInUp">{data.price}</p>
                    </div>
                </div>
            </div>
          );
        })}
        
      </>
    );
  };

export default DataJson;