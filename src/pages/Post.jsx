import { useEffect, useState} from 'react'
import { useParams, useLocation } from 'react-router-dom';

const Post = () => {
  const [posts, setPost] = useState({});
  const { postId } = useParams();
  const location = useLocation();

  console.log(location);
  
  useEffect(()=> {
  const getPost = async () => {
      try {
          const response = await fetch (
            `https://jsonplaceholder.typicode.com/posts/${postId}`
          );
          if (!response.ok) {
              throw new Error('Failed fetch');
          }
          const data = await response.json();
          setPost(data);

      } catch (e) {
          console.error(e.message);
      }
  };
  getPost();
}, [postId]);

  return (
    <div>
      <h2>{posts.title}</h2>
      <p>{posts.body}</p>
    </div>
  )
};

export default Post
