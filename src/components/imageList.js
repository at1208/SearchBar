import React from 'react';
import './imageList.css'

const ImageList = (props) => {
  console.log(props)
  const Image = props.data.map((pic)=> {
    return <div> <img src={pic.urls.regular}  key={pic.id} alt='avatar'/> </div>
  })
   return(<div className="img">
           {Image}
          </div>
   )

}
export default ImageList;
