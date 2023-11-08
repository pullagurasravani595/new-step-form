import {Component} from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Step from './context/Step'
import Step1 from './components/Step1'
import './App.css';

class App extends Component {
  state = {step: 0, detailsList: []}

  increaseStepCount = () => {
    this.setState(prevState => prevState.step + 1)
  }

  decreaseStepCount = () => {
    this.setState(prevState => prevState.step - 1)
  }

  updateList = (details) => {
    this.setState(prevState => ({detailsList: [...prevState.detailsList, details]}))
  }

  render() {
    const {step, detailsList} = this.state
    return (
      <Step.Provider value={{
        step,
        detailsList,
        increaseStep: this.increaseStepCount,
        decreaseStep: this.decreaseStepCount,
        updateList: this.updateList,
      }}>
        <div className='app-container'>
          <Step1 />
        </div>
      </Step.Provider> 
        
    )
  }
}

export default App;
