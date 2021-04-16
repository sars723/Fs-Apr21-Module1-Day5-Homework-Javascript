/*
    ASSIGNMENT RULES
    - All the answers must be written in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for help, reach the Teaching Assistants if needed
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or de-commenting the single exercises in this one.
      You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/

const movies = [
    {
      Title: "The Lord of the Rings: The Fellowship of the Ring",
      Year: "2001",
      imdbID: "tt0120737",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Return of the King",
      Year: "2003",
      imdbID: "tt0167260",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Two Towers",
      Year: "2002",
      imdbID: "tt0167261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Lord of War",
      Year: "2005",
      imdbID: "tt0399295",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "Lords of Dogtown",
      Year: "2005",
      imdbID: "tt0355702",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings",
      Year: "1978",
      imdbID: "tt0077869",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1990",
      imdbID: "tt0100054",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
    },
    {
      Title: "The Lords of Salem",
      Year: "2012",
      imdbID: "tt1731697",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
      Year: "1984",
      imdbID: "tt0087365",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1963",
      imdbID: "tt0057261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
    },
    {
      Title: "The Avengers",
      Year: "2012",
      imdbID: "tt0848228",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Infinity War",
      Year: "2018",
      imdbID: "tt4154756",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Age of Ultron",
      Year: "2015",
      imdbID: "tt2395427",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Endgame",
      Year: "2019",
      imdbID: "tt4154796",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    },
  ]

//JS Basics

/* Ex.A
   Create a variable called "test" and assign a string to it.
*/
console.log(" ")
console.log("excercise A create variable test")
console.log("-----------------------------------")

let test="hello world"
/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/
console.log(" ")
console.log("excercise B create variable sum which holds sum of 10 and 20")
console.log("-----------------------------------")

let sum=10+20

/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/

console.log(" ")
console.log("excercise C create a variable random which holds a random number b/n 0 and 20")
console.log("-----------------------------------")

let random=Math.floor(Math.random()*20)
console.log(random)

/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/
console.log(" ")
console.log("excercise D crate an object with name surname and age properties")
console.log("-----------------------------------")

let me={
    name:"sara",
    surname:"salomon",
    age:27
}
console.log(me)

/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/

console.log(" ")
console.log("excercise E delete the property age from the object me")
console.log("-----------------------------------")

delete me.age
console.log(me)

/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/

console.log(" ")
console.log("excercise F add an array called skills to the object me")
console.log("-----------------------------------")

me.skills=["c++","javascript","java"]
console.log(me)

/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/
console.log(" ")
console.log("excercise G remove the last skell from the array skills inside the object me")
console.log("-----------------------------------")

 me.skills.pop()
console.log(me)
// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/
console.log(" ")
console.log("JS excercise 1  ranomize number between 1 and 6")
console.log("-----------------------------------")

const dice=function (){
    let randomNumber=1+Math.floor(Math.random()*5)
    return randomNumber
}
const testDice=dice()
console.log(testDice)

/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/

console.log(" ")
console.log("JS excercise 2 bigger")
console.log("-----------------------------------")

let max
const whoIsBigger=function (num1 , num2)
{
    if(num1>num2)
    {
        max=num1
        /* return max */
    }
    else if(num1<num2)
    {
        max=num2
        /* return max */
    }
    else{
        /* console.log("either both numbers are equal or they not numbers")   */  
        max="equal"
    }
    return max
}

const testWhoIsBigger=whoIsBigger(40,40)
console.log(testWhoIsBigger)
/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/

console.log(" ")
console.log("JS excercise 3 split a string")
console.log("-----------------------------------")

const splitMe=function (stringToSplited)
{
    let arrString=[]
    arrString=stringToSplited.split(" ")
    return arrString
}
const testSplitMe=splitMe("I love coding")
console.log(testSplitMe)

/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/

console.log(" ")
console.log("JS excercise 4 deletes the first or the last character based on the boolean parameter")
console.log("-----------------------------------")

const deleteOne=function (bool , str)
{
    if(bool===true)
    {
        str= str.slice(1)
        return str
    }
    else{
        return str.slice(0,str.length-1)
    }
}
const testDeleteOne=deleteOne(false,"hello")
console.log(testDeleteOne)
//deleteOne(true,"hello")


/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/
console.log(" ")
console.log("JS excercise 5 removes all the digits")
console.log("-----------------------------------")
const onlyLetters=function (str)
{
    let arr=[]
    let strWithoutNumber=[]
    arr=str.split(" ")
    for(let i=0;i<arr.length;i++)
    {
         if( isNaN(arr[i]))
         {
            strWithoutNumber.push(arr[i])
         }  
    }
    strWithoutNumber=strWithoutNumber.join(" ")
    return strWithoutNumber 
}
const testOnlyLetters=onlyLetters("I have 4 dogs")
console.log(testOnlyLetters)

