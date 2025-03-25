const API_URL = "https://jsonplaceholder.typicode.com";

export const fetchPosts = async () => {
  const response = await fetch(`${API_URL}/posts`);
  return response.json();
};

export const fetchPostById = async (id) => {
  const response = await fetch(`${API_URL}/posts/${id}`);
  return response.json();
};

export const fetchCommentsByPostId = async (postId) => {
  const response = await fetch(`${API_URL}/comments?postId=${postId}`);
  return response.json();
};
