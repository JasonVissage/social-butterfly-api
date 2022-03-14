const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtById,
  newThought,
  newReaction,
  updateThought,
  deleteThought,
  deleteReaction,
} = require('../../controllers/thought-controller');

router.route('/').get(getAllThoughts).post(newThought);

router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

router.route('/:thoughtId/reactions').post(newReaction);

router.route('/:thoughtId/:reactionId').delete(deleteReaction);

module.exports = router;
