import React from 'react'
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import './main.css'
import Sidebar from './Sidebar';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Home'
import Counter from '../Counter'
import Todo from '../Todo/Todo';

const MainLayout = () => {
    return (
        <BrowserRouter>
        <div id="container">
            <Header>Header</Header>
            <Sidebar>sidebar</Sidebar>
            <Main>
                <Switch>
                    <Route exact path="/home" component= {Home} />
                    <Route exact path="/Counter" component= {Counter} />
                    <Route exact path="/todo" component={Todo} />
                </Switch>
            </Main>
            <Footer>footer</Footer>
        </div>
        </BrowserRouter>
    )
}
export default MainLayout;