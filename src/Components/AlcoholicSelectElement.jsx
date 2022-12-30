import React, { useState } from "react";

export const AlcoholicSelectElement = ({
  alcoholic,
  selectedAlcoholic,
  setSelectedAlcoholic,
}) => {

  const [selected, setselected] = useState("default")

  const handleAlcoholicChange = (e) => {
    e.preventDefault();

    setselected(e.target.value)

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
    <select
      name="selectedGlasses"
      value={selected}
      id=""
      onChange={handleAlcoholicChange}
    >
      <option value={"default"} disabled hidden>
        Is Alcoholic ?
      </option>
      {alcoholicSelect}
    </select>
  );
};
