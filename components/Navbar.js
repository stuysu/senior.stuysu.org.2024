import Link from 'next/link'

export default function Navbar({ }) {
    return <nav className="main-nav">
    <Link href="/"><a>Home</a></Link>
    <Link href="/newsletters"><a>Newsletters</a></Link>
    <Link href="/opportunities"><a>Opportunities</a></Link>
    <Link href="/about"><a>About</a></Link>
    <a>Logo Logo Logo</a>
  </nav>;
}