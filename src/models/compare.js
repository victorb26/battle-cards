const compare = (object1, object2, resultado1, resultado2) => {
    return object1 > object2
      ? {  winner: resultado1.id, loser:resultado2.id }
      : {  winner: resultado2.id, loser:resultado1.id };
      
      
  };
  
  export default compare;