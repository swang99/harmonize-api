import { Router } from 'express';
import * as Profile from './controllers/profile_controller';

const router = Router();

// CONTROLLER WIRING
// Users + Post Operations
const handleCreateUser = async (req, res) => {
  try {
    const result = await Profile.createProfile(req.body);
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error });
  }
};


const handleUpdateUser = async (req, res) => {
  try {
    const userID = req.params.userID;
    const result = await Profile.updateProfile(userID, req.body);
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const handleDeleteUser = async (req, res) => {
  try {
    const userID = req.params.userID;
    const result = await Profile.deleteProfile(userID);
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const handleGetProfile = async (req, res) => {
  try {
    const userID = req.params.userID;
    const result = await Profile.getProfile(userID);
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const handleGetProfiles = async (req, res) => {
  try {
    const profiles = await Profile.getProfiles();

	if (!profiles) {
		return res.status(204).json({ 'message': 'No profiles in database yet.'})
	}

    res.status(200).json(profiles);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// ROUTES
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Harmonize API!' });
});

router.route('/users/')
  .get(handleGetProfiles)
  .post(handleCreateUser);

router.route('/users/:userID')
  .get(handleGetProfile)
  .put(handleUpdateUser)
  .delete(handleDeleteUser)

export default router;
