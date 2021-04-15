 // people i've known

 let people = [ {
   name: "kira",
   color: "black"
}, {
  name: "amber",
  color: "peach"
}, {
  name: "karla",
  color: "tan"
}, {
  name: "tiffani"
  color: "pale yellow"
}, {
  name: "alexis",
  color: "green"
}];

function setup() {
  createCanvas( 600, 600);
  background(200);
  textSize(32);
  console.log("inital array is")
  console.log(people);

  console.log("array after pop")
  feel.pop();
  console.log(feel);

  feel.push();
  console.log(feel);

  feel.push("memories");
  console.log("array after push")
  feel.pop();
}

function draw() {

}

function mousePressed() {
 if (people[0]){
   //displays the random name and splices it out of the array
   background(random(200, 255));
   randomIndex = int(random(people.length));
   people.splice(randomIndex, 1);
 } else {
   text("nothing left!", 50, 50);
 }
 }
