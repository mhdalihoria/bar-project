import React, { useEffect, useState } from "react";
import Select from "react-select";
import { IngredientSelectElement } from "./IngredientSelectElement";
import { GlassesSelectElement } from "./GlassesSelectElement";
import { CategoriesSelectElement } from "./CategoriesSelectElement";
import { AlcoholicSelectElement } from "./AlcoholicSelectElement";
import getIngredientsArr from "../utils/getIngredientsArr";
import arrayCompare from "../utils/arrayCompare";

export const MainSectionHeader = ({
  filteredCocktailList,
  setFilteredCocktailList,
  setDidSearch,
  cocktailList, //For reference, "cocktail List" is an array of objects , each object contains the properties of each cocktail
  ingredients,
  glasses,
  categories,
  alcoholic,
}) => {
  const [selectedIngredients, setSelectedIngredients] = useState(null);
  const [selectedGlasses, setSelectedGlasses] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState(null);
  const [selectedAlcoholic, setSelectedAlcoholic] = useState(null);
  const [search, setSearch] = useState({
    ingredients: null,
    glasses: null,
    categories: null,
    alcoholic: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    setDidSearch(true);
    setSearch({
      ingredients: selectedIngredients,
      glasses: selectedGlasses,
      categories: selectedCategories,
      alcoholic: selectedAlcoholic,
    });
  };

  useEffect(() => {
    setFilteredCocktailList((prevFilteredCocktails) => {
      const filteredList = cocktailList.filter((cocktail) =>
        {
          const ingredientsArr = getIngredientsArr(cocktail);
          if (
            search.ingredients !== null &&
            search.categories !== null &&
            search.alcoholic !== null &&
            search.glasses !== null
          ) {
            return (
              arrayCompare(search.ingredients, ingredientsArr) &&
              cocktail.strCategory == search.categories[0] &&
              cocktail.strAlcoholic == search.alcoholic[0] &&
              cocktail.strGlass == search.glasses[0]
            );
          }
        }
      );
      if (
        prevFilteredCocktails !== filteredList ||
        typeof prevFilteredCocktails === "undefined"
      ) {
        return filteredList;
      }
    });
  }, [search]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <IngredientSelectElement
          ingredients={ingredients}
          selectedIngredients={selectedIngredients}
          setSelectedIngredients={setSelectedIngredients}
        />
        <GlassesSelectElement
          glasses={glasses}
          selectedGlasses={selectedGlasses}
          setSelectedGlasses={setSelectedGlasses}
        />
        <CategoriesSelectElement
          categories={categories}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />

        <AlcoholicSelectElement
          alcoholic={alcoholic}
          selectedAlcoholic={selectedAlcoholic}
          setSelectedAlcoholic={setSelectedAlcoholic}
        />

        <button>Search</button>
      </form>
    </div>
  );
};
