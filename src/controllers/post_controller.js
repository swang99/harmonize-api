import Post from '../models/Post';
import Profile from '../models/Profile';

export async function createPost(fields) {
	const post = new Post({
        author: fields.author,
        spotify_url: fields.spotify_url,
        created: fields.created,
        media_type: fields.media_type
    });
  
	try {
	  // retrieve associated profile and push post to array
	  const profile = await Profile.findById(fields.author);
      
	  if (!profile) {
		console.log(error);
        throw new Error('Profile not found');
      }

	  profile.posts.push(post);
	  await profile.save();

	  return profile.posts;
	} catch (error) {
	  console.log(error);
	  throw new Error(`create post error: ${error}`);
	}
}

export async function updatePost(id, updateFields) {
	const profile = await Profile.findById(fields.author);
	if (!profile) {
		console.log(error);
        throw new Error('Profile not found');
    }

	profile.posts.push(post);

	try {
		await Post.findByIdAndUpdate(id, updateFields);
	} catch (error) {
		console.log(error);
		throw new Error(`update post error: ${error}`);
	}
}

export async function deletePost(id) {
	try {
	  await Post.findByIdAndDelete(id);
	} catch (error) {
	  console.log(error);
	  throw new Error(`delete post error: ${error}`);
	}
}

export async function getPosts(userId) {
	try {
	  const profile = await Profile.findById(userId);
	  return profile.posts;
	} catch (error) {
	  console.log(error);
	  throw new Error(`get user's posts error: ${error}`);
	}
}
  
export async function getPost(userId, postId) {
	try {
	  const profile = await Profile.findById(userId);
	  // 
	} catch (error) {
	  console.log(error);
	  throw new Error(`get a user's post error: ${error}`);
	}
}