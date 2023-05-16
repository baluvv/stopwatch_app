import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {secs: 0}

  startTimer = () => {
    this.timerId = setInterval(this.tikTik, 1000)
  }

  tikTik = () => {
    this.setState(prevState => ({secs: prevState.secs + 1}))
  }

  stopTimer = () => {
    clearInterval(this.timerId)
  }

  reset = () => {
    clearInterval(this.timerId)
    this.setState({secs: 0})
  }

  render() {
    const {secs} = this.state
    let minutes = parseInt(secs / 60)
    let seconds = secs - minutes * 60
    if (minutes < 10) {
      minutes = `0${minutes}`
    }
    if (seconds < 10) {
      seconds = `0${seconds}`
    }
    return (
      <div className="app-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="watch-container">
          <div className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p className="timer">Timer</p>
          </div>
          <h1 className="seconds">
            {minutes}:{seconds}
          </h1>
          <div className="buttons-container">
            <button
              type="button"
              className="button start-button"
              onClick={this.startTimer}
            >
              Start
            </button>
            <button
              type="button"
              className="button stop-button"
              onClick={this.stopTimer}
            >
              Stop
            </button>
            <button
              type="button"
              className="button reset-button"
              onClick={this.reset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
