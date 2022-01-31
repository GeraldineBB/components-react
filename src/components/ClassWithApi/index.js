import React from "react";

export default class ClassWithApi extends React.Component {

    constructor (props) {
        super(props); 
        this.state = {posts: []}
    }

    componentDidMount () {
        this.getPosts(); 
    }

    getPosts(){
        fetch ('https://jsonplaceholder.typicode.com/posts')
        .then (console.log ('fetch posts avec class a fonctionné'))
        .then (data => data.json())
        .then (data => {
            this.setState({posts : data})
        })
    }

    render () {
        return (
            <div>
            {this.state.posts.map ((post) => <h1 key={post.id}> {post.title}</h1>)}
            </div>
        )
    }

}