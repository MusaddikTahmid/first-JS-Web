function rhombusCalculateArea() {
  const base = getInputValuesById("rhombus-diagonal-two");
  //   console.log("base value:", base);

  const height = getInputValuesById("rhombus-diagonal-one");
  //   console.log("height value", height);
  const area = 0.5 * base * height;
  console.log(area);
  setInnerTextById("rhombus-area", area);
}
function getInputValuesById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputValueText = inputField.value;
  const inputValue = parseFloat(inputValueText);
  //   console.log(inputValue);
  return inputValue;
}

function setInnerTextById(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}
