import Post from '../models/Post';

export async function createPost(postFields) {
  const post = new Post();
  post.title = postFields.title;
  post.tags = postFields.tags.split(', ');
  post.content = postFields.content;
  post.coverUrl = postFields.coverUrl;

  try {
    const savedPost = await post.save();
    return savedPost;
  } catch (error) {
    console.log(error);
    throw new Error(`create post error: ${error}`);
  }
}

export async function getPosts() {
  try {
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error(`create post error: ${error}`);
  }
}

export async function getPost(id) {
  try {
    const post = await Post.findById(id);
    return post;
  } catch (error) {
    console.log(error);
    throw new Error(`create post error: ${error}`);
  }
}

export async function deletePost(id) {
  try {
    await Post.findByIdAndDelete(id);
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
}
