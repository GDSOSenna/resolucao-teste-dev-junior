import { Link } from "react-router-dom";
import { FiUser, FiShoppingCart, FiSearch } from "react-icons/fi";
import "../styles/Header.css"

export default function Header() {
    return(
        <>
            <header className="header">
                <nav className="nav">
                    <div className="logo-search-div">
                        <Link to="/"><h1 className="logo">LOGO</h1></Link>
                        <div className="search-div">
                            <input type="text" placeholder="Buscar item" />
                            <button><FiSearch/></button>
                        </div>
                    </div>
                    <div className="icons-div">
                        <Link to="/perfil"><FiUser/></Link>
                        <Link to="/cart"><FiShoppingCart/></Link>
                    </div>
                </nav>
            </header>
        </>
    )
}