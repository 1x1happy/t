import React, { useEffect, useState } from "react";
import { fetchPosts } from "../services/api";
import { Link } from "react-router";
import styles from "../styles/Home.module.css";

const Home = () => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      fetchPosts().then(setPosts);
    }, []);
  
    return (
      <div>
        <h1>Список сообщений</h1>
        <ul className={styles.postList}>
          {posts.map(post => (
            <li key={post.id} className={styles.postItem}>
              <Link to={`/post/${post.id}`} className={styles.postLink}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default Home;
