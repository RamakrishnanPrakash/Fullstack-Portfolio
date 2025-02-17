import bcrypt from "bcryptjs";

const salt = await bcrypt.genSalt(10);
const hash = await bcrypt.hash("Ram12./", salt);
console.log(hash);
