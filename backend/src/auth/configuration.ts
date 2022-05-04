const bcrypt = require('bcrypt');
export default {
    crypto: {
        salt: bcrypt.genSaltSync(10),
    }
}