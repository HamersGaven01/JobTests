import fetch from "node-fetch";

//calls any todo with a passed in id number, if no parameter is passed then all 200 TODOs are displayed
function call(id){
    if(id == null){
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then((response) => response.json())
        .then((json) => console.log(json));
    }else if(id <= 0){console.log("must enter an ID number greater than 0!")}
    else{
        fetch('https://jsonplaceholder.typicode.com/todos/' + id)
        .then((response) => response.json())
        .then((json) => console.log(json));
    }
}

// creates a json for posting. Requires title, body, and userId to be passed as parameters
function create(title,body,userId){
    if(title != null && body != null && userId != null && userId != 0){
    fetch('https://jsonplaceholder.typicode.com/todos', {
  method: 'POST',
  body: JSON.stringify({
    title: title,
    body: body,
    userId: userId,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}else{console.log("Please enter all fields and ensure UserId is greater than 0!")}
}

//removes a post with a given id, the ID must be not null, and greater than 0 (lowest post is id 1)
function remove(id){
    if(id >= 0){
    fetch('https://jsonplaceholder.typicode.com/todos/' + id, {
        method: 'DELETE',
      });
    }else{console.log("Please enter an Id greater than 0!")}
}

/* 
available functions:
call(id) - paramter is optional, null/empty parameter results in all 200 being displayed 
create(title,body,userId) - all parameters required, and userId must be greater than 0
remove(id) - requires input of an id parameter greater than 0
*/