import { Router } from 'express';
import * as Posts from './controllers/post_controller';

const router = Router();

// CONTROLLER WIRING
const handleCreatePost = async (req, res) => {
  try {
    const result = await Posts.createPost(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const handleDeletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const result = await Posts.deletePost(postId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const handleGetPost = async (req, res) => {
  try {
    const postId = req.params.id;
    const result = await Posts.getPost(postId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const handleGetPosts = async (req, res) => {
  try {
    const result = await Posts.getPosts();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const handleUpdatePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const postFields = req.body;
    const result = await Posts.updatePost(postId, postFields);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// ROUTES
router.get('/', (req, res) => {
  res.json({ message: 'welcome to our blog api!' });
});

router.route('/posts/:id')
  .get(handleGetPost)
  .put(handleUpdatePost)
  .delete(handleDeletePost);

router.route('/posts')
  .get(handleGetPosts)
  .post(handleCreatePost);

export default router;
