import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

function Header(){

    const contextValue = useContext(Context)

    return(
        <header >
            <h1>Instituto Salud</h1>
            <nav>
                <ul className="ul-header">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/contact'>Contacto</Link></li>
                    <li><Link to='/favs'>Favoritos</Link></li>
                    <button className="theme" onClick={contextValue.toggleTheme}>
                        <img src="/lunar.png" alt='tema' />
                    </button>
                </ul>
                
            </nav>
        </header>
    )
}
export default Header