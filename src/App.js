import React from "react";
import {Route, Routes} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import UsersPage from "./pages/UsersPage";
import UserPage from "./pages/UserPage";
import PostsPage from "./pages/PostsPage";
import Error404 from "./pages/Error404";
import AllPostsPage from "./pages/AllPostsPage";
import PostPage from "./pages/PostPage";
import CommentsPage from "./pages/CommentsPage";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={''} element={<UsersPage/>}/>
                    <Route path={':id'} element={<UserPage/>}>
                        <Route path={'posts'} element={<PostsPage/>}/>
                    </Route>
                    <Route path={'posts'} element={<AllPostsPage/>}/>
                    <Route path={'posts/:id'} element={<PostPage/>}>
                        <Route path={'comments'} element={<CommentsPage/>}/>
                    </Route>
                </Route>
                <Route path={'*'} element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default App;
