import React from 'react';
function Card(props) {
    return (
        <div className="card">
            <img src={props.imgsrc} alt="my img" className="cardImg" />
            <div className="cardInfo">
                <span className="cardCategory">{props.title}</span>
                <h3 className="cardTitle">{props.sname}</h3>
                <a href={props.link} target="_blank" className="button"><button>Watch Now</button></a>
            </div>
        </div>
    )
}
export default Card
