import { Link } from "react-router-dom";
import { FiUser, FiShoppingCart, FiSearch } from "react-icons/fi";

export default function Header() {
    return(
        <>
            <header>
                <nav className="navbar">
                        <Link to="/"  className="logo"><h1>LOGO</h1></Link>
                        <div className="searchbar">
                            <input type="text" placeholder="Buscar item" className="appearance-none outline-none border-none w-[250px]"/>
                            <button><FiSearch className=" cursor-pointer hover:opacity-50 bg-gray-400 rounded-4xl h-8 w-auto"/></button>
                        </div>
                    <div className="navbar-icons">
                        <Link to="/perfil" className="text-3xl"><FiUser/></Link>
                        <Link to="/cart" className="text-3xl"><FiShoppingCart/></Link>
                    </div>
                </nav>
            </header>
        </>
    )
}