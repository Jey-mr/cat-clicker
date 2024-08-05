import React from "react";

function Cat(props) {
    const[clicks, setClicks] = React.useState(0);

    function handleClick() {
        const count = clicks;
        setClicks(count + 1);
    }

    return (<div class="cats">
        <h2 class="names">{props.name}</h2>
        <img onClick={handleClick} class="pictures" src={props.src}/>
        <div class="stats">
            <h2>No of clicks: </h2>
            <h2>{clicks}</h2>
        </div>
    </div>)
}

export default Cat;