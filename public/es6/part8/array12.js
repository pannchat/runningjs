const words = ["Bravo","Romio","Alpha","Alex","X-ray","November","Charlie","Papa","Uniform","Joker","Clovar","Beta"];
const alphabetical = words.reduce((a,x) => {

    if(!a[x[0]]) a[x[0]] =[];
    a[x[0]].push(x);
    return a;
    },{});


console.log(alphabetical);