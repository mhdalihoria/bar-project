import React, { useState } from "react";

export const CategoriesSelectElement = ({
  categories,
  selectedCategories,
  setSelectedCategories,
}) => {
  const [selected, setSelected] = useState("default");

  const handleCategoryChange = (e) => {
    e.preventDefault();

    setSelected(e.target.value);

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
    <select
      name="selectedCategories"
      value={selected}
      id=""
      onChange={handleCategoryChange}
    >
      <option value={"default"} disabled defaultValue hidden>
        Categories
      </option>
      {categorySelect}
    </select>
  );
};
