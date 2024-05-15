import { Router } from 'express';
// import * as Posts from './controllers/post_controller';
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

const handleUpdateUser = async (req, res) => {
  try {
    const profileId = req.params.id;
    const result = await Profile.updateProfile(profileId, req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const handleDeleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const result = await Profile.deleteProfile(userId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const handleGetProfile = async (req, res) => {
  try {
    const profileId = req.params.id;
    const result = await Profile.getProfile(profileId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const handleGetProfiles = async (req, res) => {
  try {
    const result = await Profile.getProfiles();
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
  .get(handleGetProfiles)
  .post(handleCreateUser);

router.route('/users/:id')
  .get(handleGetProfile)
  .put(handleUpdateUser)
  .delete(handleDeleteUser);

export default router;
