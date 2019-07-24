import React from 'react';
import GetTextPresentational from './GetTextPresentational'
import '../App.css';

export default class GetTextContainer extends React.Component {
  state = {
    text: null,
  }
  
  componentDidMount() {
    fetch('https://icanhazdadjoke.com/',
      { headers: { Accept: 'application/json' } }).then(response => {
        return response.json()
      }).then(json => {
        this.setState({ text: json.joke })
      })
  }

  render() {
    return (
      <div>
        <GetTextPresentational text={this.state.text}/>
      </div>
    )
  }
}