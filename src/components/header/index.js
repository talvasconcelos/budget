import styled from 'styled-components'
import { Link } from 'preact-router/match'
// import style from './style';

const Head = styled.header`
	// position: fixed;
	// left: 0;
	// top: 0;
	background: cyan;
	width: 100%;
	height: 56px;
	padding: 20px;
`

const Add = styled.div`
	float: right;
	width: 48px;
	height: 48px;
	border-radius: 5px;
	background: red;
	cursor: pointer;
`

const Header = () => (
	<Head>
		<Add />
		{/* <nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/profile">Me</Link>
			<Link activeClassName={style.active} href="/profile/john">John</Link>
		</nav> */}
	</Head>
);

export default Header;
