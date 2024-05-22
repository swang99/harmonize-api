import Profile from '../models/Profile';

export async function createProfile(fields) {
  const profile = new Profile();
  profile.userID = fields.userID;
  profile.name = fields.name;
  profile.email = fields.email;
  profile.followers = fields.followers;
  profile.following = fields.following;
  profile.photo = fields.photo;
  profile.posts = fields.posts;
  profile.highlights = fields.highlights;
  profile.topTracks = fields.topTracks;
  profile.topArtists = fields.topArtists;
  profile.playlists = fields.playlists;

  try {
    const savedProfile = await profile.save();
    return savedProfile;
  } catch (error) {
    console.log(error);
    throw new Error(`create profile error: ${error}`);
  }
}

export async function updateProfile(userID, updateFields) {
  try {
    const profile = await Profile.findOne({userID: userID});
	console.log("PUT profile: ", updateFields);
    await Profile.findByIdAndUpdate(profile.id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error(`create profile error: ${error}`);
  }
}

export async function deleteProfile(userID) {
  try {
    const profile = await Profile.findOne({userID: userID});
    await Profile.findByIdAndDelete(profile.id);
  } catch (error) {
    console.log(error);
    throw new Error(`delete profile error: ${error}`);
  }
}

export async function getProfiles() {
  try {
    const profiles = await Profile.find();
    return profiles;
  } catch (error) {
    console.log(error);
    throw new Error(`get profiles error: ${error}`);
  }
}

export async function getProfile(userID) {
  try {
    const profile = await Profile.findOne({userID: userID});
    return profile;
  } catch (error) {
    console.log(error);
    throw new Error(`create user error: ${error}`);
  }
}
