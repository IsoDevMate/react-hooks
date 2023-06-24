import {  useState } from "react";

const Post = () => {
const [loading, setLoading] = useState(false);
const [post, setPost] = useState({});
const [error, setError] = useState(false);

const handleFetch = () => {
setLoading(true);
setError(false);
fetch("https://jsonplaceholder.typicode.co/posts/1")
.then((response) => response.json())
.then((data) => {
setPost(data);
setLoading(false);
})
.catch((err) => {
console.log(err.message);
setError(true);
setLoading(false);
});
};

// Conditionally render loading and post
return (
<div>
{loading && <p>Loading...</p>}
{!loading && !error && (
<div>
<h1>Post</h1>
<p>{post.title}</p>
<p>{post.body}</p>
</div>
)}
{error && <p>Error occurred while fetching the post.</p>}
<button onClick={handleFetch}>Fetch Post</button>
</div>
);
};
export default  Post;