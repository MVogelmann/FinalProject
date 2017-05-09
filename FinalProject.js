var indexKeyword;
var randIndeces;
var PicturesArray = [
  {description: '"Die Frau"',
   descriptionENG: '"the woman"',
   picture: "https://cdn.pixabay.com/photo/2012/02/29/15/40/beautiful-19075_960_720.jpg"
  },
  {description: '"Der Mann"',
   descriptionENG: '"the man"',
   picture: "https://cdn.pixabay.com/photo/2016/11/03/16/43/cuba-1795091__340.jpg"
  },
  {description: '"Der Junge"',
   descriptionENG: '"the boy"',
   picture: "https://cdn.pixabay.com/photo/2016/03/12/21/05/boy-1252771__340.jpg"
  },
  {description: '"Das Mädchen"',
   descriptionENG: '"the girl"',
   picture: "https://cdn.pixabay.com/photo/2014/03/01/18/33/the-little-girl-277697__340.jpg"
 }
];

function randPics()
{
  //put random pictures at random positions
  var length = PicturesArray.length;
  randIndeces = randIndArray(length);
  document.getElementById("pic_0").src = PicturesArray[randIndeces[0]].picture;  //use for loop?
  document.getElementById("description_0").innerHTML = PicturesArray[randIndeces[0]].description;
  document.getElementById("pic_1").src = PicturesArray[randIndeces[1]].picture;
  document.getElementById("description_1").innerHTML = PicturesArray[randIndeces[1]].description;
  document.getElementById("pic_2").src = PicturesArray[randIndeces[2]].picture;
  document.getElementById("description_2").innerHTML = PicturesArray[randIndeces[2]].description;
  document.getElementById("pic_3").src = PicturesArray[randIndeces[3]].picture;
  document.getElementById("description_3").innerHTML = PicturesArray[randIndeces[3]].description;

  //determine a random keyword which the user has to find
  var keyword;
  indexKeyword = Math.floor(Math.random() * (length));
  keyword = PicturesArray[indexKeyword].descriptionENG;
  document.getElementById("keyword1_1").innerHTML = keyword;
}

function randIndArray (length)  //creates an array with UNIQUE random numbers 0 to length
{
  var newIndex = 0;
  var randArray = [];
  for (var i = 0; i < length; i++)
  {
    do {
      newIndex = Math.floor(Math.random() * (length));     //Courtesy of W3schools.com
      randArray[i] = newIndex;
    }
    while (randArray.indexOf(newIndex) < i);
  }
  return randArray;
}

function checkAnswer()
{
  var answerID;
  var answer;
  var pictureIndex = randIndeces.indexOf(indexKeyword);
  answerID = "radio_" + pictureIndex;
  answer = document.getElementById(answerID).checked;
  if (answer)
  {
    console.log("Correct!!");
  }
  else
  {
    console.log("Nope");
  }
}
