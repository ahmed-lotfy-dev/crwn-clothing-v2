import ProductCard from "../product-card/product-card.component";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectCategoriesMap } from "../../store/categories/categories.selector";

import { CategoryContainer } from "./category.styles.jsx";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
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
