import { MdDelete } from "react-icons/md";
import styles from "../modal.module.scss"

export const CartItemCard = ({ product, cartList, onRmvCart }) => {
    const removeFromCart = () => {
        const index = cartList.findIndex((item) => item.id === product.id);

        if (index !== -1) {
            const updatedCart = [...cartList];
            updatedCart.splice(index, 1);
            onRmvCart(updatedCart);
            localStorage.setItem("@CARTPRODUCTS", JSON.stringify(updatedCart));
        }
    };

    return (
        <li>
            <div className={styles.item}>
                <img src={product.img} alt={product.name} />
                <div className={styles.item__infos}>
                    <h3 className="font-title-3">{product.name}</h3>
                    <span className="font-body-600 price">Preço Unitário: {product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
                    <span className="font-body category">Qtd: {product.quantity}</span>
                </div>
            </div>
            <button className="remove__button" aria-label="delete" title="Remover item" onClick={removeFromCart}>
                <MdDelete size={21} />
            </button>
        </li>
    );
};
