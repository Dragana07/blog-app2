import './header.css';
import headerImg from '../../pictures/headerImg3.jpg';

function Header() {
  return (
    <div className='header'>
        <img className='headerImg' src={headerImg} alt="" />
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        
    </div>
  )
}

export default Header