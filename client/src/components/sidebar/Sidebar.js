import "./sidebar.css";
import aboutMe from "../../pictures/aboutMe.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import api from "../../api/api";
import { Link } from "react-router-dom";

function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await api.get("categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="aboutMe" src={aboutMe} alt="" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi eaque
          maxime assumenda alias suscipit minima unde. Minus, incidunt, alias
          animi quas quos, nulla repellat doloremque esse asperiores maiores
          architecto voluptate.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?categories=${c.cat}`} className="link">
              <li className="sidebarListItem" key={c.id}>
                {c.cat}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i className="sidebarIcon fa-brands fa-twitter"></i>
          <i className="sidebarIcon fa-brands fa-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
