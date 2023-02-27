const validateEmail = (email) => {
    const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    if (valid) {
      return true;
    } else {
      console.log("Please enter a valid email address!");
      return false;
    }
  }; 

module.exports = validateEmail;
