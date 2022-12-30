import React, { useState } from 'react'

export const MainSectionHeader = ({ingredients, glasses, categories, alcoholic}) => {
  const [selectedIngredients, setSelectedIngredients] = useState([])


//   console.log(ingredients, glasses, categories, alcoholic);

    const ingredientsSelect = ingredients.map((ingredient, index) => {
        return (
            <option key={index} value={ingredient.strIngredient1}>{ingredient.strIngredient1}</option>
        )
    })


    const handleIngredientChange = (e) => {
        e.preventDefault()
        // console.log(e.target)
        // const {value} = e.target
        // setSelectedIngredients(prevSelectedIngredients => {
        //     return [
        //         //...prevSelectedIngredients, 
        //         value
        //     ]
        // })

        let value = Array.from(e.target.selectedOptions, option => option.value);
        setSelectedIngredients(value);
    }


    return (
    <div>
        <form>
        <select multiple onChange={(e)=>handleIngredientChange(e)}>
            {ingredientsSelect}
        </select>
        </form>
        
    </div>
  )
}
