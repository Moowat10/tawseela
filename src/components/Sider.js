import React, { useState } from "react";
import { BiHomeCircle } from "react-icons/bi";
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
import { MdDirectionsBike } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { VscSignOut, VscSignIn } from "react-icons/vsc";
import { FaRegistered } from "react-icons/fa";
import "../assets/css/sider.css";

export default function Sider({ isFolded }) {
  const [Folded, setFolded] = useState(isFolded);
  const toggleSideBar = () => {
    setFolded(!Folded);
  };
  return (
    <div className={Folded ? "sider-wrapper-folded" : "sider-wrapper"}>
      <div className="sidebar-header">
        <div
          style={
            !Folded
              ? {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }
              : {
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }
          }
        >
          <div
            className="fold-btns"
            onClick={toggleSideBar}
            style={
              Folded
                ? {
                    position: "fixed",
                    right: "0",
                    top: "0",
                    borderRight: "solid",
                    borderRightWidth: "2px",
                    width: "2.7rem",
                    height: "3rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0 0 5px black",
                  }
                : {
                    position: "fixed",
                    borderRight: "solid",
                    borderRightWidth: "2px",
                    width: "2.7rem",
                    height: "3rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0 0 5px black",
                  }
            }
          >
            {!Folded ? (
              <RiMenuUnfoldLine
                style={{ color: "white", width: "100%", height: "50%" }}
              />
            ) : (
              <RiMenuFoldLine
                style={{ color: "white", width: "100%", height: "50%" }}
              />
            )}
          </div>
          <div className="fold-btns">
            <BiHomeCircle
              style={{ color: "white", width: "100%", height: "50%" }}
            />
          </div>
          <div className="fold-btns">
            <ImProfile
              style={{ color: "white", width: "100%", height: "50%" }}
            />
          </div>
          <div className="fold-btns">
            <MdDirectionsBike
              style={{ color: "white", width: "100%", height: "50%" }}
            />
          </div>
        </div>
      </div>
      <div
        style={
          Folded ? { width: "100%", visibility: "hidden" } : { width: "100%" }
        }
      >
        <div className="top">
          <div className="menu-item">
            <button className="sidebar-glowing-btn">
              {" "}
              <VscSignIn />
              <div style={{ marginLeft: "6.5rem" }}>Sign In</div>
            </button>
          </div>
          <div className="menu-item">
            <button className="sidebar-glowing-btn">
              {" "}
              <FaRegistered />
              <div style={{ marginLeft: "6.5rem" }}>Register</div>
            </button>
          </div>
        </div>
        <div className="seperator"></div>
        <div className="mid">
          <div className="menu-item">
            <button className="sidebar-glowing-btn">
              {" "}
              <BiHomeCircle />
              <div style={{ marginLeft: "6.5rem" }}>Home</div>
            </button>
          </div>
          <div className="menu-item">
            <button className="sidebar-glowing-btn">
              {" "}
              <ImProfile />
              <div style={{ marginLeft: "6.5rem" }}>Profile</div>
            </button>
          </div>
          <div className="menu-item">
            <button className="sidebar-glowing-btn">
              {" "}
              <MdDirectionsBike />
              <div style={{ marginLeft: "6.5rem" }}>Ride Now</div>
            </button>
          </div>
        </div>
        <div className="seperator"></div>
        <div className="bottom"></div>
      </div>
    </div>
  );
}
