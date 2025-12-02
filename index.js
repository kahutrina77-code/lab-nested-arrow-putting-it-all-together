function createLoginTracker (userInfo) {
  console.log("username:", userInfo.username);
  console.log("password:", userInfo.password);

//each time the function is called increase attemptcount by 1
let attemptCount = 0; //tracks number of attempts

const loginAttempt = (passwordAttempt) => {
  attemptCount++;
  //lock account after 3 failed attempts
  if (attemptCount > 3) {
    return "Account locked due to too many failed login attempts";
  }
  //password is correct
  if (passwordAttempt === userInfo. password){
    return  "Login successful";
  } else {
    return `Attempt ${attemptCount}:Login failed`;
//wrong password but attempts less than 3
  }
};
return loginAttempt; //return the nested function
} 
const user = {
  username: "trina",
  password: "burgers212"
};
const login = createLoginTracker(user);
console.log(login("fries333")); //  attempt 1: Login failed
console.log(login("soda456")); // attempt 2: Login failed
console.log(login("burger212")); // attempt 3: Login failed
console.log(login("burgers212")); // Account locked due to too many failed login attempts

const user2 = {
  username: "john",
  password: "thechanger"
};
const login2 = createLoginTracker(user2);
console.log(login2("thechanger")); // Login successful.
module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};


