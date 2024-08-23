import React from 'react';
import styles from '@/app/styles/Collections.module.css';

const collections = [
  {
    title: "Vintage Collection",
    description: "Classic designs inspired by timeless traditions.",
    image: "/images/c1.jpg"
  },
  {
    title: "Modern Collection",
    description: "Contemporary watches with innovative features.",
    image: "/images/c3.jpeg"
  }
];

const specialEdition = {
  title: "Limited Edition Watches",
  description: "Exclusive timepieces available for a limited time only.",
  image: "/images/c3.jpg"
};

const CollectionsPage = () => {
  return (
    <div className={styles.collectionsPage}>
      <h1 className={styles.heading}>Featured Collections</h1>
      <div className={styles.collectionsGrid}>
        {collections.map((collection, index) => (
          <div key={index} className={styles.collectionItem}>
            <img src={collection.image} alt={collection.title} className={styles.collectionImage} />
            <h2 className={styles.collectionTitle}>{collection.title}</h2>
            <p className={styles.collectionDescription}>{collection.description}</p>
          </div>
        ))}
      </div>

      <h2 className={styles.heading}>Special Edition</h2>
      <div className={styles.specialEdition}>
        <img src={specialEdition.image} alt={specialEdition.title} className={styles.specialEditionImage} />
        <div className={styles.specialEditionContent}>
          <h2 className={styles.collectionTitle}>{specialEdition.title}</h2>
          <p className={styles.collectionDescription}>{specialEdition.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CollectionsPage;
