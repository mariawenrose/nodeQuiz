const fs = require('fs'); // file system module

//writing in the file called message.txt inside the folder called files

fs.writeFile('./files/message.txt', 'hello node.js', (err) => {
  if (err) throw err; //shows error
  console.log('the file has been saved');
});