import { useState, useEffect } from "react";
import { Cocktails } from "./Cocktails";
import { MainSectionHeader } from "./MainSectionHeader";

export const MainSection = () => {
  const [cocktailList, setCocktailList] = useState([]); // Cocktail List
  const [ingredients, setIngredients] = useState([]); // Ingredients list
  const [glasses, setGlasses] = useState([]); // Glasses List
  const [categories, setCategories] = useState([]); // categories list
  const [alcoholic, setAlcoholic] = useState([]); // (is) Alcoholic List
  const [isLoading, setisLoading] = useState(false);
  const [filteredCocktailList, setFilteredCocktailList] = useState([])
  const [didSearch, setDidSearch] = useState(false)
  useEffect(() => {
    setisLoading(true);
    //Fetching all the information from their API end points
    Promise.all([
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s`),
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`),
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list`),
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`),
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list`),
    ])
      .then(
        ([
          responseCocktails,
          responseIngredients,
          responseGlasses,
          responseCategories,
          responseAlcoholic,
        ]) =>
          Promise.all([
            responseCocktails.json(),
            responseIngredients.json(),
            responseGlasses.json(),
            responseCategories.json(),
            responseAlcoholic.json(),
          ])
      )
      .then(
        ([
          dataCocktails,
          dataIngredients,
          responseGlasses,
          responseCategories,
          responseAlcoholic,
        ]) => {
          setCocktailList(dataCocktails.drinks);
          setIngredients(dataIngredients.drinks);
          setGlasses(responseGlasses.drinks);
          setCategories(responseCategories.drinks);
          setAlcoholic(responseAlcoholic.drinks);

          setisLoading(false);
        }
      );
  }, []);
  

  const arrayOfObjs = filteredCocktailList.length === 0 ? cocktailList : filteredCocktailList
  const cocktailsElements = arrayOfObjs.map((cocktail) => {
    return <Cocktails key={cocktail.idDrink} details={cocktail} />;
  });
  
  // console.log(arrayOfObjs);
  console.log(filteredCocktailList);

  return (
    // <div>This is Main section</div>
    <div>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div>
          <MainSectionHeader
            cocktailList={cocktailList}
            ingredients={ingredients}
            glasses={glasses}
            categories={categories}
            alcoholic={alcoholic}
            filteredCocktailList = {filteredCocktailList}
            setFilteredCocktailList = {setFilteredCocktailList}
            setDidSearch = {setDidSearch}
          />
          {(filteredCocktailList.length === 0 && didSearch)&& <div>Sorry, we don't have that, Here's other options you may be intersted in</div>}
          {cocktailsElements}
        </div>
      )}
    </div>
  );
};
