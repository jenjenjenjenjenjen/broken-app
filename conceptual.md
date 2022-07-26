### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?  
Some ways of managing asynchronous code in Javascript include callback functions, promises, and the async/await keywords.

- What is a Promise?  
A promise represents the eventual completion of an asychronous operation.

- What are the differences between an async function and a regular function?  
An async function will only return a value once the promise associated with it has been fulfilled, while a regular function will continue no matter what.

- What is the difference between Node.js and Express.js?  
Node.js is a Javascript framework that allows you to write code for the server-side. Express.js is a framework that sits on top of Node in order to simplify APIs and add additional features.

- What is the error-first callback pattern?  
The error-first callback pattern consists of executing a function when an async operatin ends, where the first argument is an error.

- What is middleware?  
Middleware is code that runs in between the request/response cycle.

- What does the `next` function do?  
The `next` function moves the code along to the next matching route.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc).  
Issues with this code include

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
