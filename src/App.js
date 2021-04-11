import React, {useEffect, useState} from 'react';
import './App.scss';
import ComicsMenu from './components/ComicsMenu/ComicsMenu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ViewerSection from './components/ViewerSection/ViewerSection';
import Details from './components/Details/Details';
import Preview from './components/Preview/Preview';
import data from './data';
import dataAuthors from './data-authors';


function App() {

  const list = data.list;
  const listAuthors = data.list;

  const [currentPreview, setCurrentPreview] = useState(null);
  // const [showMenu, setShowMenu] = useState(true)

  const showPreviewToggle = (id) => {
    if (id) {
      setCurrentPreview(list.filter((item) => item.id == id)[0])
    } else {
      setCurrentPreview(null)
    }

  }

  return (
    <div className="App container">
      
      <Switch>
        <Route exact path='/'>
        <div className="row">
        <div className="column-2" id="preview-column"><Preview currentPreview={currentPreview} /></div>
        <div className="column-2" id="titles-column"><ComicsMenu list={list} showPreviewToggle={showPreviewToggle} /></div>
      </div>
        </Route>
        <Route path='/details/:id' component={Details} />
        <Route path='/viewer/:id' component={ViewerSection} />
      </Switch>
    </div>
  );
}

export default App;
