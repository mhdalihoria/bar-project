import React, { useState } from "react";
import Select from "react-select";
import { IngredientSelectElement } from "./IngredientSelectElement";
import { GlassesSelectElement } from "./GlassesSelectElement";
import { CategoriesSelectElement } from "./CategoriesSelectElement";
import { AlcoholicSelectElement } from "./AlcoholicSelectElement";

export const MainSectionHeader = ({
  setFilteredCocktailList,
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

  //   const handleIngredientChange = (e) => {
  //     e.preventDefault();
  //     console.log(e.target)
  //     const {value} = e.target
  //     setSelectedIngredients(prevSelectedIngredients => {
  //         return [
  //             //...prevSelectedIngredients,
  //             value
  //         ]
  //     })

  // let value = Array.from(e.target.selectedOptions, (option) => option.value);
  // setSelectedIngredients(value);
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch({
      ingredients: selectedIngredients,
      glasses: selectedGlasses,
      categories: selectedCategories,
      alcoholic: selectedAlcoholic,
    });
    setFilteredCocktailList((prevFilteredCocktails) => {
      return cocktailList.filter((cocktail) =>
        //  cocktail.strCategory == search.categories
        //   && cocktail.strAlcoholic == search.alcoholic
        //   && cocktail.strGlass == search.glasses
        {
          if (
            search.categories !== null &&
            search.alcoholic !== null &&
            search.glasses !== null
          ) {
            return (
              cocktail.strCategory == search.categories &&
              cocktail.strAlcoholic == search.alcoholic &&
              cocktail.strGlass == search.glasses
            );
          }
        }
      );
    });
  };

  // const filteredCocktails = ;

  // console.log(search);
  // console.log(filteredCocktails);

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