/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/

console.log(" ")
console.log("JS excercise 6 Valid email adress")
console.log("-----------------------------------")

const isThisAnEmail=function (email)
{
    
   /*  if(/\S+@\S+\.\S+/.test(email) ){
        return true
    }
    else
    {
        return false
    } */

    //_@_._
    if(email.indexOf('@') !==-1 && email.indexOf('@') !==0 && email.indexOf('@') !==email.length-1)   
    {
        if(email.indexOf('.')!==-1 && email.indexOf('.') !==0 && email.indexOf('.') !==email.length-1)
        {
            if((email.indexOf('.') - email.indexOf('@'))!==1 && (email.indexOf('.') - email.indexOf('@'))!==-1)
            {
                return true
            }
        }    
    }
    return false
}
const testisThisAnEmail=isThisAnEmail("aynediaa@yahoo.com")
console.log(testisThisAnEmail)



/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/

console.log(" ")
console.log("JS excercise 7 Day of the week")
console.log("-----------------------------------")

const whatDayIsIt=function ()
{
    let date=new Date()
dayOfTheWeek=date.getDay()
console.log(dayOfTheWeek)
switch(dayOfTheWeek){
case 1:
    return "Monday"
    break;
case 2:
    return "Tuesday"
    break;
case 3:
    return "wednsday"
    break;
case 4:
    return "Thursday"
    break;
case 5:
    return "Friday"
    break;
case 6:
    return "Saturday"
    break;
default:
    return "Sunday"
}
}
const testWhatDayIsIt=whatDayIsIt()
console.log(testWhatDayIsIt)

/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/

console.log(" ")
console.log("JS excercise 8 object containing an array of random numbers and their sum")
console.log("-----------------------------------")

const rollTheDices=function (num)
{
    let obj={
        sum:0,
        values:[]
    }
    
    for(let i=0;i<num;i++)
    {
        obj.values[i]=dice()
        obj.sum+=obj.values[i]
    }
    return obj
}
const testRollTheDices=rollTheDices(4)
console.log(testRollTheDices)

/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
*/

console.log(" ")
console.log("JS excercise 9 ")
console.log("-----------------------------------")

const howManyDays=function (date)
{
    recivedDate = new Date(date);
    console.log(recivedDate)
    currentDate=new Date()
    console.log(currentDate)
    console.log(currentDate.getTime())
   return Math.floor((currentDate.getTime()-recivedDate.getTime())/(1000 * 3600 * 24))

    /* console.log(currentDate.getDay())
    console.log(currentDate.getMonth())
    console.log(currentDate.getFullYear()) */
}
const testHowManyDays=howManyDays("03/15/2021")
console.log(testHowManyDays)

/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/

console.log(" ")
console.log("JS excercise 9 ")
console.log("-----------------------------------")

const isTodayMyBirthday=function ()
{
    let birthdayDate=new Date("05/16/1994")
    let currentDate=new Date()

    console.log(birthdayDate.getDate())
    if(currentDate.getDate()===birthdayDate.getDate() && currentDate.getMonth()===birthdayDate.getMonth()&& currentDate.getFullYear()>=birthdayDate.getFullYear())
    {
        return true
    }
    else{
        return false
    }

}
const testIsTodayMyBirthday=isTodayMyBirthday()
console.log(testIsTodayMyBirthday)


// JS Arrays // Objs
// NOTE: movies array is defined at the end of this file!

/* Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.
*/
console.log(" ")
console.log("JS excercise 11 ")
console.log("-----------------------------------")


const deleteProp=function (obj, propertyToBeDeleted)
{
    delete obj[propertyToBeDeleted]
    return obj
}
let person={
    name:"Elias",
    surname:"Girma",
    hasDrivinglicense:true
}
let propertyName="hasDrivinglicense"

const testDeleteProp=deleteProp(person,propertyName )
console.log(testDeleteProp)



/* Ex.12 
    Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/

console.log(" ")
console.log("JS excercise 12 ")
console.log("-----------------------------------")

const olderMovie=function ()
{
    let oldMovie=movies[0]
    for(let i=1;i<movies.length;i++)
    {
        if(parseInt(movies[i].Year)  < parseInt (oldMovie.Year))
        {
            oldMovie=movies[i]
        }
        
    }
    return oldMovie
}
const testOlderMovie=olderMovie()
console.log(testOlderMovie)
/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/

console.log(" ")
console.log("JS excercise 13 ")
console.log("-----------------------------------")

const countMovies=function ()
{
    return movies.length
}
const testCountMovies=countMovies()
console.log(testCountMovies)

/* Ex.14
    Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
*/

console.log(" ")
console.log("JS excercise 14 ")
console.log("-----------------------------------")

