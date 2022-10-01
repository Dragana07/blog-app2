import "./singlePost.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import api from "../../api/api";
import { Link } from "react-router-dom";

const SinglePost = ({ispisiDatumKreiranja}) => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  // console.log(path);
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await api.get("posts/" + path);
      console.log(res.data);
      setPost(res.data);
    };
    getPost();
  }, [path]);

 // let datumKreiranja = "2022-08-30T01:35:27+00:00";
  
  // const ispisiDatumKreiranja = (dat)=>{
  //   let danas =  new Date().getTime();
  //   let kreirano = new Date(dat).getTime();
  //   let d = new Date();
  //   let e = new Date(d);
  //   let SinceMidnightS = (e - d.setHours(0,0,0,0))/1000;

  //   let vremeRazlikaS = (danas - kreirano)/1000;

  //   console.log(danas);
  //   console.log(kreirano);
  //   console.log(vremeRazlikaS);

  //   if (vremeRazlikaS < 60){
  //     return 'Just now';
  //   } else if (vremeRazlikaS < 3600){
  //     return parseInt(vremeRazlikaS / 60) + ' min ago';
  //   } else if (vremeRazlikaS < SinceMidnightS){
  //     return parseInt(vremeRazlikaS / 3600) + ' h ago';
  //   } else if (vremeRazlikaS < (SinceMidnightS+86400)){
  //     return '1 day ago';
  //   } else {
  //     return new Date(dat).toLocaleDateString(undefined, {
  //       year: "numeric",
  //       month: "long",
  //       day: "numeric",
  //     })
  //   }
   
   

  // }
 // console.log(ispisiDatumKreiranja(datumKreiranja))
  
 




  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && <img className="singlePostImg" src={post.photo} />}
        <h1 className="singlePostTitle">
          {post.title &&
            post.title.charAt(0).toUpperCase() +
              post.title.slice(1).toLowerCase()}
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          {post.username && (
            <span className="singlePostAuthor">
              Author:
              <Link to={`/?username=${post.username}`} className="link">
                <b>{post.username}</b>
              </Link>
            </span>
          )}
          <span className="singlePostDate">
            {ispisiDatumKreiranja(post.createdAt)}
          </span>
        </div>
        <p className="singlePostDesc">{post.body}</p>
      </div>
    </div>
  );
};

export default SinglePost;
