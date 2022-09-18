import ProductCard from "../product-card/product-card.component";

import { useContext, useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../contexts/categories.context";

import { CategoryContainer } from "./category.styles.jsx";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProduct] = useState(categoriesMap[category]);

  useEffect(() => {
    setProduct(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <CategoryContainer>
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </CategoryContainer>
  );
};

export default Category;
