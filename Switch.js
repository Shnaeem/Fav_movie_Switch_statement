let moviePhrase = prompt("What is your favourite movie?");
switch (moviePhrase) {
  case 'jaws':
    moviePhrase = "You're gonna need a bigger boat.";
    console.log(moviePhrase);
    break;
  case 'the shining':
    moviePhrase = "All work and no play makes Jack a dull boy.";
    console.log(moviePhrase);
    break;
  case 'star wars':
    moviePhrase = "Do. Or do not. There is no try.";
    console.log(moviePhrase);    
    break;

  case 'forrest gump':
    moviePhrase = 'Life was like a box of chocolates.';
    console.log(moviePhrase);  
    break;  
  
  case 'back to the future':
    moviePhrase = "Where we're going, we don't need roads.";
    console.log(moviePhrase);      
    break;  

  default:
    moviePhrase = 'Great movie choice!';
    console.log(moviePhrase);  
}