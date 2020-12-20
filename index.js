import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import Card from "./Netflix"
import Sdata from "./Sdata"
ReactDOM.render((
    <>
        <h1 className="heading">My Favroutie Webseries</h1>
        <div className="cards">
            {Sdata.map((value) => {
                return (<Card
                    imgsrc={value.imgsrc}
                    title={value.title}
                    sname={value.sname}
                    link={value.link}
                />)
            })}
        </div>

    </>
), document.getElementById('root'))