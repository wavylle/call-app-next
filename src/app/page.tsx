import Link from "next/link"
import {getUsers, createUser} from "@/_actions/userActions"

export default async function Home() {
  // const getUsersData = await getUsers()
  // console.log(getUsersData)

  // const createNewUser = await createUser()
  // console.log(createNewUser)
  return (
  <div className="p-10">
    Below are all the pages, click to visit: <br />
    <Link
      href="/auth/signin"
      className="text-cyan-500 transition-colors hover:text-cyan-400"
    >
      Signin
    </Link><br />
    <Link
      href="/auth/signup"
      className="text-cyan-500 transition-colors hover:text-cyan-400"
    >
      Signup
    </Link><br />
    <Link
      href="/campaigns"
      className="text-cyan-500 transition-colors hover:text-cyan-400"
    >
      Campaigns
    </Link> <br />
    <Link
      href="/agents"
      className="text-cyan-500 transition-colors hover:text-cyan-400"
    >
      Agents
    </Link>
  </div>  
  );
}
