import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between px-3 h-[10vh] bg-slate-700 text-white">
      <div className="flex items-center">
        <Link href="/">
          <h1>Logo</h1>
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <Link href="/sign-in">
          <button>Sign In</button>
        </Link>

        {/* will need a sign up form */}
        <Link href="/sign-up">
          <button>Sign Up</button>
        </Link>
        <Link href="/about">
          <button>About Us</button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
