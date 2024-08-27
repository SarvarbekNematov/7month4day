import { useReducer } from 'react';
import './App.css'
import { Button } from 'antd';

const initialState = {count:0}
const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement"
}
const reducer = (state, action) => {
  switch(action.type){
    case ACTIONS.INCREMENT :
      return {count : state.count == 10 ? state.count : state.count + 1}
    case ACTIONS.DECREMENT : 
      return {count : state.count == 0 ? state.count : state.count - 1}
  }
}
function App() {
  const [state , dispatch] = useReducer(reducer , initialState)
    return (
    <>
      
    </>
  )
}

export default App
