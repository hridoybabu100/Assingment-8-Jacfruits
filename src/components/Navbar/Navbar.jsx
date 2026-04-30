"use client";
import Image from "next/image";
import Link from "next/link";
import logoImg from "../../images/jackfruits.jpg";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";

const Navbar = () => {
  const jackfruits = authClient.useSession();
  const user = jackfruits.data?.user;
  // console.log(jackfruits);

  console.log(user);

  const links = (
    <>
      <Link href={"/"}>
        <li>
          {" "}
          <a>Home</a>
        </li>
      </Link>
      <Link href={"/all-jackfruits"}>
        {" "}
        <li>
          {" "}
          <a> ALL Jackfruits</a>
        </li>
      </Link>
      <Link href={"/profile"}>
        {" "}
        <li>
          {" "}
          <a>Profile</a>
        </li>
      </Link>
    </>
  );

  const handleSingOut = async() => {
    await authClient.signOut();
  }
  return (
    <div className="shadow-sm">
      <div className="navbar bg-base-100  max-w-[80%] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src={logoImg}
              alt="logo"
              loading="eager"
              width={50}
              height={50}
              className="object-cover h-10 w-10 rounded-full"
            />
            <h3 className="font-black text-lg">Jackfruits</h3>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end flex gap-2">
          {!user && (
            <ul className="flex gap-2">
              <li>
                {" "}
                <Link href={"/singin"}>
                  <button className="btn">Singin</button>
                </Link>
              </li>
              <li>
                {" "}
                <Link href={"/singup"}>
                  <button className="btn">Singup</button>
                </Link>
              </li>
            </ul>
          )}
        </div>

        {user && (
          <div className="flex items-center gap-2">
            <Avatar>
              <Avatar.Image
                alt={user?.title}
                src={user?.image}
                referrerPolicy="no-referrer"
              />
              <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
            </Avatar>
            <button onClick={handleSingOut} className="btn">Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
