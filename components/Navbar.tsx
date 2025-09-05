import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className='flex px-3 justify-between'>
        <div className="font-bold italic">iFitness</div>
        <ul className="flex">
            <Link href={`/`}>Home</Link>
            <Link href={`/about`}>About</Link>
            <Link href={`/users`}>Users</Link>
        </ul>
    </nav>
  )
}

export default NavBar;