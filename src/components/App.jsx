import React from 'react';
import Cat from './Cat';
import Cats from '../cats';

function App() {

  return (
    <div class="container">
      {Cats.map((cat) => {
        return (<Cat name={cat.name} src={cat.src} />)
      })}
    </div>
  )
}

export default App
