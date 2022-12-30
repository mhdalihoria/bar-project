import React from "react";

export const GlassesSelectElement = ({
  glasses,
  selectedGlasses,
  setSelectedGlasses,
}) => {

  const handleGlassChange = (e) => {
    e.preventDefault();

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
    <select name="selectedGlasses" id="" onChange={handleGlassChange}>
      <option value={null} disabled selected hidden>Glasses</option>
      {glassesSelect}
    </select>
  );
};
