import './footer.css';
import logo from './NeverDontGiveUpDev_Logo_NDGU.Dev_Icon.png';

function Footer() {
    return (
        <footer>
            <a href="#"><img id="logo" src={logo} alt=""></img></a>
            <p id="social">Written by <a href="https://github.com/FridaWesterdahl" target="_blank">Frida</a>
                &ensp;&amp;&ensp;<a href="https://github.com/fredidi" target="_blank">Fredrik</a><br></br>
                NeverDontGiveUp Dev.</p>
        </footer>
    );
}

export default Footer;