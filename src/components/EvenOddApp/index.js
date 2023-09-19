import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  Increment = () => {
    const randomValue = Math.floor(Math.random() * 100 + 1)
    this.setState(prevState => ({count: prevState.count + randomValue}))
  }

  render() {
    const {count} = this.state
    const text = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="container1">
        <h1>count {count}</h1>
        <p>Count is {text}</p>
        <button type="button" className="button1" onClick={this.Increment}>
          Increment
        </button>
        <p>*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
