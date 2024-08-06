import React from 'react';
import Cats from '../cats';
import Cat from './Cat';

function App() {
  const [cat, setCat] = React.useState({name: "", count: 0, src: ""});
  const [catState, setCatState] = React.useState([]);
  const [once, setOnce] = React.useState(true);

  function handleClick (event) {
    var element = event.target;
    const cat = document.getElementById("cat");

    if (cat !== null){
      cat.setAttribute("id", "catshow");
    }

    setCat({name: element.alt, count: 0, src: element.src});
  }

  function mountData () {
    setCatState(Cats.map((cat, index) => {
      return ({id: index+1, ...cat});
    }));
  }

  // function checkStatus () {
  //   console.log(catState);
  //   const temp = catState;

  //   if (temp.length > 0  &&  once){
  //     temp[0].count = 4;
  //     setCatState(temp);
  //     setOnce(false);
  //   }
  // }

  return (
    <div className="container">
      <div className="catlist">
        {catState.length === 0 ? mountData() : null}
        {/* {checkStatus()} */}
        {catState.map((cat, index) => {
          return <img onClick={handleClick} className="pictures" src={cat.src} alt={cat.name} key={index} />
        })}
      </div>

      <div className="content">
        <Cat name={cat.name} count={cat.count} src={cat.src} />
      </div>

    </div>
  );
}

export default App;
