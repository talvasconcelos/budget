import styled from 'styled-components'

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
	border-radius: 5px;
	background: red;
	cursor: pointer;
	padding: 6px;
`

const Plus = styled.div`
	position: relative;
	border-width: 2px;
	border-style: solid;
	height: 20px;
	width: 20px;
	border-radius: 50%;
	cursor: pointer;
	transition: 0.3s all;
	&:before, after{
		content: "";
		position: absolute;
		height: 4px;
		width: 4px;
	}
	&:before{
		border-bottom-width: 2px;
		border-bottom-style: solid;
		border-left-width: 2px;
		border-left-style: solid;
		left: 9px;
		top: 5px;
	}
	&:after{
		border-top-width: 2px;
		border-top-style: solid;
		border-right-width: 2px;
		border-right-style: solid;
		left: 5px;
		top: 9px;
	}
`

import Hero from '../../components/hero'
import List from '../../components/txlist'

const Home = () => (
	<HomeWrapper>
		<Hero />
		<List />
		<AddTx>
			<Plus />
		</AddTx>
	</HomeWrapper>
);

export default Home;
