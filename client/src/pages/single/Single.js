import Sidebar from '../../components/sidebar/Sidebar';
import SinglePost from '../../components/singlePost/SinglePost';
import './single.css';


export default function Single({ispisiDatumKreiranja}) {
  
  return (
    <div className='single'>
        <SinglePost ispisiDatumKreiranja={ispisiDatumKreiranja}/>
        <Sidebar/>
    </div>
  )
}
