import { useContext } from "react";
import { useParams } from "react-router-dom"
import { PostListData } from "../context/PostListData";

const PostDetails = () => {
    const {postId} = useParams();
    const postData = useContext(PostListData);
    const selectedPost = postData.find((pId) => pId.id === Number(postId));
    
    console.log("selected post data: ", selectedPost);
    console.log("selected id: ", postId);

    return (
        <div className='w-full min-h-screen flex items-center justify-center flex-col'>

            <div className="text-center">
                <span>user info of: {postId}</span>
            </div>

            <div className="w-[50%] my-3 border-sky-500 border p-3 cursor-pointer hover:border-sky-700 rounded-md">
                <h3 className="capitalize text-center font-bold">{selectedPost.postTitle}</h3>
                <p className="text-center">{selectedPost.body}</p>        
            </div>
        </div>
    )
}

export default PostDetails