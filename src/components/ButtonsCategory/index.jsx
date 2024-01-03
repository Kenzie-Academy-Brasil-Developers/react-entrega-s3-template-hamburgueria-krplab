import styles from "./buttonsComponent.module.scss";

export const ButtonsCategory = ({ category, setCategory }) => {
    const categorys = [
        "Sanduíches",
        "Bebidas"
    ];

    return (
        <ul className={styles.buttonsList}>
            <li>
                <button className={`${category === "" ? styles.selectedCat : ""} medium__button`} onClick={() => setCategory("")}>All</button>
            </li>
            {categorys.map((categoryItem) => (
                <li key={crypto.randomUUID()}>
                    <button className={`${category === categoryItem ? styles.selectedCat : ""} medium__button`} onClick={() => setCategory(categoryItem)}>{categoryItem}</button>
                </li>
            ))}
        </ul>
    )
}