import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchPostById, fetchCommentsByPostId } from "../services/api";
import styles from "../styles/PostPage.module.css";
import { Link } from "react-router";

const PostPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    useEffect(() => {
      fetchPostById(id).then(setPost);
      fetchCommentsByPostId(id).then(setComments);
    }, [id]);
  
    if (!post) return <p>Загрузка...</p>;
    return (
      <div className={styles.postContainer}>
        <h2 className={styles.postTitle}>{post.title}</h2>
        <p>{post.body}</p>
        <h3>Комментарии</h3>
        <ul className={styles.commentList}>
          {comments.map(comment => (
            <li key={comment.id} className={styles.commentItem}>
              <strong>{comment.name}:</strong> {comment.body}
            </li>
          ))}
        </ul>
        <Link to="/" className={styles.backButton}>Назад</Link>
      </div>
    );
  };

export default PostPage;
