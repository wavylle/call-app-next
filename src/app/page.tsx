import Link from "next/link"

export default function Home() {
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
