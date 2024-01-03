import { ProductCard } from "./ProductCard";
import styles from "./product.module.scss";

export const ProductList = ({ productList, setCartList, cartList }) => {
    return (
        <ul className={styles.product__listCards}>
            {productList.map((product) => (
                <ProductCard key={product.id} product={product} onAddCart={setCartList} cartList={cartList} />
            ))}
        </ul>
    );
};
