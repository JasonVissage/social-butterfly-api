const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  newFriend,
  updateUser,
  deleteUser,
  deleteFriend,
} = require('../../controllers/user-controllers');

router.route('/').get(getAllUsers).post(createUser);

router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(newFriend).delete(deleteFriend);

module.exports = router;
