import { Link } from "react-router-dom";
import "./Header.module.css"

function Header(){
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                {/*<Link to="/services">Services</Link>*/}
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/about">About</Link>
            </nav>

        </header>
    );
}

export default Header;
