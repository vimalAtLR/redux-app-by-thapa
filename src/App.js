import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './actions/index'

function App() {
  let amount = useSelector((state) => state.changeNum);
  let dispatch = useDispatch();
  const {incNum, decNum} = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="App">
      <div className='container mt-4'>
        <h2 className='mb-4'>Increment/Decrement Amount</h2>
        <button className="btn btn-primary mx-2" onClick={() => decNum(5)}> - </button>
          value : {amount}
        <button className="btn btn-primary mx-2" onClick={() => incNum(5)}> + </button>
    </div>
    </div>
  );
}

export default App;
