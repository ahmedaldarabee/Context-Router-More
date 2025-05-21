import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import HelloPage from "./components/HelloPage";
import PostList from "./components/PostList";
import PostDetails from "./components/PostDetails";
import { PostListData } from "./context/PostListData";
import ErrorPage from "./components/ErrorPage";
import NewPost from "./components/NewPost";
import DeletePost from "./components/DeletePost";
import PostLayout from "./components/PostLayout";

function App() {
  const buttonStyle =
    "border rounded-lg px-3 py-1 border-black bg-sky-400 hover:bg-sky-600 transition-colors text-white";
  
  const postData = [
    {
      id: 1,
      postTitle: "React javascript",
      body: "javascript library that used to manage components within single page with high performance",
    },
    {
      id: 2,
      postTitle: "Angular typescript",
      body: "typescript is a language that used to manage components structure with high security to the data",
    },
    {
      id: 3,
      postTitle: "tailwind css",
      body: "tailwind css library that used to manage components with high beautiful and sweet design",
    },
  ];

  return (
    <PostListData.Provider value={postData}>
      <div>
        {/* this navigation in each page even movement between website pages */}
        <nav>
          <ul className="list-none flex items-center justify-center gap-2 p-2">
            <Link to="/" className="cursor-pointer">
              <button type="button" className={`${buttonStyle}`}>
                Home
              </button>
            </Link>
            <Link to="/hello" className="cursor-pointer">
              <button type="button" className={`${buttonStyle}`}>
                Hello
              </button>
            </Link>
            <Link to="/post" className="cursor-pointer">
              <button type="button" className={`${buttonStyle}`}>
                Post List
              </button>
            </Link>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/hello" element={<HelloPage />} />

        <Route path="/post" element={<PostLayout />}>{/**Nested Route */}
          <Route index element={<PostList />} />
          <Route path="/post/new" element={<NewPost />} />
          <Route path="/post/delete" element={<DeletePost />} />
        </Route>

        <Route path="/postDetails/:postId" element={<PostDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </PostListData.Provider>
  );
}

export default App;