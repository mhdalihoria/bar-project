import React from 'react'

export const AlcoholicSelectElement = ({alcoholic, selectedAlcoholic, setSelectedAlcoholic}) => {
    
    const handleAlcoholicChange = (e) => {
        e.preventDefault();
    
        let value = Array.from(e.target.selectedOptions, (option) => option.value);
        setSelectedAlcoholic(value);
      };
    
      const alcoholicSelect = alcoholic.map((alcoholic, index) => {
        return (
          <option key={index} value={alcoholic.strAlcoholic}>
            {alcoholic.strAlcoholic}
          </option>
        );
      });
    
      return (
        <select name="selectedGlasses" id="" onChange={handleAlcoholicChange}>
          <option value={null} disabled selected hidden>Is Alcoholic ?</option>
          {alcoholicSelect}
        </select>
      );
    };