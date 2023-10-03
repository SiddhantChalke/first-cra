import React from "react";

function Aboutus ({title,imgUrl, body}) {
    return ( 
        <div className="card">
            <h2 className="card-title">{title}</h2>
            <img src={imgUrl} alt="" />
            <p className="body">{body}</p>
        
            <div className="crd-btn">
                <button>View more</button>
            </div>
        </div>
     );
}
// created later for experimentation
export default Aboutus;