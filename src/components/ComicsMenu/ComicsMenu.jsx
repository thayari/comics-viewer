import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function ComicsMenu(props) {
  const { list, changeComic, showPreviewToggle } = props;
  // const [items, setItems] = useState([]);
  return (
    <div className="library-menu">
      {list.map((item) => {
        return (
          <Link to={"/details/"+ item.id} 
            key={item.id} 
            onMouseEnter={() => {showPreviewToggle(item.id)}}
            // onMouseOut={() => {showPreviewToggle(null)}}
            >
            {item.title}
          </Link>
        )
      })}
    </div>
  )
}

export default ComicsMenu
