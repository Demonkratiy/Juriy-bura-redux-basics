export const inc = () => {
  return { type: "INC" };
};

export const dec = () => ({ type: "DEC" });

//export const rnd = payload => ({ type: "RND", payload }); //payload - просто типичное имя для доп.параметров

export const rnd = () => {
  return {
    type: "RND",
    payload: Math.floor(Math.random() * 10)
  };
};
