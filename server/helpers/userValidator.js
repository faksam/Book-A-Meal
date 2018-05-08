const User = require('../models').User;

// export const verrifyUserExist = (req, res, next) => {
//     if(!email || !password) {
//         res.status(422).send({error: 'You must provide an email and passord.'});
//     }
//     // const error = {};
//     // consol.log("in Verify user" + email)
//     // User.findAll({
//     //         where: {
//     //             email: req.email
//     //         }
//     //     })
//     //     .then(user => {
//     //         if (user) {
//     //             error.user = 'This email already exist in our server try signing in';
//     //             return res.status(400).json({ error });
//     //         }
//     //     })
// };

export const verrifyUserExist = (req, res, next) => {
    console.log('in verify user existance')
    const {
        email, fullname, phone_no, password
    } = req.body;

    let errorChecker = false;
    const error = {};
    console.log("in Verify user - " + email)
    User.findAll({
        where: {
            email: email
        }
    })
        .then(user => {
            console.log(user.length);
            if (user.length > 0) {
                error.user = 'This email already exist in our server try signing in';
                errorChecker = true;
                console.log(error);
                console.log(errorChecker);

                return res.status(400).json({ error });
                if (!errorChecker) {}
            }
            console.log(email)
            console.log(fullname)
            console.log(phone_no)
            console.log(password)
            return next(); 
        })

};
