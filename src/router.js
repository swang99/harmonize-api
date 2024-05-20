import { Router } from 'express';
import * as Post from './controllers/post_controller';
import * as Profile from './controllers/profile_controller';

const router = Router();

// CONTROLLER WIRING
// Users + Post Operations
const handleCreateUser = async (req, res) => {
  try {
	if (Profile.findById(req.body.userID)) {
		return res.status(409).json({ 'message': 'Profile already exists' });
	}

    const profile = await Profile.createProfile(req.body);
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const handleUpdateUser = async (req, res) => {
  try {
    const profileId = req.params.id;
	
	if (!Profile.findById(profileId)) {
		return res.status(404).json({ 'message': 'Profile not found.'});
	}

	let updateFields = {}
	if (req.body.name) updateFields['name'] = req.body.name;
	if (req.body.email) updateFields['email'] = req.body.email;
	if (req.body.followers) updateFields['followers'] = req.body.followers;
	if (req.body.following) updateFields['followers'] = req.body.followers;

    const profile = await Profile.updateProfile(profileId, updateFields);

    res.json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const handleDeleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const profile = await Profile.deleteProfile(userId);

	if (!profile) {
		return res.status(404).json({ 'message': 'Profile not found'})
	}

    res.status(200).json({ 'message': 'Profile deleted succesfully!' })
  } catch (error) {
	console.error('Error deleting profile: ', error);
    res.status(500).json({ error });
  }
};

const handleGetProfile = async (req, res) => {
  try {
    const profileId = req.params.id;
    const profile = await Profile.getProfile(profileId);

	if (!profile) {
		res.status(404).json({ 'message': 'Profile not found'})
	}

    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ error });
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

router.route('/users/:id')
  .get(handleGetProfile)
  .put(handleUpdateUser)
  .delete(handleDeleteUser)

export default router;
