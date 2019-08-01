import React from 'react';
import '../App.css';

class Base extends React.PureComponent {
  getAlbumItem = () => {
    return null
  }
  render () {
    return (
      <div style={{border:'1px solid red',margin:5,width:300}}>
        {this.getAlbumItem()}
        <div>通用逻辑写这里</div>
      </div>
    )
  }
}
class Mobile extends Base {
  getAlbumItem = () => {
    return <span>mobile</span>
  }
}
class Pc extends Base {
  getAlbumItem = () => {
    return <span>pc</span>
  }
}

const Extend = () => {
  return (
    <div>
    <Mobile/>
    <Pc/>
    </div>

  );
};

export default Extend