import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Homepage from "./pages/HomePage/HomePage";
import ChatRoomPage from "./pages/ChatRoom/ChatRoom";

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/room/:name" component={ChatRoomPage} />
            </Switch>
        </Layout>
    );
};

export default App;
