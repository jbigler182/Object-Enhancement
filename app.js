//Task 1

function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }

    //****mycode*****/
//When function input parameters are same as objects key/property value you only need to write it once thanks to ES2015
function myCreateInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
  }


//Task2

  var favoriteNumber = 42;

  var instructor = {
    firstName: "Colt"
  }
  
  instructor[favoriteNumber] = "That is my favorite!"

  //****mycode*****/

  let myFavoriteNumber = 4; //Varible should be declared using let because it could change!

  const student = {
    firstName: "Jeremy", //forgot the ,
    [myFavoriteNumber]: "That is my favorite number!" //forgot to replace = with :
  }

//Task3

// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName " + "says bye!";
//     }
//   }

//***MyCode***//

const student2 = {  
    firstName: "Jeremy",
    sayHi () {
        return "Hi!";
    },
    sayBye () {
        return this.firstname + " says bye!"; //No clue how .this works. I just copied it over
    }
}
//ES2015 modification. Used const instead of var. Removed : and word function. 


//Task4

const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"



//***My Code***//
const cat = createAnimal("car", "prrr", "meow!")
cat.prrr()

const duck = createAnimal("bird", "quack", "quaaack!")
duck.quack()

function createAnimal(species, verb, noise){ //function takes there arguments
  return {
    species,       //With ES2015 no need for :. The argument and key value are the same
    [verb](){      //When verb is called, print the following string (noise). With ES2015 no need to write function.
      return noise; //return noise
    },
  };
};


