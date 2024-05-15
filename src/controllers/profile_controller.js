import Profile from '../models/Profile';

export async function createProfile(profileFields) {
  const profile = new Profile();
  profile.name = profileFields.name;
  profile.followers = profileFields.followers;
  profile.following = profileFields.following;
  profile.highlights = profileFields.highlights;

  try {
    const savedProfile = await profile.save();
    return savedProfile;
  } catch (error) {
    console.log(error);
    throw new Error(`create profile error: ${error}`);
  }
}

export async function updateProfile(id, updateFields) {
  try {
    await Profile.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error(`create profile error: ${error}`);
  }
}

export async function deleteProfile(id) {
  try {
    await Profile.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error(`delete profile error: ${error}`);
  }
}

export async function getProfiles() {
  try {
    const users = await Profile.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error(`get users error: ${error}`);
  }
}

export async function getProfile(id) {
  try {
    const user = await Profile.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error(`create user error: ${error}`);
  }
}
