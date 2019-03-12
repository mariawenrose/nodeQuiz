// console.log("howdy")

// var name = "yoobee";
// console.log("hello " + name);

//ES5,ES6 - template string { }

// process.stdout.write("whaddup\n\n")

// process.stdout.write("what is your name\n\n")

// process.stdin.on('data',function(data){
// process.stdout.write(`Hello ${ data}`);
//process.exit(); // stop running the data listener
//});
//console.log(__dirname); // to display the flder/directory name
//console.log(__filename); //to display the file name

var request = [
  'Enter Your Age:',
  'Enter Your Sex',
  'Enter Your Location'
]

var response = [];

function myRequest(i){
  process.stdout.write(`\n\n ${request[i]} \n\n`) // \n is "padding + space"
 // process.exit();
}
//read input

process.stdin.on('data', function(data){
  response.push(data.toString().trim()); // cos sometimes thereis excess whitespace
  if (response.length < request.length) { // checking 3 questions + 3 responses
    myRequest(response.length); 
  } else {
    process.exit(); // on exiting the process lets display everything
  }
});

process.on('exit', function(){
  process.stdout.write(`\n\n ${response[0]} you say?, ${response[1]} is a nice prounoun, ${response[2]}? That's pretty close? Be there in a jiffy ;)`)
})
myRequest(0);