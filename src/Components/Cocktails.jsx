import React from "react";
import getIngredientsArr from "../utils/getIngredientsArr";

export const Cocktails = ({details }) => {
  /*
  !Things to use to structure the component
  1- strDrink => Drink name
  2- strCategory => Category type
  3- strAlcoholic => Is it alcoholic or not
  4- strGlass => Glass type 
  (2,3,4 are probably going to be on the same line)
  5- strInstructions => instructions
  6- strDrinkThumb => Thumbnail of drink
  7- arrOfIngredients (my made array) => to show case the ingredients needed
  
  */

  const arrOfIngredients = getIngredientsArr(details)

  // console.log(arrOfIngredients)
  //seperating the numbers from the characters
  // let chars = randomArr[0].slice(0, randomArr[0].search(/\d/));
  // let numbs = randomArr[0].replace(chars, "");

  // for(let i = 1; i<= 15; i++) {
    
  //   if(details[`${chars}${i}`] !== null) {
  //     console.log(details[`${chars}${i}`]);
  //   }
  // }
  // console.log(chars, numbs);

  return (
    <div>
      <div>
        <h5 style={{ display: "inline" }}>{details.strDrink}: </h5>
        <span>{details.strIngredient1}</span>
        <hr />
      </div>
    </div>
  );
};
