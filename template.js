// const name = "Mahadi";
// const age = 20;
// const job = "bekar";

// // amar nam mahadi. amar boyos 20. ami akhon bekar
// const sentence = `amar nam ${name}. amar boyos ${age}. ami akhon ${job}`;
// console.log(sentence);

const myInfo = {
  name: "fardin",
  age: 20,
  address: "narsingdi",
  sosurName: "katappa",
  sosurBari: "B.Baria",
  subjects: ["bangla", "english", "math"],
};

const sentence = `amar nam ${myInfo.name}. amar subjects gulo ${myInfo.subjects
  .map((sub) => sub)
  .join(", ")}`;
console.log(sentence);
