function createLoginTracker (userInfo) {
  console.log("username:", userInfo.username);
  console.log("password:", userInfo.password);

//each time the function is called increase attemptcount by 1
let attemptCount = 0; //tracks number of attempts

const loginAttempt = (passwordAttempt) => {
  attemptCount++;
  if (attemptCount > 3) {
    return "Account locked due to too many failed login attempts.";
  }
  //password check
  if (passwordAttempt === userInfo. password){
    return  "Login successful.";
  } else {
    return `Login attempt ${attemptCount}:Login failed`;

  }
};
return loginAttempt; //return the nested function
} 
const user = {
  username: "trina",
  password: "burgers212"
};
const login = createLoginTracker(user);
console.log(login("fries333")); // Login attempt 1: Login failed
console.log(login("soda456")); // Login attempt 2: Login failed
console.log(login("burger212")); // Login attempt 3: Login failed
console.log(login("burgers212")); // Account locked due to too many failed login attempts.

const user2 = {
  username: "john",
  password: "thechanger"
};
const login2 = createLoginTracker(user2);
console.log(login2("thechanger")); // Login successful.
module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};


