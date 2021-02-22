// Fisher–Yates shuffle based
function shuffle(array) {
  var currentIndex = array.length;
  var temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function randGenerator(min, max)
{
    return Math.floor(Math.random() * (max-min))+ min;
}

function speedArrGenerator()
{
    var sArr = new Array(); //risultato
    for (var i = 0; i < 40; i++) {
        if(Math.floor(Math.random() * 10) == 0)
            sArr[i] = 13;
        else
            sArr[i] = randGenerator(5, 10);
    }
    return sArr;
}
