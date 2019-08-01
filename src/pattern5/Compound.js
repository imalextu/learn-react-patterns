import React, { Fragment } from 'react'
import '../App.css';

const TabItem = props => {
  const { active, onClick } = props
  const tabStyle = {
    width: '250px',
    color: active ? 'pink' : 'blue',
    border: active ? '1px orange solid' : '0px',
  }
  return (
    <h1 style={tabStyle} onClick={onClick}>
      {props.children}
    </h1>
  )
}

class Tabs extends React.Component {
  state = {
    activeIndex: 0,
  }
  render() {
    const newChildren = React.Children.map(this.props.children, (child, index) => {
      if (child.type) {
        return React.cloneElement(child, {
          active: this.state.activeIndex === index,
          onClick: () => this.setState({ activeIndex: index }),
        })
      }
      return child
    })
    return (
      <Fragment>
        {newChildren}
      </Fragment>
    )
  }
}

const Compound = (props, context) => {
  return (
    <Tabs>
      <TabItem>One</TabItem>
      <TabItem>Two</TabItem>
      <TabItem>Three</TabItem>
      <TabItem>Four</TabItem>
    </Tabs>
  );
};

export default Compound
