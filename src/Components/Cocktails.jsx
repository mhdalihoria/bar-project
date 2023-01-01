import React from "react";
import getIngredientsArr from "../utils/getIngredientsArr";

export const Cocktails = ({details }) => {

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
