import Logo from "./Logo";

export default function Navigation() {
  return (
    <>
        <nav className="flex z-10 shadow border-b-[.5px] border-b-white  border-opacity-20 items-center justify-around">
            <Logo/>
            <p className="p-6 text-lg hover:underline hover:opacity-70">Sign Out</p>
        </nav>
    </>
  );
}