const onlyTheTitles=function ()
{
    let arrTitlesMovie=[]
  for(let i=0;i<movies.length;i++)
  {
    arrTitlesMovie.push(movies[i].Title)
    /* arrTitlesMovie[i]=movies[i].Title */
  }  
  return arrTitlesMovie
}
const testOnlyTheTitles=onlyTheTitles()
console.log(testOnlyTheTitles)

/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/

console.log(" ")
console.log("JS excercise 15 ")
console.log("-----------------------------------")

const onlyInThisMillennium=function ()
{
    let moviesAfter2000=[]
    for(let i=0;i<movies.length;i++)
    { 
        if(movies[i].Year>=2000)
        {
            moviesAfter2000.push(movies[i])
        }
    }
    return moviesAfter2000
}
const testOnlyInThisMillennium=onlyInThisMillennium()
console.log(testOnlyInThisMillennium)

/* Ex.16 
    Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/

console.log(" ")
console.log("JS excercise 16 ")
console.log("-----------------------------------")

const getMovieById=function (idMovie)
{/* console.log((movies[0].imdbID))
    console.log((idMovie) ) */
    for(let i=0;i<movies.length;i++)
    {
        if((movies[i].imdbID) === (idMovie) )
        {
            return movies[i]
        }
        else
        {
            return false
        }
    }
}
const testGetMoviesById=getMovieById("tt0120737")
console.log(testGetMoviesById)

/* Ex.17
    Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/

console.log(" ")
console.log("JS excercise 17 ")
console.log("-----------------------------------")

const sumAllTheYears=function ()
{
    let sum=0
    for(let i=0;i<movies.length;i++)
    {
        sum+=parseInt(movies[i].Year)
    }
    return sum
}
const testSumAllTheYears=sumAllTheYears()
console.log(testSumAllTheYears)

/* Ex.18
    Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the title.
*/


console.log(" ")
console.log("JS excercise 18 ")
console.log("-----------------------------------")

const searchByTitle=function (isStringInTitle)
{
    let arrmoviesStringInTitle=[]
    for(let i=0;i<movies.length;i++)
    {
        if((movies[i].Title.indexOf("Avengers"))!==-1)
        {
            arrmoviesStringInTitle.push(movies[i])
            /* arrmoviesStringInTitle[i]=movies[i] */
        }
    }
    return arrmoviesStringInTitle
}

const testSearchByTitle=searchByTitle("Avengers")
console.log(testSearchByTitle)
/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
    this object should contain an array called "match", made by all the movies which contain the given string in the title,
    and another array "unmatch" with all the remaining ones.
*/

console.log(" ")
console.log("JS excercise 19 ")
console.log("-----------------------------------")

const searchAndDivide=function (StringInTitle)
{
    
   let obj={
        match:[],
        unmatch:[]
    }
     for(let i=0;i<movies.length;i++)
    {
        if(movies[i].Title.indexOf(StringInTitle)!==-1)
        {
            obj.match.push(movies[i])
        }
        else{
            obj.unmatch.push(movies[i])
        }
    }
    return obj   
}
const testSearchAndDivide=searchAndDivide("Rings")
console.log(testSearchAndDivide)

/* Ex.20
   Write a function called "removeIndex" which receives a number as a parameter and returns the movies array without the element in the given position.
*/

console.log(" ")
console.log("JS excercise 20 ")
console.log("-----------------------------------")

const removeIndex=function (movieIndex)
{
    for(let i=0;i<movies.length;i++)
    {
        if(movieIndex===i)
        {
            movies.splice(i,1)    
        }
    }
    return movies
}
const testRemoveIndex=removeIndex(0)
console.log(testRemoveIndex)

// [EXTRAS] JS Advanced

/* Ex.21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/


console.log(" ")
console.log("JS excercise 21 ")
console.log("-----------------------------------")

const halfTree=function (height)
{
    let tree=""
    for(let i=0;i<height;i++)
    {
        for(let j=0;j<=i;j++)
        {
            tree+="*"+" "
        }
        console.log(tree)
        tree=""
    }
}
halfTree(3)


/* Ex.22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

console.log(" ")
console.log("JS excercise 22 ")
console.log("-----------------------------------")

/* const tree=function ()
{
    let tree=""
    for(let i=0;i<height;i++)
    {
        for(let j=0;j<=i;j++)
        {
            tree+=" "+"*"
        }
        console.log(tree)
        tree=""
    }
} */

/* Ex.23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/

/* This movies array is used throughout the exercises. Please don't change it :)  */

console.log(" ")
console.log("JS excercise 23 ")
console.log("-----------------------------------")

const isItPrime=function (isPrime)
{
    let halfOfIsPrime=parseInt( isPrime/2)
    for(let i=halfOfIsPrime;i>1;i++)
{
    if(isPrime%i===0)
    {
       return false
    }
}
return true
}

const testIsItPrime=isItPrime(13)
console.log(testIsItPrime)

