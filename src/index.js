module.exports = function solveEquation(equation) {
  // your implementation
  const solution = [];  
  const equationElements = equation.split(' '); 

  const a = equationElements[0];
  const b = equationElements[3] + equationElements[4];
  const c = equationElements[7] + equationElements[8];
  
  const d = Math.sqrt((b * b) - 4 * a * c);
  solution[0] = Math.round((-b + d) / (2 * a));
  solution[1] = Math.round((-b - d) / (2 * a));

  return solution.sort((left, right) => left - right);
}
