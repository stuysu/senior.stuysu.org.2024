import Link from 'next/link'

export default function Navbar({ }) {
    return <nav className="main-nav">
    <input type="checkbox" className="input" />
      <div className="mobile-menu-toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    <Link className="main-link" href="/"><a>Home</a></Link>
    <Link className="main-link" href="/newsletters"><a>Newsletters</a></Link>
    <Link className="main-link" href="/opportunities"><a>Opportunities</a></Link>
    <Link className="main-link" href="/about"><a>About</a></Link>
    <a>Logo Logo Logo</a>
    {/* <a className="mobile-nav-burger">
      <i class="fa fa-bars"></i>
    </a> */}
  </nav>;
}