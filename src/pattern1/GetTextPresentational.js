import React from 'react';
import '../App.css';

export default class GetTextPresentational extends React.Component {
  render() {
    return (
      <div>
        <div>外部获取的数据：{this.props.text}</div>
        <div>UI代码</div>
      </div>
    )
  }
}