import React, { Component } from "react";

class Timer extends Component {
  state = {
    time: 0,
    color: "#" + Math.floor(Math.random() * 16777215).toString(16)
  };

  // add your code here
  componentDidMount() {
    this.interval = setInterval(this.clockTick, 1000)
  }

  componentWillUnmount() { //clean up the interval(ongoing process) if component is deleted so it's not running behind the scenes!
    clearInterval(this.interval)
  }

  render() {
    const { time, color } = this.state;
    return (
      <section className="Timer" style={{ background: color }}>
        <h1>{time}</h1>
        <button onClick={this.stopClock}>Stop</button>
        <aside className="mountText">Mounted</aside>
        <small onClick={this.handleClose}>X</small>
      </section>
    );
  }

  //clock functions
  clockTick = () => {
    console.log(`Running ${this.state.color}`)
    this.setState(prevState => ({
      time: prevState.time + 1
    }));
  };

  stopClock = () => { //stop the interval if we want to stop the timer, but still want to see the component
    clearInterval(this.interval);
  };

  // for the 'x' button,
  handleClose = () => {
    this.props.removeTimer(this.props.id);
  };
}

export default Timer;
