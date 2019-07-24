import React from 'react';
import '../App.css';

const Provider = (props) => {
  // 判断是否是女性用户
  let isWoman = Math.random() > 0.5 ? true : false
  if (isWoman) {
    const allProps = { add: '高阶组件增加的属性', ...props }
    return props.children(allProps)
  } else {
    return <div className="table">女士专用，男士无权浏览</div>;
  }
}


const List = (props) => {
  return (
    <div className="table">
      <div>女士列表页</div>
      <div>{props.add}</div>
    </div>
  )
}


const ShoppingCart = (props) => {
  return (
    <div className="table">
      <div>女士购物页</div>
      <div>{props.add}</div>
    </div>
  )
}


const ExampleRenderProps = () => {
  return (
    <div>
      <Provider>
        {props => <List add={props.add} />}
      </Provider>
      <Provider>
        {props => <ShoppingCart add={props.add} />}
      </Provider>
      {/* 如果List只接受plus属性
      <Provider>
        {props => {
          const { add } = props
          return < List plus={add} />
        }}
      </Provider> */}
    </div>
  )
}
export default ExampleRenderProps

