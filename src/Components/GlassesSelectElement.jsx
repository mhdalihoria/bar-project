import React, { useState } from "react";

export const GlassesSelectElement = ({
  glasses,
  selectedGlasses,
  setSelectedGlasses,
}) => {
  const [selected, setSelected] = useState("default")


  const handleGlassChange = (e) => {
    e.preventDefault();

    setSelected(e.target.value)

    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedGlasses(value);
    // setSelectedGlasses(e.target.value)
  };

  const glassesSelect = glasses.map((glass, index) => {
    return (
      <option key={index} value={glass.strGlass}>
        {glass.strGlass}
      </option>
    );
  });

  return (
    <select name="selectedGlasses" value={selected} id="" onChange={handleGlassChange}>
      <option value={"default"} disabled defaultValue hidden>Glasses</option>
      {glassesSelect}
    </select>
  );
};
