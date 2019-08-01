import React from 'react';
import '../App.css';

// 第1步，创建Context
const ThemeContext = React.createContext();


// 第2步，生成Provider和Consumer
const ThemeProvider = ThemeContext.Provider;
const ThemeConsumer = ThemeContext.Consumer;


// 第3步，使用Provider
const Page = () => (
  <div>
    <Title>标题</Title>
    <Content>
      内容
    </Content>
  </div>
);
const Context = () => {
  return (
    <div>
      <ThemeProvider value={{ mainColor: 'blue', textColor: 'pink' }} >
        <Page />
      </ThemeProvider>
    </div>
  )
}
// 第4步，使用Consumer，这里演示一个class组件。Counsumer使用了renderProps模式哦。
class Title extends React.Component {
  render() {
    return (
      <ThemeConsumer>
        {
          (theme) => (
            <h1 style={{ color: theme.mainColor }}>
              {this.props.children}
            </h1>
          )
        }
      </ThemeConsumer>
    );
  }
}

// 第4步，使用Consumer，这里演示一个函数式组件
const Content = (props, context) => {
  return (
    <ThemeConsumer>
      {
        (theme) => (
          <p style={{ color: theme.textColor }}>
            {props.children}
          </p>
        )
      }
    </ThemeConsumer>
  );
};



export default Context

