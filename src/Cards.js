import React from 'react';
import "./cards.css";

const Card = (props) => {
    return(
    <>
                        <div className="col-md-4 col-10 mx-auto">
                        <div className="card">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <img src={props.imgsrc} className="card-img-top card_img" alt={props.imgsrc} />
                        </div>
                        </div>
    </>
    );
};

    export default Card;