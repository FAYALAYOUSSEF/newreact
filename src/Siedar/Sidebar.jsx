import React from "react";
import "./Sidebar.css";
import { Route, Routes, Link } from "react-router-dom";
import Todos from "../Todos/Todos";
import User from "../User/User";
import Product from "../Product/Product";
import Blog from "../Blog/Blog";
function Sidebar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 sidebar">
        <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{width: '280px',height:'100vh'}}>
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
     
      <span class="fs-4">MY FIRST APP</span>
    </a>
    <hr />
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
      <Link  class="nav-link text-white" to="/Todos"> Todos </Link>
      </li>
      <li>
      <Link  class="nav-link text-white" to="/User"> User</Link>
      </li>
      <li>
      <Link  class="nav-link text-white" to="/Blog"> Blog </Link>
      </li>
      <li>
      <Link  class="nav-link text-white" to="/Product"> Product</Link>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          
          Customers
        </a>
      </li>
    </ul>
    <hr />
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        
        <strong>mdo</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
        </div>
        <div className="col-lg-9 sidebar"></div>
        <Routes>
                    <Route path="/Todos" element={<Todos />} />
                    <Route path="User" element={<User />}/>
                    <Route path="Product" element={<Product />}/>
                    <Route path="Blog" element={<Blog />}/>

        </Routes>
      
      </div>
    </div>
  );
}

export default Sidebar;
