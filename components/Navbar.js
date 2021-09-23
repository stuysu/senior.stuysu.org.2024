import Link from 'next/link'
import { useState } from 'react'
import navbar from '../styles/Navbar.module.scss'

export default function Navbar({ }) {
  const [ checked, setChecked ] = useState(false);

  function toggle() { setChecked(!checked) }

    return <>
    <nav className={navbar.mainnav}>
      <Link className="main-link" href="/"><a>Home</a></Link>
      <Link className="main-link" href="/newsletters"><a>Newsletters</a></Link>
      <Link className="main-link" href="/opportunities"><a>Opportunities</a></Link>
      <Link className="main-link" href="/about"><a>About</a></Link>
      <div className={navbar.socials}>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i></a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i></a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i></a>
      </div>
    </nav>

    <nav className={navbar.mobilenav} role="navigation">
      <div id={navbar.menuToggle}>
        <input type="checkbox" checked={checked} onChange={toggle} />
          <span></span>
          <span></span>
          <span></span>
          <ul id={navbar.menu}>
            <Link className="main-link" passHref href="/"><li><a onClick={toggle}>Home</a></li></Link>
            <Link className="main-link" passHref href="/newsletters"><li><a onClick={toggle}>Newsletters</a></li></Link>
            <Link className="main-link" passHref href="/opportunities"><li><a onClick={toggle}>Opportunities</a></li></Link>
            <Link className="main-link" passHref href="/about"><li><a onClick={toggle}>About</a></li></Link>
            <li className={navbar.socials}>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i></a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i></a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i></a>
              </li>
          </ul>
      </div>
    </nav>
    </>;
}