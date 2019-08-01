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
import Context from './pattern4/Context';
import Compound from './pattern5/Compound';
import Base from './pattern6/Base';

ReactDOM.render(
    <HashRouter>
        <Route path="/" component={App}  exact/>
        <Route path="/getText" component={GetText} />
        <Route path="/getTextContainer" component={GetTextContainer} />
        <Route path="/hoc" component={ExampleHOC} />
        <Route path="/renderProps" component={ExampleRenderProps} />
        <Route path="/context" component={Context} />
        <Route path="/compound" component={Compound} />
        <Route path="/extend" component={Base} />
    </HashRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
