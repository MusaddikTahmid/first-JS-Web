function calculateRectangleArea() {
  const rectangleLengthInput = document.getElementById("rectangle-length");
  const lengthText = rectangleLengthInput.value;
  const length = parseFloat(lengthText);
  //   console.log(length);
  const widthInput = document.getElementById("rectangle-width");
  const widthText = widthInput.value;
  const width = parseFloat(widthText);
  //   console.log(width);
  //   calculate
  const rectangle = length * width;
  console.log(rectangle);
  //   rectangle
  const rectangleAreaSapn = document.getElementById("rectangle-area");
  rectangleAreaSapn.innerText = rectangle;
}
