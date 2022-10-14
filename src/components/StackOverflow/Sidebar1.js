import React from "react";
import "./sidebar1.css";
import { AiOutlineStar } from "react-icons/ai";
import { MdPublic, MdOutlineWork } from "react-icons/md";
import {HiOfficeBuilding} from 'react-icons/hi';
import {GrLocation} from 'react-icons/gr'
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="sidebar1">
      <div className="sidebar-container1">
        <div className="sidebar-options1">
          <div className="sidebar-option1">
            <Link to="/">Looking out for...</Link>
          </div>
          <div className="sidebar-option1">
            <p>Frontend Developer with Angular</p>
            <div className="link">
              <div className="link-tag">
                <MdPublic
                  style={{
                    fontSize: "18px",
                    marginRight: "5px",
                    color: "gray",
                  }}
                />
                <Link to="/">Remote</Link>
              </div>
            </div>
          </div>
          <div className="sidebar-option1">
            <p>Senior iOs/ iPhone Engineer</p>
            <div className="link">
              <div className="link-tag">
                <HiOfficeBuilding
                  style={{
                    fontSize: "18px",
                    marginRight: "5px",
                    color: "gray",
                  }}
                />
                <Link to="/">In office</Link>
              </div>
            </div>
          </div>
          <div className="sidebar-option1">
            <p>Software Engineer</p>
            <div className="link-tag">
              <GrLocation style={{
                  fontSize: "18px",
                  marginRight: "5px",
                  color: "gray",
                }} />
                <Link to="/">Bengaluru, India  .</Link>
              <HiOfficeBuilding
                style={{
                  fontSize: "18px",
                  marginRight: "5px",
                  color: "gray",
                }}
              />
              <Link to="/">InOffice</Link>
            </div>
          </div>
          <div className="sidebar-option1">
            <p>TEAMS</p>
            <div className="link-tag">
              <GrLocation style={{
                  fontSize: "18px",
                  marginRight: "5px",
                  color: "gray",
                }} />
                <Link to="/">India Location  .</Link>
              <MdPublic
                style={{
                  fontSize: "18px",
                  marginRight: "5px",
                  color: "gray",
                }}
              />
              <Link to="/">Remote</Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
