import React from 'react';
import module from './Header.module.scss'

import logo from '../../assets/logo.jpg';
import white from '../../assets/white.png';
import vector from '../../assets/Vector.png';
import food from '../../assets/food.png';

function Header(props) {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <header>
            <nav>
                <img className={module.nav_item} src={logo} alt="Логотип"></img>
                
                
                <a className={module.nav_item} href='#'>О нас</a>
                <div className={module.nav_itemStart}>
                    <div className={module.itemStart}>Начать</div>
                </div>
            </nav>
        </header>
    );
}

export default Header;