import React from "react";
import Select from "react-select";

export const IngredientSelectElement = ({
  ingredients,
  selectedIngredients,
  setSelectedIngredients,
}) => {
  const handleIngredientChange = (e) => {
    e.preventDefault();

    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedIngredients(value);
  };

  const ingredientsSelect = ingredients.map((ingredient, index) => {
    return (
      <option key={index} value={ingredient.strIngredient1}>
        {ingredient.strIngredient1}
      </option>
    );
  });

  return (
    <select
      name="ingredients"
      id="ingredients"
      multiple
      onChange={handleIngredientChange}
    >
      
      {ingredientsSelect}
    </select>
  );
};
