import React from "react";
import {useState, useEffect} from 'react'; 

const ApiFetch = () => {

    const [posts, setPosts] = useState ([]); 

    useEffect(() => {
        const fetchData = async () => {
          const res = await fetch(
            'https://jsonplaceholder.typicode.com/posts',
          );
          const json = await res.json();
          setPosts(json);
        };
        fetchData();
      }, [setPosts]);

    return (

        <ul>
        {posts.map(item => (
            <li key={item.id}>
            {item.title}
            </li>
        ))}
        </ul>

    )
}

export default ApiFetch; 