import React from 'react'

export const Cocktails = ({details}) => {
  return (
    <div>
        <div>
            <h5 style={{display: "inline"}}>{details.strDrink}: </h5>
            <span>{details.strIngredient1}</span>
            <hr />
        </div>
    </div>
  )
}
