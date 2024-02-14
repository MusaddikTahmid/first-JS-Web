function calculateParallelogramArea() {
  const heightInput = document.getElementById("parallelogram-height");
  const heightText = heightInput.value;
  const height = parseFloat(heightText);
  //   console.log(base);
  const baseInput = document.getElementById("parallelogram-base");
  const baseText = baseInput.value;
  const base = parseFloat(baseText);
  //   console.log(base);

  const sum = base * height;
  console.log(sum);
}
