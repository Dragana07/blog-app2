import "./home.css";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import api from "../../api/api";
import { useLocation } from "react-router-dom";

function Home({ispisiDatumKreiranja}) {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await api.get("posts" + search);
      setPosts(res.data);
      // fetch("http://localhost:8000/posts")
      //   .then(res=>{
      //     return res.json();
      //   })
      //   .then(data=>{
      //     console.log(data);
      //     setPosts(data)
      //   })
    };
    fetchPosts();
  }, [search]);

  // useEffect(() => {
  //   searchAuthor();
  // }, [posts, search]);

  // const searchAuthor = (posts) => {
  //   if (search !== "") {
  //     return posts.filter(
  //       (p) => p.username.toLowerCase() === search.toLocaleLowerCase()
  //     );
  //   } else {
  //     return posts;
  //   }
  // };

  return (
    <>
      <Header />
      <div className="home">
        {posts && <Posts posts={posts} ispisiDatumKreiranja={ispisiDatumKreiranja} />}
        <Sidebar />
      </div>
    </>
  );
}

export default Home;
