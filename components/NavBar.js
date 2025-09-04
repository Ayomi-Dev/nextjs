import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className='flex justify-between'>
        <div className="o">LOGO</div>
        <ul className="flex">
            <Link href={`/`}>Home</Link>
            <Link href={`/about`}>About</Link>
            <Link href={`/users`}>Users</Link>
        </ul>
    </nav>
  )
}

export default NavBar;