import type { NavLinkT } from "../../types/common";
import NavLinks from "../../utils/contants";


export default function Header() {
  return (
    <header className="bg-slate-600 py-8 px-4 grid text-white ">
      {/* Logo / Title */}
      <h1 className="text-xl uppercase font-black">
        Task Tracker App
      </h1>

      {/* Navigation */}
      <nav>
        <ul className="grid gap-4">
            {NavLinks.map((nav)=>(<li><NavLink {...nav} /></li>))}
        </ul>
      </nav>

    </header>
  );
}


function NavLink({title,link,icon:Icon}:NavLinkT) {
  return (
    <a
      href={link}
      className="group bg-slate-400 rounded-full flex items-center pr-5 hover:bg-slate-500 transition"
    >
      <div className="inline-block p-2 rounded-full text-slate-900 group-hover:text-white text-2xl">
        <Icon/>
      </div>
      <p className="uppercase font-medium group-hover:text-white">{title}</p>
    </a>
  );
}
