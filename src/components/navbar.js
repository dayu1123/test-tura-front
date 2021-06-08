import { useLocation, useHistory } from 'react-router-dom'

function Navbar() {
  let location = useLocation()
  let history = useHistory()
  function handleClick(location) {
    history.push(location);
  }
  return (
    <div style={{ background: '#87CEEB', display: 'flex', justifyContent: 'space-between' }}>
      {
        location.pathname === '/' ?
          <h3 style={{ marginLeft: '10px' }}>Flick Feed Reader</h3> : <h3 style={{ marginLeft: '10px' }}>Palindrome</h3>
      }
      {
        location.pathname === '/' ?
          <button onClick={(e) => handleClick('/palindrome', e)} style={{ margin: '15px', background: '#0ff1ce', padding: '10px', borderRadius: '10px' }}>Palindrome</button> : <button onClick={(e) => handleClick('/', e)} style={{ margin: '15px', background: '#0ff1ce', borderRadius: '10px', padding: '10px' }}>Flickr</button>
      }
    </div>
  )
}

export default Navbar