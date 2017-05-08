function randPics()
{
  var PicturesArray = [
    {description: '"Die Frau"',
     picture: "https://cdn.pixabay.com/photo/2012/02/29/15/40/beautiful-19075_960_720.jpg"
    },
    {description: '"Der Mann"',
     picture: "https://cdn.pixabay.com/photo/2016/11/03/16/43/cuba-1795091__340.jpg"
    },
    {description: '"Der Junge"',
     picture: "https://cdn.pixabay.com/photo/2016/03/12/21/05/boy-1252771__340.jpg"
    },
    {description: '"Das Mädchen"',
     picture: "https://cdn.pixabay.com/photo/2014/03/01/18/33/the-little-girl-277697__340.jpg"
   }
  ];
  var randIndeces = randIndArray(PicturesArray.length);
  document.getElementById("pic_lo").src = PicturesArray[randIndeces[0]].picture;
  document.getElementById("description_lo").innerHTML = PicturesArray[randIndeces[0]].description;
  document.getElementById("pic_ro").src = PicturesArray[randIndeces[1]].picture;
  document.getElementById("description_ro").innerHTML = PicturesArray[randIndeces[1]].description;
  document.getElementById("pic_lu").src = PicturesArray[randIndeces[2]].picture;
  document.getElementById("description_lu").innerHTML = PicturesArray[randIndeces[2]].description;
  document.getElementById("pic_ru").src = PicturesArray[randIndeces[3]].picture;
  document.getElementById("description_ru").innerHTML = PicturesArray[randIndeces[3]].description;

  var keywordsArray = ["the man", "the woman", "the boy", "the girl"]
  var arrayLength = keywordsArray.length;
  var randIndex = Math.floor(Math.random() * (arrayLength));
  document.getElementById("keyword1_1").innerHTML = keywordsArray[randIndex];
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
  var answer;
  var keyword;
  keyword = document.getElementById("keyword1_1").innerHTML;
  answer = document.getElementById("radioMan").checked;
  console.log(answer + keyword);
}
