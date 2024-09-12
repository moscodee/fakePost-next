import Head from "next/head";
import { useEffect, useState } from "react";
import Style from "../../styles/Posts.module.css";
import Link from "next/link";

export default function index() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);
  const fetchPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  };
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <div className={Style.post_container}>
        {posts.map((post) => {
          return (
            <>
              <div className={Style.userId}>Write By UserId: {post.userId}</div>
              <Link href={`/posts/${post.id}`} className={Style.post}>
                <h1 className={Style.title}>{post.title}</h1>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
}
