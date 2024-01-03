import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./header.module.scss";

export const Header = ({ setIsOpenCart, cartList, search }) => {
    const [value, setValue] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        search(value.toLowerCase());
    };

    return (
        <header className={styles.header__allWindow}>
            <div className={styles.header__menu}>
                <img src={Logo} alt="Logo Kenzie Burguer" />
                <div className={styles.header__box}>
                    <form onSubmit={handleFormSubmit}>
                        <input
                            className="default__input"
                            type="text"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                        <button type="submit" className="search__button">
                            <MdSearch size={20} />
                        </button>
                    </form>
                    <button className="cart__button" onClick={() => setIsOpenCart(true)}>
                        <MdShoppingCart size={28} />
                        <div>
                            <span>{cartList.length}</span>
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
};
