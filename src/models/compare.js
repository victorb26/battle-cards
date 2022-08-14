const compare = (object1, object2, result1, result2, resultHp) => {
  return object1 > object2
    ? { winner: result1.id, loser: result2.id, details:{hp:resultHp} }
    : { winner: result2.id, loser: result1.id, details:{hp:resultHp} };
};

export default compare;
