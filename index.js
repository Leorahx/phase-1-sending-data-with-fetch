// Add your code here
// const formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle",
// };

// const configurationObject = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify(formData),
// };

// fetch("http://localhost:3000/dogs", configurationObject)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (object) {
//     console.log(object);
//   });

function submitData(name, email) {
  const data = {
    name: name,
    email: email,
  };
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  };

  return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Handling successful POST request
      appendIdToDOM(data.id);
    })
    .catch(function (error) {
      // Handling failed POST request
      appendErrorMessageToDOM(error.message);
    });
}

function appendIdToDOM(id) {
  const idElement = document.createElement("p");
  idElement.textContent = "New ID: " + id;
  document.body.appendChild(idElement);
}

function appendErrorMessageToDOM(message) {
  const errorElement = document.createElement("p");
  errorElement.textContent = "Error: " + message;
  document.body.appendChild(errorElement);
}

//     .then(function (object) {
//       showId(object);
//     });

//   function showId() {
//     document.querySelector("body").append("id");
//   }
// }

submitData("sarah", "gmail");

// submitData()
// 1) makes a POST request to /users with a name and email
// 2) handles the POST request response, retrieves the new id value and appends it to the DOM
// 3) handles a failed POST request using catch, appends the error message to the DOM
