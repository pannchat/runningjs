const words = ["Bravo","Romio","Alpha","Alex","X-ray","November","Charlie","Papa","Uniform","Joker","Clovar","Beta"];
const longWords = words.reduce((a,w) => w.length>6 ? a+ " " + w : a, "").trim();

console.log(longWords); //November Charlie Uniform
