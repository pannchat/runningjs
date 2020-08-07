//card deck
const cards= [];
for (let suit of['H','C','D','S'])
    for(let value=1; value<=13; value++)
        cards.push({suit, value});

//value가 2인 카드
cards.filter(c => c.value ===2);
/*
[
    {suit:'H', value:2},
    {suit:'C', value:2},
    {suit:'D', value:2},
    {suit:'S', value:2},
]
*/

// 여기서 부터 지면을 생각해 반환된 배열의 길이만 적는다

//D
 cards.filter(c => c.suit ==='D'); //length : 13

//King, Queen, junior
cards.filter(c => c.value > 10); //length :12
//heart's king, queen, junior
cards.filter(c => c.value > 10 && c.suit ==='H'); //length:3

