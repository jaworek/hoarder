"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import GlobalActions from "@/components/dashboard/GlobalActions";
import ProfileOptions from "@/components/dashboard/header/ProfileOptions";
import { SearchInput } from "@/components/dashboard/search/SearchInput";
import HoarderLogo from "@/components/HoarderIcon";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky left-0 right-0 top-0 z-50 flex h-16 items-center justify-between overflow-x-auto overflow-y-hidden bg-background p-4 shadow">
      <div className="hidden items-center sm:flex">
        <Link href={"/dashboard/bookmarks"} className="w-56">
          <HoarderLogo height={20} gap="8px" />
        </Link>
      </div>
      {pathname === "/dashboard/bookmarks" ? (
        <div className="flex flex-1 gap-2">
          <SearchInput className="min-w-40 bg-muted" />
          <GlobalActions />
        </div>
      ) : null}
      <div className="flex items-center">
        <ProfileOptions />
      </div>
    </header>
  );
}
