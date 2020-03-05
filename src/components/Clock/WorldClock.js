import React, {Component} from 'react';

class WorldClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      local: props.local ? props.local : "America/Fortaleza",
      date: null
    };
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      2000
    );
  }

  tick() {
    let {local} = this.state;
    let url = "http://worldtimeapi.org/api/timezone/" + local;
    //console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(
      (result)=>{
        //console.log(result.datetime);
        this.setState({
          isLoaded: true,
          date: result.datetime
        });
      },
      (error)=>{
        this.setState({
          isloaded: false,
          error
        });
      }
    )
    

  }

  render() {
    let {error, isLoaded, local, date} = this.state;
    if (error){
      return (
      <div>
        <h2>World clock :/ {error.message}</h2>
        </div>
      )
    } 
    else 
      if (!isLoaded){
        return (
        <div>
          <h2>World clock is loading...</h2>
        </div>
        )
      }
      else{
        return (
        <div>
          <h2>{local ? local : "world clock -"} {date}</h2>
        </div>
        )
      }
  }
}

  export default WorldClock;