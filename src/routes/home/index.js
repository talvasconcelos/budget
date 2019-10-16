import { h } from 'preact';
import style from './style';

import Hero from '../../components/hero'

const Home = () => (
	<div class={style.home}>
		<Hero />
		<div style={{width: '80%', borderRadius: '10px', height: '50px', margin: '0 auto', padding: '10px', background: '#fff', transform: 'translateY(-10px)'}}>
			hhhhh
		</div>
	</div>
);

export default Home;
