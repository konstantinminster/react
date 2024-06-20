// You can work here or download the template
// Your components go here
import { useState } from 'react';


const CounterApp = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
    <h1>my great counter</h1>
    <p>my wife needs {count} shoes</p>
    <button onClick={() => setCount((prev) => prev + 1)}>never -</button>
    <button onClick={() => setCount((prev) => prev + 1 )}>always +1 </button>
    </div>
  );
};



const App = () => {
  return (
    <>
    <CounterApp />
    </>

  );
 
};

export default App;
