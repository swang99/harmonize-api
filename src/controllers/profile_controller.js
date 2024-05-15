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
    throw new Error(`create post error: ${error}`);
  }
}

export async function deleteProfile(id) {
  try {
    await Profile.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error(`create post error: ${error}`);
  }
}

/* export async function getPosts() {
  try {
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error(`create post error: ${error}`);
  }
} */

/* export async function getPost(id) {
  try {
    const post = await Post.findById(id);
    return post;
  } catch (error) {
    console.log(error);
    throw new Error(`create post error: ${error}`);
  }
}

export async function updatePost(id, postFields) {
  try {
    await Post.findByIdAndUpdate(id, postFields);
  } catch (error) {
    console.log(error);
    throw new Error(`create post error: ${error}`);
  }
} */
