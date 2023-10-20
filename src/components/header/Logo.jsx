import React from 'react'
import { Link } from 'react-router-dom';
import { GiCook } from "react-icons/gi";
const Logo = () => {
  return (
    <h1 className="header__logo">
      <Link to="/">
          <em><GiCook /></em>
          <span><span>cooking</span><br />youtube</span>
      </Link>
    </h1>
  )
}

export default Logo