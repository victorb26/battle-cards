const compare = (
  object1,
  object2,
  result1,
  result2,
  resultHp,
  resultAttack,
  resultDefense,
  resultSpeed,
  resultSpecialAttack,
  resultSpecialDefense
) => {
  return object1 > object2
    ? {
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
      }
    : {
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
};

export default compare;
