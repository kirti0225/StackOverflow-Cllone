import React from 'react';
import './index.css'
import Sidebar from './Sidebar';
import Sidebar1 from './Sidebar1';
import Main from './Main'

function index() {
  return (
    <div className="stack-index">
      <div className="stack-index-content">
        <Sidebar />
        <Main/>
        <Sidebar1/>
      </div>
    </div>
  )
}

export default index
