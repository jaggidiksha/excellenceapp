import './App.css';
import Navbar from './Navbar.js';
import Usestate from './Usestate.js';
import Useref from './Useref.js';
import Stopwatch from './Stopwatch.js';

function App() {
let a='john'
function on(){
  alert("hii")
}

  return (
<>
<Useref/>
<Stopwatch/>
{/* <Usestate/> */}
    {/* <h1 style={{backgroundColor:"pink",color:"blue"}}>react app</h1>
  <h2>hello</h2>
  <h3>welcome {a}</h3>
  <button onClick={on}>click</button>
  <Navbar/> */}
</>
  );
}

export default App;
