import React from "react";
import Admin from "./Admin";

function Cat(props) {
    return (<div id="cat">
        <h2 className="names">{props.name}</h2>
        <img onClick={props.increase} className="picture" id={props.id} src={props.src} />
        <div className="stats">
            <h2>No of clicks: </h2>
            <h2>{props.count}</h2>
        </div>
        <Admin name={props.name} src={props.src} count={props.count} />
    </div>)
}

export default Cat;