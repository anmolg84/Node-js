// Getting os module
const os = require('os');

// Getting user information from os module
const user = os.userInfo();
console.log(user);

// Getting system uptime
const up = os.uptime();
console.log(up);

const info = {
    name:os.type(),
    memory : os.totalmem(),
    release : os.release()
}
console.log(info);