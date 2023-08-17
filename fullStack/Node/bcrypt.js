const bcrypt = require("bcrypt");

// Create password hashing function below:

const passwordHash = async (password, saltRounds) => {
  try {
    // Generate salt:
    const salt = await bcrypt.genSalt(saltRounds);
    // Hash password using generated salt:
    return await bcrypt.hash(password, salt);
  } catch (err) {
    console.log(err);
  }
  return null;
};

const comparePasswords = async (password, hash) => {
  try {
    const matchFound = await bcrypt.compare(password, hash);
    return matchFound;
  } catch (err) {
    console.log(err);
  }
  return false;
};