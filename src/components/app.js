import { h, Component } from 'preact'
import { Router } from 'preact-router'

// Code-splitting is automated for routes
import Home from '../routes/home'
import Profile from '../routes/profile'
import Modal from './modal'
import AddFrom from './addtx'

export default class App extends Component {

	state = {
		modalOpen: true
	}
	
	addTx = () => {
		this.modalToggle()
	}

	modalToggle = () => {
		this.setState({modalOpen: !this.state.modalOpen})
	}
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render({}, {modalOpen}) {
		return (
			<div id="app">
				{modalOpen && <Modal dismiss={this.modalToggle}>
					<h3>Add a transaction</h3>
					<AddFrom />
				</Modal>}
				<Router onChange={this.handleRoute}>
					<Home path="/" add={this.addTx} />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
				</Router>
			</div>
		);
	}
}
