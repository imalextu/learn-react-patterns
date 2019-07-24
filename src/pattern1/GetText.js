import React from 'react';
import '../App.css';

export default class GetText extends React.Component {
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
        <div>外部获取的数据：{this.state.text}</div>
        <div>UI代码</div>
      </div>
    )
  }
}