import styles from '../styles/ProductPreview.module.css'; 

const ProductPreview = ({ product }) => {
  return (
    <div className={styles.productPreview}>
      <img src={product.image} alt={product.name} className={styles.productImage}  />
      <h3 className={styles.productName}>{product.name}</h3>
      <p className={styles.productDescription}>{product.description}</p>
      <p className={styles.productPrice}>{product.price}</p>
    </div>
  );
};

export default ProductPreview;
