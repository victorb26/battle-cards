const compare = (
  
  result1,
  result2,
  resultHp,
  resultAttack,
  resultDefense,
  resultSpeed,
  resultSpecialAttack,
  resultSpecialDefense
) => {
  const person1 = [
    resultHp,
    resultAttack,
    resultDefense,
    resultSpeed,
    resultSpecialAttack,
    resultSpecialDefense,
  ].filter((result) => result === result1.id);
  const person2 = [
    resultHp,
    resultAttack,
    resultDefense,
    resultSpeed,
    resultSpecialAttack,
    resultSpecialDefense,
  ].filter((result) => result === result2.id);
  
  if (person1.length > person2.length) {
    return {
      winner: result1.id,
      loser: result2.id,
      details: {
        hp: resultHp,
        attack: resultAttack,
        defense: resultDefense,
        speed: resultSpeed,
        specialAttack: resultSpecialAttack,
        specialDefense: resultSpecialDefense,
      },
    };
  } else if (person1.length < person2.length) {
    return {
      winner: result2.id,
      loser: result1.id,
      details: {
        hp: resultHp,
        attack: resultAttack,
        defense: resultDefense,
        speed: resultSpeed,
        specialAttack: resultSpecialAttack,
        specialDefense: resultSpecialDefense,
      },
    };
  } else {
    return {
      tie: true,
      details: {
        hp: resultHp,
        attack: resultAttack,
        defense: resultDefense,
        speed: resultSpeed,
        specialAttack: resultSpecialAttack,
        specialDefense: resultSpecialDefense,
      },
    };
  }
};

export default compare;
