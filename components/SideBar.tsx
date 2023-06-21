import { forwardRef } from "react";
import Link from "next/link";
import { HomeIcon, UserIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

type SideBarProps = {
  showNav: Boolean;
};

const SideBar = forwardRef<HTMLDivElement, SideBarProps>(({ showNav }, ref) => {
  const router = useRouter();

  return (
    <div ref={ref} className="fixed w-56 h-full bg-white shadow-sm">
      <div className="flex justify-center mt-6 mb-14">
        <picture>
          <img className="w-32 h-auto" src="/next.svg " alt="company logo" />
        </picture>
      </div>

      <div className="flex flex-col">
        <Link href="/">
          <div
            className={`pl-6 py-3 mx-5 rounded-lg text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/"
                ? "bg-[#232b2b] text-white"
                : "text-gray-400 hover:bg-[#232b2b] hover:text-white"
            }`}
          >
            <div className="mr-2">
              <HomeIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Home</p>
            </div>
          </div>
        </Link>
        <Link href="/account">
          <div
            className={`pl-6 py-3 mx-5 rounded-lg text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/account"
                ? "bg-[#232b2b] text-white"
                : "text-gray-400 hover:bg-[#232b2b] hover:text-white"
            }`}
          >
            <div className="mr-2">
              <UserIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Clients</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
