import './settings.css';
import Sidebar from '../../components/sidebar/Sidebar';
import profilePic from '../../pictures/pexels-da-8505191(1).jpg';
import {useSelector} from "react-redux";
import {selectUser} from "../../features/user/userSlice";

const Settings=()=>{

  const user = useSelector(selectUser);
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
               <label>Profile Picture</label>
               <div className="settingsPP">
                <img src={profilePic} alt="" />
                <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                </label>
                <input type="file" id="fileInput" style={{display: "none"}}/>
               </div>
               <label>Username</label>
               <input type="text" placeholder={user.username}/>
               <label>Email</label>
               <input type="email" placeholder='gagas@yuhuu.bee'/>
               <label>Password</label>
               <input type="password"/>
               <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}

export default Settings;