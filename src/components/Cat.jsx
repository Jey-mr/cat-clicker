import React from "react";

function Cat(props) {
    return (<div id="cat" className="cat">
        <h2 className="names">{props.name}</h2>
        <img onClick={props.increase} className="picture" id={props.id} src={props.src} />
        <div className="stats">
            <h2>No of clicks: </h2>
            <h2>{props.count}</h2>
        </div>
    </div>)
}

export default Cat;