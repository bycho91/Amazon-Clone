import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";

const Header = () => {
  const [session] = useSession();

  return (
    <div className="Header">
      {/* TOP NAV */}
      <div className="top-nav flex items-center bg-amazon_blue p-1 flex-grow py-2 gap-x-2">
        {/* Amazon logo */}
        <div className="mt-2 flex items-center sm:flex-grow-0 mr-2">
          {/* LOGO */}
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />

          {/* Deliver To */}
          {session && (
            <div className="hidden link lg:flex flex-col items-center cursor-pointer text-white">
              <p className="text-xs">{`Deliver to ${session.user.name}`}</p>
              <div className="flex items-center space-x-1">
                <LocationMarkerIcon className="h-5" />
                <p className="font-extrabold md:text-sm">Plano 75024</p>
              </div>
            </div>
          )}
        </div>

        {/* SEARCHBAR */}
        <div className="flex sm:hidden bg-yellow-400 rounded-md h-10 items-center hover:bg-yellow-500">
          <SearchIcon className="h-12 p-4 cursor-pointer" />
        </div>
        <div className="hidden sm:flex items-center h-10 search-bar flex-grow cursor-pointer bg-yellow-400 rounded-md hover:bg-yellow-500">
          <input
            type="text"
            placeholder="search"
            className="p-2 px-4 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
          />
          <SearchIcon className="h-12 p-4 cursor-pointer" />
        </div>

        {/* LINKS AND CART */}
        <div className="links flex items-center text-white text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="account link" onClick={!session ? signIn : signOut}>
            <p>{session ? `Hello, ${session.user.name}` : "Sign In"}</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="orders link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="cart flex items-center link relative">
            <span className="absolute top-0 right-0 md:right-5 h-4 w-4 bg-yellow-400 rounded-full text-center text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-9" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Cart
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM NAV */}
      <div className="bottom-nav flex items-center bg-amazon_blue-light text-white text-sm space-x-4 p-2 pl-6">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </div>
  );
};

export default Header;
