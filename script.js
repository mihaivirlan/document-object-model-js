    //The Window Object
// console.log(window.innerWidth);
// console.log(innerWidth);

// console.log(window.innerWidth);
// console.log(outerWidth);

// console.log(window.innerHeight);
// console.log(outerHeight);

// console.log(window);

// localStorage.setItem('key1', 1000);
// console.log(localStorage.getItem('key1'));

// sessionStorage.setItem('key1', 1000);
// console.log(sessionStorage.getItem('key1'));

// console.log(window.location);

// console.log(window.document);

// window.open('http://www.google.com')



    //The Location Object
// console.log(location);

// console.log(location.hostname);

// console.log(location.pathname);

// //Navigate on github for example, open the console and run next bellow commands:
// console.log(location.pathname)
// location.replace('http://google.com')

// //Reload to infinite the page:
// console.log(location.reload(true));



    //The Document Object and How to Interact with It
// console.log(document);

// console.log(document.title);

// console.log(document.body);

// console.log(document.body.children);

// console.log(document.body.children[0]);

// console.log(document.body.children[0].textContent);

// //Run in console.log in browser:
// document.body.children[0].textContent = 'Something';



    //Traversing the DOM
// console.log(document.body.children[0].children[0]);

// console.log(document.body.firstChild);

// console.log(document.body.firstElementChild);

// console.log(document.body.lastElementChild);

// console.log(document.body.firstElementChild.firstElementChild);

// console.log(document.body.firstElementChild.firstElementChild.nextElementSibling);

// console.log(document.body.firstElementChild.firstElementChild.parentElement);



    //Selecting Elements
// console.log(document.getElementsByTagName('li'));

// console.log(document.getElementsByClassName('simple'));

// console.log(document.getElementById('test'));

// console.log(document.getElementById('test'));



    //Selecting Elements with the Query Selector
// console.log(document.querySelector('h1'));

// console.log(document.querySelector('.simple'));

// console.log(document.querySelector('#test'));

// document.querySelector('#easy').style.backgroundColor = 'red';

//If we want to get the array with all elements matching to this querry, we would to use the querySelectorAll: 
// console.log(document.querySelectorAll('.simple'));

//In this case we will select the first one:
// console.log(document.querySelector('.simple'));

// document.querySelector('.simple').style.backgroundColor = 'red';



    //Selecting Elements - Exercises
// document.querySelector('a').style.backgroundColor = 'red';

// document.querySelectorAll('.simple')[0].style.backgroundColor = 'red';

// document.querySelectorAll('.simple')[1].style.backgroundColor = 'red';

// document.querySelector('.simple').firstElementChild.textContent = 'Hello';

// var testFunction = function() {
//     document.querySelector('.simple').firstElementChild.textContent = 'Hello';
// }
// testFunction();



    //Creating and Inserting Elements
// var p = document.createElement('P');
// p.textContent = 'A new paraghraph!';
// p.style.fontSize = '17px';
// console.log(p);

// var p = document.createElement('P');
// p.textContent = 'A new paraghraph!';
// p.style.fontSize = '17px';
// var a = document.querySelector('a');
// a.appendChild(p);

// var p = document.createElement('P');
// p.textContent = 'A new paraghraph!';
// p.style.fontSize = '17px';
// var li = document.querySelector('li');
// li.appendChild(p);

// var p = document.createElement('P');
// p.textContent = 'A new paraghraph!';
// p.style.fontSize = '17px';
// var li = document.querySelector('li');
// var a = li.firstElementChild;
// li.insertBefore(p, a);



    //Deleting Elements
// var a = document.querySelectorAll('a')[1];
// a.parentElement.removeChild(a);

// var a = document.querySelectorAll('a')[1];
// a.remove(); //this method work, but not in all browsers

var a = document.querySelectorAll('a')[1];
a.parentElement.removeChild(a);



