const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/EmployeeDB', { useNewUrlParser: true })
  .then(() => console.log('MongoDB has been Connected'))
  .catch(err => {
    console.log('Error in db connection : ' + err);
  });

require('./employee.model');
