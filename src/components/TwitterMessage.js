import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: "",
      remaining: props.maxChars,
    };
  }

  updateState = event => {
    console.log("updateState:", event.target.name)
    this.setState({
      message: event.target.value,      
      remaining: this.props.maxChars - event.target.value.length,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.updateState} type="text" name="message" id="message" value={this.state.message}/>
    <p>Characters Remaining: {this.state.remaining}</p>
      </div>
    );
  }
}

export default TwitterMessage;
