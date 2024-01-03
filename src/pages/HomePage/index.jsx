import { useState, useEffect } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../services/api";
import { ButtonsCategory } from "../../components/ButtonsCategory";

export const HomePage = () => {
   const [loading, setLoading] = useState(false);
   const [isOpenCart, setIsOpenCart] = useState(false);
   const [itemSearch, setItemSearch] = useState("");
   const [category, setCategory] = useState("");
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState([]);

   useEffect(() => {
      const getProducts = async () => {
         try {
            setLoading(true);
            const { data } = await api.get('products', {
               params: {
                  category: category !== '' ? category : undefined,
               },
            });

            const lowercaseSearch = itemSearch.toLowerCase();
            const filteredProducts = data.filter((product) =>
               product.name.toLowerCase().includes(lowercaseSearch)
            );

            setProductList(filteredProducts);
         } catch (error) {
            return <p>Erro ao atualizar cardápio</p>;
         } finally {
            setLoading(false);
         }
      };

      getProducts();
   }, [category, itemSearch]);

   useEffect(() => {
      const storedCart = JSON.parse(localStorage.getItem("@CARTPRODUCTS")) || [];
      setCartList(storedCart);
   }, []);

   return (
      <>
         <Header setIsOpenCart={setIsOpenCart} cartList={cartList} search={setItemSearch} />
         <main>
            <ButtonsCategory setCategory={setCategory} category={category} />
            {loading ? (
               <p>Carregando..</p>
            ) : (
               <ProductList productList={productList} setCartList={setCartList} cartList={cartList} />
            )}

            {isOpenCart ? <CartModal cartList={cartList} setIsOpenCart={setIsOpenCart} setCartList={setCartList} /> : null}
         </main>
      </>
   );
};
