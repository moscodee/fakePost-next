import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import Style from "../../../styles/Post.module.css";
import Link from "next/link";

const PostId = () => {
  const postId = useRouter();
  const [post, setPost] = useState({});
  useEffect(() => {
    fetchPost(postId.query.id);
  }, [postId]);
  const fetchPost = (id) => {
    console.log(id);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  };
  console.log(post);
  return (
    <>
      <Head>
        <title>Post {post.id}</title>
      </Head>
      <div className={Style.post}>
        <div className={Style.title}>Title: {post.title}</div>
        <div className={Style.body}>{post.body}</div>
        <button className={Style.commend}>
          <Link href={`/posts/${post.id}/comment`} className={Style.btn_link}>
            Commend
          </Link>
        </button>
      </div>
    </>
  );
};

export default PostId;
