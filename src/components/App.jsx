import React from 'react';
import Cats from '../cats';
import Cat from './Cat';

function App() {
  const [cat, setCat] = React.useState({id: 0, name: "", count: 0, src: ""});
  const [catList, setCatList] = React.useState([]);

  function handleClick (event) {
    var element = event.target;
    const catElement = document.getElementById("cat");
    var count;

    if (catElement !== null){
      catElement.setAttribute("id", "catshow");
    }

    for (var i=0; i<catList.length; i++) {
      if (catList[i].id == element.id) {
        count = catList[i].count;
        break;
      }
    }

    setCat({id: element.id, name: element.alt, count: count, src: element.src});
  }

  function handleChange (event) {
    const element = event.target;
    const id = element.id;
    const temp = catList;

    for (var i=0; i<temp.length; i++) {
      if (temp[i].id == id) {
        temp[i].count++;
        setCat({...cat, count: temp[i].count});
        break;
      }
    }

    setCatList(temp);
  }

  function handleSave (cat) {
    const catListConst = catList;
    setCat(cat);

    for (var i=0; i<catListConst.length; i++) {
      if (catListConst[i].id == cat.id) {
        catListConst[i] = cat;
        setCatList(catListConst);
        break;
      }
    }

    const element = document.getElementById("catinfoshow");
        
    if (element !== null) {
        element.setAttribute("id", "catinfo");
    }
}

  function mountData () {
    setCatList(Cats.map((cat, index) => {
      return ({id: index+1, ...cat});
    }));
  }

  return (
    <div className="container">
      
      <div className="catlist">
        {catList.length === 0 ? mountData() : null}
        {catList.map((cat, index) => {
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
