import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './static/index.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Perfil from './pages/perfil';
import Excelss from './pages/excel';


ReactDOM.render(
    (
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/perfil" component={Perfil}/>
                    <Route path="/excel" component={Excelss}/>                 
                </Switch>
            </App>
        </Router>
    ),
    document.getElementById('root')
);