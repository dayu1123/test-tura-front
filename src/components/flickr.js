import { useState, useEffect } from 'react'
import apiPics from '../api'

function Flickr() {
  const [dataPics, setDataPics] = useState('')
  useEffect(() => {
    apiPics({
      method: 'get',
      url: '/pics'
    })
      .then(({ data }) => {
        setDataPics(data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '10px' }}>
        {
          dataPics ? dataPics.items.map((el, i) => {
            return (
              <div key={i} style={{ flex: '1 0 21%', margin: '10px' }}>
                <div key={i} style={{ border: '2px solid blue', borderRadius: '10px', padding: '20px' }} dangerouslySetInnerHTML={{ __html: el.content }}></div>
              </div>
            )
          }) : null
        }
      </div>

    </>
  )
}

export default Flickr