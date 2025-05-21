import { Outlet } from "react-router-dom"

const PostLayout = () => {
    return (
        // <div className='w-full min-h-screen flex items-center justify-center'>
        //     <h3 className="capitalize font-bold"> try to delete post </h3>
        // </div>
        <>
            <div className="my-2 -mb-8 flex items-center justify-center">
                <h3 className="font-bold"> welcome in post page </h3>
            </div>
            <Outlet/>
        </>
    )
}

export default PostLayout