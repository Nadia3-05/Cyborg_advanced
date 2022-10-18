export function calcDegree(number, degree) {
    let result  = 1;
    if (degree < 0) {
      for (let i = degree; i < 0; i++) {
        result /= number;
      }
    } else {
      for (let i = 1; i <= degree; i++) {
        result *= number;
      }
    }
    return result;
  }

  