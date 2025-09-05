
import Link from 'next/link'


export const metadata = {
  title: "Page not found"
}
const NotFound = () => {
  return (
    <div className='text-center font-bold'>
        <h1>Page not found</h1>
        <Link href={`/`}>Go back Home</Link>
    </div>
  )
}

export default NotFound