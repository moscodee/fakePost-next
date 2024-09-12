import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function commend() {
  const postId = useRouter();
  const [comment, setComment] = useState([]);
  useEffect(() => {
    fetchPost(postId.query.id);
  }, [postId]);
  const fetchPost = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => response.json())
      .then((data) => setComment(data));
  };
  console.log(comment);
  return <div>commend</div>;
}
