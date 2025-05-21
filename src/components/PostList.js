import { useContext } from "react"
import { Link } from "react-router-dom"
import { PostListData } from "../context/PostListData";

const PostList = () => {
    const postData = useContext(PostListData);

    return (
        <div className='w-full min-h-screen flex items-center justify-center flex-col'>
                {postData.map((data) => {
                    return (
                        <div key={data.id} className="w-[50%] my-2 border-sky-500 border p-3 cursor-pointer hover:border-sky-700 rounded-md">
                            <Link to={`/postDetails/${data.id}`}>
                                <h3 className="capitalize text-center font-bold">{data.postTitle}</h3>
                                <p className="text-center">{data.body}</p>
                            </Link>
                        </div>
                    )
                })}
        </div>
    )
}

export default PostList