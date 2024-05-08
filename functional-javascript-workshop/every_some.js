// Return a function that takes a list of valid users, and returns a function that returns true if all of the supplied 
// users exist in the original list of users.
// You only need to check that the ids match.

// Example

// const goodUsers = [
//   { id: 1 },
//   { id: 2 },
//   { id: 3 }
// ]

// `checkUsersValid` is the function you'll define
// let testAllValid = checkUsersValid(goodUsers)

// testAllValid([
//   { id: 2 },
//   { id: 1 }
// ])
// // => true

// testAllValid([
//   { id: 2 },
//   { id: 4 },
//   { id: 1 }
// ])
// => false

// ---------------------
// Resources
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// ---------------------

function checkUsersValid(goodUsers) {
    // goodUsers: a list of valid users
    return function allUsersValid(submittedUsers) {
      // SOLUTION GOES HERE
      return submittedUsers.every(function(submittedUsers) {
        return goodUsers.some(function(goodUsers) {
            return goodUsers.id === submittedUsers.id;
        })
      })
    };
  }
  
  module.exports = checkUsersValid