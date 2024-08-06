import React from 'react';
import Cats from '../cats';
import Cat from './Cat';

function App() {
  const [cat, setCat] = React.useState({id: 0, name: "", count: 0, src: ""});
  const [catState, setCatState] = React.useState([]);

  function handleClick (event) {
    var element = event.target;
    const cat = document.getElementById("cat");
    var count;

    if (cat !== null){
      cat.setAttribute("id", "catshow");
    }

    for (var i=0; i<catState.length; i++) {
      if (catState[i].id == element.id) {
        count = catState[i].count;
        break;
      }
    }

    setCat({id: element.id, name: element.alt, count: count, src: element.src});
  }

  function handleChange (event) {
    const element = event.target;
    const id = element.id;
    const temp = catState;

    for (var i=0; i<temp.length; i++) {
      if (temp[i].id == id) {
        temp[i].count++;
        setCat({...cat, count: temp[i].count});
        break;
      }
    }

    setCatState(temp);
  }

  function handleSave (cat) {
    const catList = catState;
    setCat(cat);

    for (var i=0; i<catList.length; i++) {
      if (catList[i].id == cat.id) {
        catList[i] = cat;
        setCatState(catList);
        break;
      }
    }

    const element = document.getElementById("catinfoshow");
        
    if (element !== null) {
        element.setAttribute("id", "catinfo");
    }
}

  function mountData () {
    setCatState(Cats.map((cat, index) => {
      return ({id: index+1, ...cat});
    }));
  }

  return (
    <div className="container">
      
      <div className="catlist">
        {catState.length === 0 ? mountData() : null}
        {catState.map((cat, index) => {
          return <img onClick={handleClick} className="pictures" src={cat.src} alt={cat.name} id={cat.id} key={index} />
        })}
      </div>

      <div className="content">
        <Cat increase={handleChange} onSave={handleSave} id={cat.id} name={cat.name} count={cat.count} src={cat.src} />
      </div>

    </div>
  );
}

export default App;
