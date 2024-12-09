// // Set up the request headers
// var myHeaders = new Headers();
// myHeaders.append("Authorization", "coalition:skills-test");

// // Configure the GET request options
// var requestOptions = {
//   method: 'GET',    // Use the GET method
//   headers: myHeaders,    // Add the headers
//   redirect: 'follow'     // Follow any redirects if needed
// };

// // Use fetch to send the GET request
// fetch("https://fedskillstest.coalitiontechnologies.workers.dev", requestOptions)
//   .then(response => {
//     // Check if the response is successful (status code 200-299)
//     if (!response.ok) {
//       throw new Error('Network response was not ok ' + response.statusText);
//     }
//     return response.json();   // Parse the JSON response
//   })
//   .then(result => {
//       const results = result;
//       // Output the result to the console and display it on the page
//     console.log(result);
//     document.getElementById("response").textContent = JSON.stringify(result, null, 2);
//   })
//   .catch(error => {
//     // Handle any errors
//     console.error('Error:', error);
//     document.getElementById("response").textContent = "Error: " + error.message;
//   });


// Set up the request headers
var myHeaders = new Headers();
myHeaders.append("Authorization", "coalition:skills-test"); // Add authorization token here if needed

// Configure the GET request options
var requestOptions = {
  method: 'GET',    // Use the GET method
  headers: myHeaders,    // Add the headers
  redirect: 'follow'     // Follow any redirects if needed
};

// Use fetch to send the GET request
fetch("https://fedskillstest.coalitiontechnologies.workers.dev", requestOptions)
  .then(response => {
    // Check if the response is successful (status code 200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();   // Parse the JSON response
  })
  .then(result => {
    // Assuming the response contains an array of people or records
    const emilyData = result.find(person => person.name === "Jessica Taylor"); // Look for Emily William

    if (emilyData) {
      // Output the result to the console and display it on the page
      console.log(emilyData);
      // Display Emily's data in the <pre> element, formatting it as a string with indentation
      document.getElementById("response").textContent = JSON.stringify(emilyData, null, 2);
    } else {
      // Handle case where Emily William is not found
      console.log("Emily William not found in the response.");
      document.getElementById("response").textContent = "Emily William not found in the response.";
    }
  })
  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
    document.getElementById("response").textContent = "Error: " + error.message;
  });
