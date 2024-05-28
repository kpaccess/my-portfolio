import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinksPropsArray, NavLinkProps } from "@/types";

const NavLink = ({ links }: NavLinksPropsArray) => {
  const path = usePathname();
  console.log(path);
  console.log(links);
  return (
    <>
      {links.map((link: NavLinkProps) => (
        <Link
          key={link.title}
          href={link.url}
          className={`rounded p-1 ${
            path === link.url && "bg-black text-white"
          }`}
        >
          {link.title}
        </Link>
      ))}
    </>
  );
};

export default NavLink;
