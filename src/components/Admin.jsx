import React from 'react';

function Admin (props) {
    const [cat, setCat] = React.useState({});

    function handleClick (event) {
        setCat({name: props.name, src: props.src, count: props.count});
        const element = document.getElementById("catinfo");

        if (element !== null) {
            element.setAttribute("id", "catinfoshow");
        }
    }

    function handleChange (event) {
        const {name, value} = event.target;
        setCat({...cat, [name] : value});
    }

    function handleCancel () {
        setCat({name: props.name, src: props.src, count: props.count});
        const element = document.getElementById("catinfoshow");
        
        if (element !== null) {
            element.setAttribute("id", "catinfo");
        }
    }

    return (<div id="info">
        <button onClick={handleClick} type="button" name="admin" >Edit</button>
        <br />
        <br />
        <div id="catinfo">
            <form>
                Cat Name: <input onChange={handleChange} type="text" name="name" value={cat.name} /> <br />
                Image Source: <input onChange={handleChange} type="text" name="src" value={cat.src} /> <br />
                Cat Count: <input onChange={handleChange} type="text" name="count" value={cat.count} /> <br />
                <button onClick={() => props.onSave({id: props.id, ...cat})} type="button"name="save" >Save</button>
                <button onClick={handleCancel} type="button" name="cancel" >cancel</button>
                <br />
                <br />
            </form>
        </div>
    </div>)
}

export default Admin;