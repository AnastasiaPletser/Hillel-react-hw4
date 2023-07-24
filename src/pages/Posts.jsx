import React, { useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const Posts = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
    const getAllPosts = async () => {
        try {
            const response = await fetch (
                'https://jsonplaceholder.typicode.com/posts'
            );
            if (!response.ok) {
                throw new Error('Failed fetch');
            }
            const data = await response.json();
            setPosts(data);
        } catch (e) {
            console.error(e.message);
        }
    };

    getAllPosts()
    }, []);

  return (
    <div>
       
    <ul className='posts-title'>
        {posts &&
        posts.map((post) => (
            <li key = {post.id}>
                <Link className="post-title" to={`/products/${post.id}`}>{post.title}</Link>
                <p>{post.body}</p>
            </li>
            ))}
    </ul>
    </div>
  );
};

export default Posts

