import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between px-3 py-5 bg-slate-700 text-white">
      <div>
        <Link href="/">
          <h1>Logo</h1>
        </Link>
      </div>
      <div className="flex gap-5">
        <button>Sign In</button>
        {/* will need a sign up form */}
        <Link href="/sign-up">
          <button>Sign Up</button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
