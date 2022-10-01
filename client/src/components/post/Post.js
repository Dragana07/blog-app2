import { Link } from 'react-router-dom'
import './post.css'
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import heart from "../../assets/heart.png";
import {useSelector, useDispatch} from "react-redux";
import { useState } from 'react';
import { selectUser, selectLike, selectDislike, selectLove, likeA, dislikeA, loveA } from '../../features/user/userSlice';


const Post = ({post, ispisiDatumKreiranja}) => {

  const[likes, setLikes]=useState(0);
  const[dislikes, setDislikes]=useState(0);
  const[loves, setLoves]=useState(0);

  const user = useSelector(selectUser)
  const liked = useSelector(selectLike);
  const disliked = useSelector(selectDislike);
  const loved = useSelector(selectLove);
  const dispatch = useDispatch();

  const handleLikes = ()=>{
    if(user){
      setLikes(liked ? likes - 1 : likes + 1)
      dispatch(likeA());
      console.log(likeA)
    }else{
      alert("Reakcije su omogucene samo ulogovanim korisnicima")
    }
    
  }

  const handleDislikes = ()=>{
    if(user){
      setDislikes(disliked ? dislikes - 1 : dislikes + 1)
      dispatch(dislikeA());      
    }else{
      alert("Reakcije su omogucene samo ulogovanim korisnicima")
    }
    
  }

  const handleLoves = ()=>{
    if(user){
      setLoves(loved ? loves - 1 : loves + 1)
      dispatch(loveA());
      
    }else{
      alert("Reakcije su omogucene samo ulogovanim korisnicima")
    }
  }
  
  return (
    <div className='post'>
      {post.photo && (
        <img src={post.photo} alt=''/>
      )}      
      <div className="postInfo">
        <div className="postCats">
        <div className='postCatsLeft'>
            <img className="postEmoji" id= "like" src={like} alt="" onClick={handleLikes}/>
            <span className="emojiBadge" id="likeBadge">{likes}</span>
            <img className="postEmoji" id= "dislike" src={dislike} alt=""  onClick={handleDislikes}/>
            <span className="emojiBadge" id="dislikeBadge">{dislikes}</span>
            <img className="postEmoji" id= "like" src={heart} alt="" onClick={handleLoves}/>
            <span className="emojiBadge" id="heartBadge">{loves}</span>
          </div>    
          <div className='postCatsRight'>{
            post.categories.map(c=>(
              <span className="postCat" key={c}>{c}</span>            
            ))
          }
          </div> 
           
        </div>
        <div className="postTitle">
        <Link className='link' to={`/post/${post.id}`}>
            <span>{post.title.charAt(0).toUpperCase() + post.title.slice(1).toLowerCase()}</span>
        </Link>
        </div>
        <hr />
        <span className="postDate">{ispisiDatumKreiranja(post.createdAt)}</span>
      </div>
      <p className="postDesc">{post.body}</p>
    </div>
  )
}

export default Post