import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="h-[70px] fixed grid place-content-center w-full top-0 bg-white">
      <Link className="text-2xl font-semibold" to={"/"}>Task Manager</Link>
    </nav>
  );
}
