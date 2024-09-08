import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
  return <div>{post.title}</div>;
};

export default PostId;
