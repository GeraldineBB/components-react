import axios from "axios";
import React, {useEffect, useState} from "react";

const ApiAxios = () => {

    useEffect (
    () => {
        getPosts(); 
    }, []); 

    const [posts, setPosts] = useState ([]); 

    const getPosts = () => {
        // fonctionne avec axios mais pas fetch !
        return axios.get ('https://jsonplaceholder.typicode.com/posts')
        .then ((res) => {
            setPosts(res.data); 
            console.log(posts); 
        })
        .catch((err) => console.error(err, 'erreur api')); 
    }; 

    return (

        <ul>
            {posts.map ((post) => (
                <li key={post.id}>{post.title}</li>
            ))}

        </ul>


    )
}

export default ApiAxios; 