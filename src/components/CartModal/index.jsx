import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import { useRef } from "react";
import UserClickOutsideModal from "../Hooks/UserClickOutsideModal/index.js";
import UserEscKeyClick from "../Hooks/UserEscKeyClick/index.js";
import styles from "./modal.module.scss";

export const CartModal = ({ cartList, setCartList, setIsOpenCart }) => {
    const total = cartList.reduce((prevValue, product) => {
        return prevValue + product.price * product.quantity;
    }, 0);

    const clearCart = () => {
        setCartList([]);
        localStorage.removeItem("@CARTPRODUCTS");
    };

    const modalRef = useRef(null);

    UserClickOutsideModal(modalRef, () => setIsOpenCart(false));
    UserEscKeyClick(() => setIsOpenCart(false));

    return (
        <div role="dialog" className={styles.modalOverlay}>
            <div className={styles.modalBox} ref={modalRef}>
                <div className={styles.modalHeader}>
                    <h2 className="font-title-3">Carrinho de compras</h2>
                    <button className="close__button" aria-label="close" title="Fechar" onClick={() => setIsOpenCart(false)}>
                        <MdClose size={21} />
                    </button>
                </div>
                <div>
                    {cartList[0] === undefined ? (
                        <h2 className={`font-title-4 ${styles.emptyCart}`}>Seu carrinho está vazio...</h2>
                    ) : (
                        <ul className={styles.modalList}>
                            {cartList.map((product) => (
                                <CartItemCard key={product.id} product={product} onRmvCart={setCartList} cartList={cartList} />
                            ))}
                        </ul>
                    )}
                </div>
                <div className={styles.resumeCart}>
                    <div className={styles.totalCart}>
                        <span className="font-body-600">Total</span>
                        <span className="font-body-600 category">{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
                    </div>
                    <button className="default__button" onClick={clearCart}>Remover todos</button>
                </div>
            </div>
        </div>
    );
};
