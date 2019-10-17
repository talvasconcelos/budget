import styled from 'styled-components'

const Toggle = styled.div`
    display: block;
    position: relative;
    top: 50px;
    left: 50px;

    z-index: 1;

    -webkit-user-select: none;
    user-select: none;
`

const MenuSlider = () => (
    <nav role="navigation">
        <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            
            <ul id="menu">
                <a href="#"><li>Home</li></a>
                <a href="#"><li>About</li></a>
                <a href="#"><li>Info</li></a>
                <a href="#"><li>Contact</li></a>
                <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
            </ul>
        </div>
    </nav>
)