import React from "react";
import './main.css'
import AllQuestion from "./AllQuestion";
import { MdFilterList } from "react-icons/md"
import { Link } from "react-router-dom";

function Main({ questions }) {
  return (
    <div className="main">
      <div className="main-container">
        <div className="main-top">
          <h2>All Questions</h2>
          <Link to="/add-question">
            <button>Ask Question</button>
          </Link>
        </div>
        <div className="main-desc">
          <p> questions</p>
          <div className="main-filter">
            <div className="main-tabs">
              <div className="main-tab">
                <Link to="/">Newest</Link>
              </div>
              <div className="main-tab">
                <Link to="/">Active</Link>
              </div>
              <div className="main-tab">
                <Link to="/">More</Link>
              </div>
            </div>
            <div className="main-filter-item">
              <MdFilterList />
              <p>Filter</p>
            </div>
          </div>
        </div>
        <div className="questions">
            <div className="question">
              <AllQuestion />
              {/* <AllQuestion />
              <AllQuestion />
              <AllQuestion />
              <AllQuestion />
              <AllQuestion /> */}
            </div>
        </div>
      </div>
    </div>
  );
}

export default Main;