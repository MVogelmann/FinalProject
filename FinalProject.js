//--------------------------- Global variables ---------------------------------
var indexKeyword;
var randIndeces;
var PicturesArray = [];
var randomIndexOld;
var correctVocables = 0;
var totalVocables = 0;

function BuildCourse1(x)
{
  PicturesArray = [
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
  if (x) {
    return PicturesArray;
  }
  else {
    randPics();     //next step
  }
}
function BuildCourse2(x)
{
  PicturesArray = [
    {description: '"Das Brot"',
     descriptionENG: '"the bread"',
     picture: "https://cdn.pixabay.com/photo/2014/07/22/09/59/bread-399286__340.jpg"
    },
    {description: '"Der Kaffee"',
     descriptionENG: '"the coffee"',
     picture: "https://cdn.pixabay.com/photo/2014/07/08/12/58/coffee-386878__340.jpg"
    },
    {description: '"Der Tee"',
     descriptionENG: '"the tea"',
     picture: "https://cdn.pixabay.com/photo/2017/02/20/09/05/tea-2081920__340.jpg"
    },
    {description: '"Die Früchte"',
     descriptionENG: '"the fruits"',
     picture: "https://cdn.pixabay.com/photo/2016/03/05/23/02/background-1239436__340.jpg"
   }
  ];
  if (x) {
    return PicturesArray;
  }
  else {
    randPics();     //next step
  }
}
function BuildCourse3(x)
{
  PicturesArray = [
    {description: '"Guten Tag"',
     descriptionENG: '"hello"',
     picture: "https://cdn.pixabay.com/photo/2017/05/05/09/49/agreement-2286439__340.jpg"
    },
    {description: '"Auf Wiedersehen"',
     descriptionENG: '"goodbye"',
     picture: "https://cdn.pixabay.com/photo/2015/01/10/15/53/child-waving-goodbye-595429__340.jpg"
    },
    {description: '"Die Katze"',
     descriptionENG: '"the cat"',
     picture: "https://cdn.pixabay.com/photo/2014/07/24/18/40/cat-401124__340.jpg"
    },
    {description: '"Der Hund"',
     descriptionENG: '"the dog"',
     picture: "https://cdn.pixabay.com/photo/2016/11/22/18/49/animal-1850002__340.jpg"
   }
  ];
  if (x) {
    return PicturesArray;
  }
  else {
    randPics();     //next step
  }
}

//--------------------------- Functions Course ---------------------------------
function randPics()
{
  //put random pictures at random positions
  var length = PicturesArray.length;
  randIndeces = randIndArray(length);
  for (var i = 0; i < length; i++) {
    var randIndex = randIndeces[i];
    document.getElementById("pic_" + i).src = PicturesArray[randIndex].picture;
    document.getElementById("description_" + i).innerHTML = PicturesArray[randIndex].description;
  }
  //determine a random keyword which the user has to find
  var keyword;
  indexKeyword = Math.floor(Math.random() * (length));
  keyword = PicturesArray[indexKeyword].descriptionENG;
  document.getElementById("keyword1_1").innerHTML = keyword;
}

function checkAnswer(level)
{
  var answerID;
  var answer;
  var pictureIndex = randIndeces.indexOf(indexKeyword);
  answerID = "radio_" + pictureIndex;
  answer = document.getElementById(answerID).checked;
  if (answer)
  {
    document.getElementById("container").style.opacity = '0.5';
    document.getElementById("checkAnswerButton").style.visibility = "hidden";
    document.getElementById("continueButton").style.visibility = "visible";
    document.getElementById("resultMessage").innerHTML = "Correct";
    document.getElementById("resultMessage").style.color = "green";
    setCookie("course" + level, 1, 9);
  }
  else
  {
    document.getElementById("container").style.opacity = '0.5';
    document.getElementById("checkAnswerButton").style.visibility = "hidden";
    document.getElementById("tryAgainButton").style.visibility = "visible";
    document.getElementById("resultMessage").innerHTML = "Wrong";
    document.getElementById("resultMessage").style.color = "red";
    setCookie("course" + level, 0, 9);
  }
}

function Continue(level)
{
  window.location = "course" + level + ".html";
}

function TryAgain(level)
{
  window.location = "course" + level + ".html";
}

function appearanceCourseMain()
{
  var result1 = getCookie("course1");
  var result2 = getCookie("course2");
  var result3 = getCookie("course3");
  console.log("cookies: " + result1 + result2 + result3 );
  if (result1 == "1" && result2 == "1" && result3 == "1")  {
    setCookie("course1", 0, 9);
    setCookie("course2", 0, 9);
    setCookie("course3", 0, 9);
    document.getElementById("divAfterTest").style.visibility = "visible";
    document.getElementById("divBeforeTest").style.visibility = "hidden";
    console.log("all cookies true");
  }
  else {
    document.getElementById("divAfterTest").style.visibility = "hidden";
    document.getElementById("divBeforeTest").style.visibility = "visible";
    console.log("else zweig");
  }
}

//-------------------------- Functions Vocabular -------------------------------
function BuildVocabulary()
{
  //Choose a random German word
  var randomCourse = Math.floor(Math.random() * 3);
  var randomIndex;
  document.getElementById("hiddenMessage").style.visibility = "hidden";
  document.getElementById("Translation").value = "";
  do {
    randomIndex = Math.floor(Math.random() * 4);
  } while (randomIndexOld == randomIndex);
  randomIndexOld = randomIndex;
  var randomPicArray = [];
  switch (randomCourse) {
    case 0:
      randomPicArray = BuildCourse1(true);
      break;
    case 1:
      randomPicArray = BuildCourse2(true);
      break;
    case 2:
      randomPicArray = BuildCourse3(true);
      break;
    default:
      break; }
  var RandomVocable = randomPicArray[randomIndex].description;
  RandomVocableENG = randomPicArray[randomIndex].descriptionENG;
  var VocLength = RandomVocableENG.length;
  RandomVocableENG = RandomVocableENG.slice(1,(VocLength-1));         //delete ""
  document.getElementById("GermanVocable").innerHTML = RandomVocable;
}

function checkAnswerVoc() {
  var AnswerTranslation = document.getElementById("Translation").value;
  AnswerTranslation = AnswerTranslation.toLowerCase();
  RandomVocableENG = RandomVocableENG.toLowerCase();
  if (RandomVocableENG == AnswerTranslation) {
    document.getElementById("hiddenMessage").innerHTML = "Correct! Loading next vocable...";
    document.getElementById("hiddenMessage").style.color = "green";
    document.getElementById("hiddenMessage").style.visibility = "visible";
    correctVocables++;
    totalVocables++;
    document.getElementById("totalCorrect").innerHTML = correctVocables;
    document.getElementById("totalVocables").innerHTML = totalVocables;
    Timer = setTimeout("BuildVocabulary()", 2000);
  }
  else {
    console.log("Hey, the answer is " + RandomVocableENG + " , not " + AnswerTranslation);
    document.getElementById("hiddenMessage").innerHTML = "Wrong! Try the next vocable...";
    document.getElementById("hiddenMessage").style.color = "red";
    document.getElementById("hiddenMessage").style.visibility = "visible";
    totalVocables++;
    document.getElementById("totalVocables").innerHTML = totalVocables;
    Timer = setTimeout("BuildVocabulary()", 2000);
  }
}

//------------------------------ Subroutines -----------------------------------
//creates an array with UNIQUE random numbers 0 to length
function randIndArray (length)
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

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
