import Profile from '../models/Profile';

export async function createProfile(Fields) {
  const profile = new Profile();
  profile.name = Fields.name;
  profile.followers = Fields.followers;
  profile.following = Fields.following;
  profile.highlights = Fields.highlights;

  try {
    const savedProfile = await profile.save();
    return savedProfile;
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

export async function getUsers() {
  try {
    const users = await Profile.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error(`get users error: ${error}`);
  }
}

export async function getUser(id) {
  try {
    const user = await Profile.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error(`create user error: ${error}`);
  }
}
/*
export async function updatePost(id, postFields) {
  try {
    await Post.findByIdAndUpdate(id, postFields);
  } catch (error) {
    console.log(error);
    throw new Error(`create post error: ${error}`);
  }
} */
