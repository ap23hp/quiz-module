export function scoreModule() {
  let score = 0;

  function incrementScore(isCorrect) {
    if (isCorrect) score += 1;
    console.log(`score:${score}`)
  }

  function resetScore() {
    score = 0;
  }
     function showScore() {
    return `Your final score: ${score}`;
  }

    return { incrementScore, showScore,resetScore };
}
