import styled from 'styled-components'

import Hero from '../../components/hero'
import Modal from '../../components/modal'
import List from '../../components/txlist'

const HomeWrapper = styled.div`
	padding: 20px;
	min-height: 100%;
	width: 100%;
`

const AddTx = styled.div`
	position: fixed;
	bottom: 0;
	right: 0;
	margin: 20px;
	width: 56px;
	height: 56px;
	border-radius: 10px;
	background: #d53369;
	cursor: pointer;
	box-shadow: 5px 5px 15px 5px rgba(168,168,168,1);
	&:before {
		content: "";
		position: absolute;
		color: #fff;
		height: 50%;
		border-left-width: 2px;
		border-left-style: solid;
		left: calc(50% - 1px);
		top: 25%;
	}
	&:after {
		content: "";
		position: absolute;
		color: #fff;
		width: 50%;
		border-bottom-width: 2px;
		border-bottom-style: solid;
		top: calc(50% - 1px);
		left: 25%;
	}
`

const Home = ({add}) => (
	<HomeWrapper>
		<Hero />
		<List />
		<AddTx onClick={add} />
	</HomeWrapper>
);

export default Home;
