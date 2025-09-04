import Link from "next/link";

export async function generateMetadata({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await res.json();

  return {
    title: `${user.name} | User Profile`,
  };
}


const UserInfo = async({params}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await res.json();

  return (
    <div className="p-3">
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.address.city}</p>
        <p>{user.phone}</p>

        <Link href={`/users`}>
          <button className="mt-4 p-2 bg-blue-500 text-white rounded">Back to Users</button>
        </Link>
    </div>
  )
}

export default UserInfo 