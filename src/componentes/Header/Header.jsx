import "../../styles/componentes/Header/Header.scss";
import logoRepintar from "../../assets/logoRepintar.png";
//import {CartWidget} from "./CartWidget"

export const Header = () => {

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <img src={logoRepintar} alt="Logo de Repintar" />
                    <h1>RePintar</h1>
                </div>
                <nav className="navbar">
                    <a className="navbar__link" href="#">3-5 años</a>
                    <a className="navbar__link" href="#">6-8 años</a>
                    <a className="navbar__link" href="#">9-12 años</a>
                    <a className="navbar__link" href="#">para los mas grandes</a>
                </nav>
                {/*<CartWidget />*/}
            </div>
        </header>
      
    )
}
