const sum = (objeto1, objeto2) => {
  return {
    charac1: Object.values(objeto1).reduce((a, b) => a + b, 0),
    charac2: Object.values(objeto2).reduce((a, b) => a + b, 0),
  };
};

export default sum;
