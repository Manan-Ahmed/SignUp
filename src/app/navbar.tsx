"use client"
// import {useRouter} from "next/navigation"

import { useRouter } from "next/navigation";

export default function Navbar(){

    const route = useRouter()

    const go =()=>{
      route.push('login')
    }
  

return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
      </ul>
      <form className="d-flex" role="search">
       
        <button  className="btn btn-outline-success" >
          Signin
        </button>

        <button onClick={go}>login</button>
      </form>
    </div>
  </div>
</nav>
)

}
