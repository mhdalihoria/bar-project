import React from "react";

export const CategoriesSelectElement = ({
  categories,
  selectedCategories,
  setSelectedCategories,
}) => {

  const handleCategoryChange = (e) => {
    e.preventDefault();

    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedCategories(value);
  };

  const categorySelect = categories.map((category, index) => {
    return (
      <option key={index} value={category.strCategory}>
        {category.strCategory}
      </option>
    );
  });

  return (
    <select name="selectedCategories" id="" onChange={handleCategoryChange}>
      <option value={null} disabled selected hidden>Categories</option>
      {categorySelect}
    </select>
  );
};
