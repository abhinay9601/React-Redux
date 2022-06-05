import "./App.css";
import {useSelector,useDispatch} from "react-redux"
import {incNumber,decNumber} from "./actions/index"

function App() {
  const  myState=useSelector((State)=>State.changeTheNumber);
  const dispatc =useDispatch();
  return (
    <>
      <div className="container">
        <h1>Increment/Decrement Counter</h1>
        <h4>using React and Redux</h4>
        <div className="quantity">
          <a href="#" className="quantity_minus" title="Decrement" onClick={()=>dispatc(decNumber())}>
            <span>-</span>
          </a>
          <input
            name="quantity"
            type="text"
            className="quantity_input"
            value={myState}
          ></input>
          <a href="#" className="quantity_plus" title="Increment" onClick={()=>dispatc(incNumber())}>
            <span>+</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
