import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Style from "../../../../styles/Comments.module.css";

const Comments = () => {
  const postId = useRouter();
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetchPost(postId.query.id);
  }, [postId]);
  const fetchPost = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => response.json())
      .then((data) => setComments(data));
  };
  return (
    <div>
      {comments.map((comment) => {
        console.log(comment);
        return (
          <div className={Style.comment_container}>
            <div>Write By: {comment.postId}</div>
            <div>{comment.name}</div>
          </div>
        );
      })}
    </div>
  );
};
export default Comments;
