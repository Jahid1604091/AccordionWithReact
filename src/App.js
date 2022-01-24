import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [qsts,setQsts] = useState(data)
  return <main>
    <div className="container">
      <h3>Some Random Questions and Their answers</h3>
      <section className="info">
        {
          qsts.map((qst)=>{
            return <SingleQuestion key={qst.id} {...qst}/>
          })
        }
      </section>
    </div>
  </main>;
}

export default App;
