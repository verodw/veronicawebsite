import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className='relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 group'
    >
      {title}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
    </Link>
  );
};

export default NavLink;