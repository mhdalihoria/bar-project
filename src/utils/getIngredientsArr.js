export default function getIngredientsArr(obj) {
  const ingredientsArr = [];

  const keys = Object.keys(obj);
  keys.forEach((key, index) => {
    if (key.includes("strIngredient")) {
      if (obj[key] !== null) {
        ingredientsArr.push(obj[key]);
      }
    }
  })

  return ingredientsArr
}
