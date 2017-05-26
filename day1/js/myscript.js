//var name = prompt('What is your name, bro?');
//alert('Hi ' + name);
//document.write(name + ' is the best coding teacher!');

var myFunctionName = function(argument, argument1) {
  console.log('Hello' + argument + ' ' +argument1);

}

//myFunctionName('Саша', 'Олеся');
//myFunctionName('Олеся', '5 Озер');


var stepen = function(number, stepenNumber) {
  return number**stepenNumber;
}

var one = prompt('first num');
var two = prompt('second num');
console.log(stepen(one,two));
