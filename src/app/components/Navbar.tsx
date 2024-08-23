import React from 'react';
import Link from 'next/link';
import "../CSS/navbar.module.css";

export default function Navbar() {
  return (
    <nav id="navbar" className="navbar navbar-expand-lg bg-danger">
  <div className="container-fluid">
    <Link style={{color: "white"}} className="navbar-brand" href="/">Ecommerce Site</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse light" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link style={{color: "white"}} className="nav-link active" aria-current="page" href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link style={{color: "white"}} className="nav-link" href="/products">Products</Link>
        </li>
        <li className="nav-item dropdown">
          <a style={{color: "white"}} className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul className="dropdown-menu">
            <li><a style={{color: "rgba(var(--bs-danger-rgb), var(--bs-bg-opacity)) !important"}} className="dropdown-item" href="#">Mobiles</a></li>
            <li><a style={{color: "rgba(var(--bs-danger-rgb), var(--bs-bg-opacity)) !important"}} className="dropdown-item" href="#">Monitors</a></li>
            <li><a style={{color: "rgba(var(--bs-danger-rgb), var(--bs-bg-opacity)) !important"}} className="dropdown-item" href="#">Electronics</a></li>
            <li><a style={{color: "rgba(var(--bs-danger-rgb), var(--bs-bg-opacity)) !important"}} className="dropdown-item" href="#">Appliances</a></li>
            <li><a style={{color: "rgba(var(--bs-danger-rgb), var(--bs-bg-opacity)) !important"}} className="dropdown-item" href="#">Toys and Beauty</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link style={{color: "white"}} className="nav-link" href="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link style={{color: "white"}} className="nav-link" href="/contact">Contact</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}
