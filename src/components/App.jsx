import React from 'react';
import Cats from '../cats';
import Cat from './Cat';

function App() {
  const [cat, setCat] = React.useState({name: "", src: ""});

  function handleClick (event) {
    var element = event.target;

    const cat = document.getElementById("cat");
    console.log(cat);

    if (cat !== null){
      cat.setAttribute("id", "catshow");
    }

    setCat({name: element.alt, src: element.src});
  }

  return (
    <div className="container">
      <div className="catlist">
        {Cats.map((cat, index) => (
          <img onClick={handleClick} className="pictures" src={cat.src} alt={cat.name} key={index} />
        ))}
      </div>

      <div className="content">
        <Cat name={cat.name} src={cat.src} />
      </div>

    </div>
  );
}

export default App;
