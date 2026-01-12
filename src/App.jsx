import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Foods from './components/food/Foods';
import Hero from './components/Hero/Hero';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Phones from './components/phone/Phones';
import Advert from './components/advert/Advert';
import Advan from './components/advan/Advan';
import Users from './components/user/Users';
import Posts from './components/post/Posts';
import Cloths from './components/cloth/Cloths';
import History from './components/History/History'
import Categories from './components/categories/Categories';
import Tags from './components/tags/Tags';
import Latestpost from './components/latestpost/Latestpost';
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import PostDetails from './components/post/postDetails';
import AddPost from './components/post/AddPost';
import BlogPage from './components/blogpage/blogPage';
import Comment from './components/comment/Comment';
// import Login from './components/login/login';
// import Signup from './components/signup/signup';












function App() {
  return (
    <div className="pt-30">
      <Nav />
      <Routes>
        <Route path="/" element={
          <>

            <Hero />
            <Foods />
            <Cloths />
            <Phones />
            <Advert />
            <Advan />
            <Posts />
            <Comment />
          </>
        } />
        <Route path="/auth" element={<Auth />} />
        <Route path="/history" element={<History />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/Tags" element={<Tags />} />
        <Route path="/Latestpost" element={<Latestpost />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Posts />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/" element={<BlogPage />} />
        <Route path="/users" element={<Users />} />
        {/* <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> */}





      </Routes>
      <Footer />
    </div>


  );

}
export default App;

