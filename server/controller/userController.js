const UserDetails = require('../modules/userModule');

exports.createUsersDetails = async (req, res, next) => {
  try {
    const newUser = await UserDetails.create(req.body);
    res.status(201).json({
      message: "Submit Successfully",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    let message = err.message; // Initialize the message variable with the default error message

    if (err.code === 11000) {
      message = "Duplicate Email Address or Phone Number";
       
    }

    res.status(400).json({
      message,
    });
  }
};
