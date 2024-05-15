import { Router } from 'express';
import * as Posts from './controllers/post_controller';
import * as Profile from './controllers/profile_controller';

const router = Router();

// CONTROLLER WIRING
const handleCreateUser = async (req, res) => {
  try {
    const result = await Profile.createProfile(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const handleDeleteUser = async (req, res) => {
  try {
    const postId = req.params.id;
    const result = await Posts.deletePost(postId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const handleGetUser = async (req, res) => {
  try {
    const postId = req.params.id;
    const result = await Posts.deletePost(postId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const handleGetUsers = async (req, res) => {
  try {
    const result = await Profile.find();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// ROUTES
router.get('/', (req, res) => {
  res.json({ message: 'welcome to our blog api!' });
});

router.route('/users/')
  .get(handleGetUsers)
  .post(handleCreateUser);

router.route('/users/:id')
  .get(handleGetUser)
  .delete(handleDeleteUser);

export default router;
