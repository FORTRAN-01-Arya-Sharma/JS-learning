Blocking Code in js
- Blocking code refers to code that prevents further execution until a certain task is completed.
- In JavaScript, blocking code can occur during synchronous operations, such as:
  - Long-running loops
  - Synchronous I/O operations (e.g., reading files, making network requests)
- When blocking code is executed, it can freeze the entire application, leading to a poor user experience.
- To avoid blocking code, developers can use asynchronous programming techniques, such as:
  - Callbacks
  - Promises
  - Async/await

Non-Blocking Code in JavaScript
- Non-blocking code allows the program to continue executing while waiting for a task to complete.
- This is achieved through asynchronous programming techniques, which enable the JavaScript engine to handle other tasks while waiting for a long-running operation to finish.
- Examples of non-blocking code include:
  - Using callbacks to handle asynchronous events
  - Leveraging Promises to manage asynchronous operations
  - Utilizing async/await syntax for cleaner asynchronous code


1💫  Js Engine is made form memory heap and call stack
- The memory heap is where objects and variables are stored, while the call stack is used to manage function calls and execution contexts.
- The JavaScript engine uses the call stack to keep track of function calls and execution contexts.
- When a function is called, a new execution context is created and pushed onto the call stack.

2💫  Web API (Application Programming Interface)
- Web APIs are provided by the browser and allow JavaScript to interact with external resources, such as the DOM, network requests, and timers.
- Web APIs are asynchronous by nature, meaning they do not block the main thread while waiting for a response.
- Examples of Web APIs include:
  - `fetch` API for making network requests
  - `setTimeout` and `setInterval` for scheduling tasks
  - DOM manipulation methods for updating the user interface
3💫  Callback/Task Queue
- The callback/task queue is a queue that holds messages (or tasks) that are waiting to be processed.
- When an asynchronous operation completes, its callback function is added to the callback/task queue.
- The JavaScript engine processes the callback/task queue after the call stack is empty, ensuring that asynchronous tasks do not block the main thread.


⚠️so this is how the flow begins ⚠️
step one if a function have set time interval it will be pushed to the web api
step two the web api will wait for the time to be completed
step three once the time is completed the web apzi will push the callback function to the callback/task queue
step four the javascript engine will check the call stack if it is empty it will push the callback function from the callback/task queue to the call stack for execution 

even if the set time interval is zero the callback function will not be executed immediately, it will wait until the call stack is empty.
- This ensures that the main thread remains responsive and can handle other tasks while waiting for asynchronous operations to complete.

-fetch API is a modern way to make network requests in JavaScript, replacing the older XMLHttpRequest.
- It provides a more powerful and flexible feature set, allowing developers to handle requests and responses easily.

-registering a callback function with the fetch API is done using the `.then()` method, which is called when the request is successful.
- The `.then()` method takes a callback function as an argument, which will be executed when the response is received.

-the fetch API has a high priority over the callback/task queue, meaning that it will be processed before any other tasks in the queue.
- This allows developers to handle network requests efficiently without blocking the main thread.