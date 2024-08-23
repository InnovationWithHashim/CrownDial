import React from 'react';
import styles from '@/app/styles/About.module.css';

const ourStory = {
  title: "Craftsmanship and Passion",
  description: "Founded with a commitment to quality and design, we bring you watches that blend tradition with innovation."
};

const reasonsToChooseUs = [
  {
    title: "Quality Assurance",
    description: "Every watch is crafted with the finest materials and undergoes rigorous quality checks."
  },
  {
    title: "Customer Satisfaction",
    description: "Our priority is to provide you with exceptional service and a seamless shopping experience."
  }
];

const testimonials = [
  {
    name: "Jane D.",
    review: "I love my new watch! The design is stunning, and the quality is top-notch."
  },
  {
    name: "Mark T.",
    review: "Great customer service and fast shipping. Highly recommend!"
  }
];

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <section className={styles.section}>
        <h1 className={styles.heading}>Our Story</h1>
        <div className={styles.contentBlock}>
          <h2 className={styles.subHeading}>{ourStory.title}</h2>
          <p className={styles.description}>{ourStory.description}</p>
        </div>
      </section>

      <section className={styles.section}>
        <h1 className={styles.heading}>Why Choose Us</h1>
        <div className={styles.reasonsGrid}>
          {reasonsToChooseUs.map((reason, index) => (
            <div key={index} className={styles.reasonItem}>
              <h2 className={styles.subHeading}>{reason.title}</h2>
              <p className={styles.description}>{reason.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h1 className={styles.heading}>Testimonials</h1>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialItem}>
              <p className={styles.review}>"{testimonial.review}"</p>
              <h3 className={styles.customerName}>{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
