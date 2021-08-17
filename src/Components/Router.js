import React from "react";
import {
	HashRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";
import Header from "./Header";
import Home from "../Routes/Home";
import Info from "../Routes/Info";
import Board from "../Routes/Board";
import Login from "../Routes/Login";
import Signup from "../Routes/Signup";

const Routers = () => (
	<Router>
		<>
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/Info" exact component={Info} />
				<Route path="/Board" exact component={Board} />
				<Route path="/Login" exact component={Login} />
				<Route path="/Signup" exact component={Signup} />

				<Redirect from="*" to="/" />
			</Switch>
		</>
	</Router>
);
export default Routers;
