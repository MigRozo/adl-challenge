import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';
import { product } from './data/data.json';
import logo from './logo.svg';
import './App.css';

const App = _ => {
	return (
		<Router>
			<div className="App">
				<main className="wrapper">
					<div className="flexbox">
						<aside className="aside">
							<img className="logo" src={logo} alt="App Logo" />
							<nav className="nav">
								<ul>
									<li><a className="active" href="#">Productos</a></li>
									<li><a href="#">Organizador</a></li>
									<li><a href="#">Pagos</a></li>
									<li><a href="#">Transferencias</a></li>
									<li><a href="#">Certificados</a></li>
									<li><a href="#">Seguridad</a></li>
								</ul>
							</nav>
						</aside>
						<Switch>
							<Route exact path="/">
								<Home list={product} />
							</Route>
							<Route path="/detail/:id">
								<Detail list={product} />
							</Route>
						</Switch>
					</div>
				</main>
			</div>
		</Router>
	);
}

export default App;
