import Link from 'next/link'

export default function Navbar({ }) {
    return <>
    <nav className="main-nav">
      <Link className="main-link" href="/"><a>Home</a></Link>
      <Link className="main-link" href="/newsletters"><a>Newsletters</a></Link>
      <Link className="main-link" href="/opportunities"><a>Opportunities</a></Link>
      <Link className="main-link" href="/about"><a>About</a></Link>
      <a>Logo Logo Logo</a>
    </nav>

    <nav className="mobile-nav" role="navigation">
      <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <Link className="main-link" href="/"><li><a>Home</a></li></Link>
            <Link className="main-link" href="/newsletters"><li><a>Newsletters</a></li></Link>
            <Link className="main-link" href="/opportunities"><li><a>Opportunities</a></li></Link>
            <Link className="main-link" href="/about"><li><a>About</a></li></Link>
            <li><a>Logo Logo Logo</a></li>
          </ul>
      </div>
      {/* <div className="nav-title-m" id="nav-m">
          <Link href={"/"}><div className="link-txt" id="special">StuyMUN</div></Link>
          <Link href={"/"}>{FilledImage}</Link>
      </div> */}
    </nav>
    </>;
}