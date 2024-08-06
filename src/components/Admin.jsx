import React from 'react';

function Admin (props) {
    function handleClick (event) {
        const element = event.target;

        console.log(element);
    }

    return (<div id="info">
        <button onClick={handleClick} type="button" name="admin" >Admin</button>
        <div class="catinfo">
            <form>
                Cat Name: <input type="text" name="catname" value={props.name} /> <br />
                Image Source: <input type="text" name="catpic" value={props.src} /> <br />
                Cat Count: <input type="text" name="count" value={props.count} /> <br />
            </form>
        </div>
    </div>)
}

export default Admin;