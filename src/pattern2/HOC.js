import React from 'react';
import '../App.css';

// 判断是否是女性用户



const judgeWoman = (Component) => {
  const NewComponent = (props) => {
    // 判断是否是女性用户
    let isWoman = Math.random() > 0.5 ? true : false
    if (isWoman) {
      const allProps = { add: '高阶组件增加的属性', ...props }
      return <Component {...allProps} />;
    } else {
      return <div className="table">女士专用，男士无权浏览</div>;
    }
  }

  return NewComponent;
};


const List = (props) => {
  return (
    <div className="table">
      <div>女士列表页</div>
      <div>{props.add}</div>
    </div>
  )
}
const WithList = judgeWoman(List)

const ShoppingCart = (props) => {
  return (
    <div className="table">
      <div>女士购物页</div>
      <div>{props.add}</div>
    </div>
  )
}
const WithShoppingCart = judgeWoman(ShoppingCart)


const ExampleHOC = () => {
  return (
    <div>
      <WithList />
      <WithShoppingCart />
    </div>
  )
}
export default ExampleHOC

