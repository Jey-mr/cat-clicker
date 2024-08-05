import React from "react";

function Cat(props) {
    const[clicks, setClicks] = React.useState(0);

    function handleClick() {
        const count = clicks;
        setClicks(count + 1);
    }

    function handleChange() {
        setClicks(0);
    }

    React.useEffect(() => {
        handleChange();
    }, [props.name, props.src]);

    return (<div id="cat" className="cat">
        <h2 className="names">{props.name}</h2>
        <img onClick={handleClick} className="picture" src={props.src}/>
        <div className="stats">
            <h2>No of clicks: </h2>
            <h2>{clicks}</h2>
        </div>
    </div>)
}

export default Cat;