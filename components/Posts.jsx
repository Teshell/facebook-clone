import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Post from "./Post";

const Posts = ({ posts }) => {
  const [realtimePosts] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc")
  );

  return (
    <div>
      {realtimePosts
        ? realtimePosts?.docs.map((post) => (
            <Post
              key={post.id}
              name={post.data().name}
              message={post.data().message}
              image={post.data().image}
              timestamp={post.data().timestamp}
              postImage={post.data().postImage}
            />
          ))
        : posts.map((post) => (
            <Post
              key={post.id}
              name={post.data().name}
              message={post.data().message}
              image={post.data().image}
              timestamp={post.data().timestamp}
              postImage={post.data().postImage}
            />
          ))}
    </div>
  );
};

export default Posts;
