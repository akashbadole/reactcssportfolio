import React from 'react';

const Service = (props) => {
    return (
        
            <div className="box ">
                <h4 style={{textAlign:'center'}}>{props.Title}</h4>
                <p style={{textAlign:'center'}}>{props.Description}</p>
            </div>
        
    );
}; 

export default Service;