import styles from "../product.module.scss";

export const ProductCard = ({ product, onAddCart, cartList }) => {
    const addCart = () => {
        const updatedCart = [...cartList];
        const existingProduct = updatedCart.find((item) => item.id === product.id);

        if (existingProduct) {
            existingProduct.quantity = (existingProduct.quantity || 1) + 1;
        } else {
            product.quantity = 1;
            updatedCart.push(product);
        }

        localStorage.setItem("@CARTPRODUCTS", JSON.stringify(updatedCart));
        onAddCart(updatedCart);
    };

    return (
        <li className={styles.product__card}>
            <div className={styles.product__cardImg}>
                <img src={product.img} alt={product.name} />
            </div>

            <div>
                <h3 className="font-title-3">{product.name}</h3>
                <span className={"font-body category"}>{product.category}</span>
                <span className={"font-body-600 price"}>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
                <button className="medium__button" onClick={addCart}>Adicionar</button>
            </div>
        </li>
    )
}