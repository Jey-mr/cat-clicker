import React from "react";
import Admin from "./Admin";

function Cat(props) {
    const [age, setAge] = React.useState("New Born");

    function handleClick (event) {
        props.increase(event);
        setTheAge(props.count + 1);
    }

    function setTheAge (count) {
        if (count >= 4  &&  count < 10) {
            setAge("Kid");
        } else if (count >= 10  &&  count < 17) {
            setAge("Teen");
        } else if (count >= 18  &&  count < 50) {
            setAge("Adult");
        } else if (count >= 50){
            setAge("Old");
        }
    }

    function handleSave (element) {
        setTheAge(parseInt(element.count))
        props.onSave(element);
    }

    return (<div id="cat">
        <h2 className="names text">{props.name}</h2>
        <h3 className="age text">{age}</h3>
        <img onClick={handleClick} className="picture" id={props.id} src={props.src} />
        <div className="stats">
            <h2>No of clicks: </h2>
            <h2>{props.count}</h2>
        </div>
        <Admin onSave={handleSave} id={props.id} name={props.name} src={props.src} count={props.count} />
    </div>)
}

export default Cat;