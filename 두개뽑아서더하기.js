function solution(numbers) {
  let answers = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      if (i != j) answers.push(numbers[i] + numbers[j]);
    }
  }
  return Array.from(new Set(answers)).sort((a, b) => a - b);
}

// [...new Set(answers)] 도 가능
