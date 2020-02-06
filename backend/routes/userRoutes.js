const express = require('express');
const {
    users,
    createUser,
    user,
    updateUser,
    deleteUser
} = require('../controllers/userController');
const { signup } = require('../controllers/authController');

const router = express.Router();

router.post('/signup', signup);

router
    .route('/')
    .get(users)
    .post(createUser);

router
    .route('/:id')
    .get(user)
    .patch(updateUser)
    .delete(deleteUser);

module.exports = router;