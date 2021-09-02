import React from 'react'

 function RecCard(props) {
     const{name, company, designation, message}=props.reccomendations;
    return (
        
            <div className="col-12 col-md-4">
          <div className="card shadow h100">
            <div className="card-body">
              <h4 className="card-text text-dark">{message}</h4>
              <p className="card-text text-secondary mb-0"> {name}</p>
              <p className="card-text text-secondary">{designation} at {company}</p>
            </div>
          </div>
        </div>
        
    )
}
export default RecCard;