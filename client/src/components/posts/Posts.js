import Post from '../post/Post';
import './posts.css';

function Posts({posts, ispisiDatumKreiranja}) {
  return (
    <div className='posts'>
      {[...posts].reverse().map(p=>(<Post post={p} key={p.id} ispisiDatumKreiranja={ispisiDatumKreiranja}/>))}      
    </div>
  )
}

export default Posts