import React from "react";
import "./sidebar.css";
import { AiOutlineStar } from "react-icons/ai";
import { MdPublic, MdOutlineWork } from "react-icons/md";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-options">
          <div className="sidebar-option">
            <Link to="/">Home</Link>
          </div>
          <div className="sidebar-option">
            <p>PUBLIC</p>
            <div className="link">
              <div className="link-tag">
                <MdPublic
                  style={{
                    fontSize: "18px",
                    marginRight: "5px",
                    color: "rgb(245, 162, 9)",
                  }}
                />
                <Link to="/">Question</Link>
              </div>

              <div className="tags">
                <p>Tags</p>
                <p>Users</p>
              </div>
            </div>
          </div>
          <div className="sidebar-option">
            <p>COLLECTIVES</p>
            <div className="link">
              <div className="link-tag">
                <AiOutlineStar
                  style={{
                    fontSize: "18px",
                    marginRight: "5px",
                    color: "rgb(245, 162, 9)",
                  }}
                />
                <Link to="/">Explore Collectives</Link>
              </div>
            </div>
          </div>
          <div className="sidebar-option">
            <p>FIND A JOB</p>
            <div className="link">
              <Link
                style={{
                  margin: "10px 20px",
                }}
                to="/" >
                Jobs
              </Link>
              
              <Link
                style={{
                  marginLeft: "20px",
                }}
                to="/"
              >
                Companies
              </Link>
            </div>
          </div>
          <div className="sidebar-option">
            <p>TEAMS</p>
            <div className="link-tag">
              <MdOutlineWork
                style={{
                  fontSize: "18px",
                  marginRight: "5px",
                  color: "rgb(245, 162, 9)",
                }}
              />
              <Link to="/">Companies</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
