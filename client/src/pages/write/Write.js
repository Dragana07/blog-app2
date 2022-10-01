import './write.css';
import {useState} from "react";
import api from "../../api/api";
import {useSelector} from "react-redux";
import {selectUser} from "../../features/user/userSlice";
import uuid from "react-uuid";
import {useNavigate} from "react-router-dom";

function Write() {
  const defPic = "https://images.unsplash.com/photo-1595562161314-4ed3f3503826?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [imgURL, setImgURL] = useState(defPic);
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  

  var date = new Date();
    date = date.toISOString(); //"2011-12-19T15:28:46.493Z"
    let danas =  new Date().getTime();
    let kreirano = new Date(date).getTime() - 7200000;
    console.log(danas)
    console.log(kreirano)

  const handleSubmit = async (e)=>{
    e.preventDefault();
    let dat = new Date();
    let datum = dat.toISOString(); 
    

    const newPost = {
      id: uuid(),
      userId: user.id,
      username: user.username, 
      createdAt: datum,
      categories: [],
      photo: imgURL,   
      title:title,
      body: body,
    };
    // if(file){
    //   const data = FormData();
    //   const filename = Date.now() + file.name;
    //   data.append("name", filename);
    //   newPost.photo = filename;
    //   try{
    //     await api.post('upload_file', formData, {
    //       headers: {
    //         'Content-Type': 'multipart/form-data'
    //       }
    //   })
    //   }catch(err){

    //   }

    
      const res=await api.post("posts", newPost)
      navigate("/")
    }
  
    console.log(imgURL)

  return (
    <div className='write'>
      <img className="writeImg" src={imgURL} alt="" />
        <form className="writeForm" onSubmit={handleSubmit}>
          
            <div className="writeFormGroup">
              <input type="text" placeholder='Img URL' className='writeImgUrl' onChange={(e)=>setImgURL(e.target.value)}/>
            </div>
          <div className="writeFormGroup">
            {/* <label htmlFor="fileInput">
              <i className="writeFormIcon fa-solid fa-circle-plus"></i>
            </label>
            <input type="file" id='fileInput' style={{display: "none"}}/> */}           
            <input type="text" placeholder='Title' className='writeInput' autoFocus={true} onChange={(e)=>setTitle(e.target.value)}/>
          </div>
          <div className="writeFormGroup">
            <textarea placeholder='Tell your story..' type='text' className='writeInput writeText' onChange={(e)=>setBody(e.target.value)}></textarea>
          </div>
          <button className="writeSubmit" type='submit'>Publish</button>
        </form>
    </div>
  )
}

export default Write