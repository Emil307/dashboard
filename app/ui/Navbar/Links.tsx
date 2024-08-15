"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type TRoute = {
  id: number;
  title: string;
  href: string;
};

export const Links = ({ routes }: { routes: TRoute[] }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col">
      {routes.map((route: TRoute) => (
        <Link href={`${route.href}`} key={route.id}>
          <div className="h-8 flex items-center pl-2 rounded-md">
            <h6 className="text-base font-semibold">{route.title}</h6>
          </div>
        </Link>
      ))}
    </div>
  );
};
