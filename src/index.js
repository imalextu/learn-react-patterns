import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {HashRouter, Route,} from 'react-router-dom';
import GetText from './pattern1/GetText';
import App from './App';
import GetTextContainer from './pattern1/GetTextContainer';
import ExampleHOC from './pattern2/HOC';
import ExampleRenderProps from './pattern3/RenderProps';

ReactDOM.render(
    <HashRouter>
        <Route path="/" component={App}  exact/>
        <Route path="/getText" component={GetText} />
        <Route path="/getTextContainer" component={GetTextContainer} />
        <Route path="/hoc" component={ExampleHOC} />
        <Route path="/renderProps" component={ExampleRenderProps} />
    </HashRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
