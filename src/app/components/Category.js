import "@/app/styles/category.css";
const Category=()=>{
    return(
        
    
    <section class="category-section">
    <h1 class="section-title">Categories</h1>
    <div class="category-container">
        <div class="category-card">
            <h2 class="category-title">Elegant Watches</h2>
            <p class="category-description">Timeless designs that add a touch of sophistication.</p>
        </div>
        <div class="category-card">
            <h2 class="category-title">Casual Watches</h2>
            <p class="category-description">Stylish and comfortable for everyday wear.</p>
        </div>
        <div class="category-card">
            <h2 class="category-title">Luxury Watches</h2>
            <p class="category-description">High-end timepieces crafted with precision and elegance.</p>
        </div>
    </div>
</section>
    );

}
export default Category;