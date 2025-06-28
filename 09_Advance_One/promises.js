const promiseOne = new Promise((resolve, reject) => {
     //do an async task
    setTimeout(() => {
        console.log('Promise One Resolved');
        resolve();
    }, 1000);
});
promiseOne.then(() => {
    console.log('Promise consumed');
});

new Promise((resolve, reject) => {
    //do an async task
    setTimeout(() => {
        console.log('async task 2');
        resolve();
    }, 1000);
}).then(() => {
    console.log('async task 2 resolved');
});

const promisethree = new Promise((resolve, reject) => {
    //do an async task
    setTimeout(() => {
        console.log('async task 3');
        resolve({username: 'John', age: 30,email: 'john@example.com'});
    }, 1000);
});
promisethree.then((user) => {
    console.log(user);
})

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({
        username: "Jane",
        password: "jane123",
        email: "jane@example.com",
      });
    } else {
      reject("ERROR: Something went wrong!");
    }
  }, 5000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log("Username processed:", username);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Promise Four completed.");
  });


const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({
        username: "Alice",
        password: "alice123",
        email: "alice@example.com"
      });
    } else {
      reject("ERROR: Promise Five failed!");
    }
  }, 1000);
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.error(error);
    }
    
}

consumePromiseFive()


async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// important 

// A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.