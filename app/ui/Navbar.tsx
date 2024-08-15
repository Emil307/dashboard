import Link from "next/link";

type TRoute = {
  id: number;
  title: string;
  href: string;
};

type TGroup = {
  id: number;
  title: string;
  routes: TRoute[];
};

export const Navbar = ({ groups }: { groups: TGroup[] }) => {
  return (
    <>
      {groups.map((group: any) => (
        <div key={group.id}>
          <h5>{group.title}</h5>
          <div>
            {group.routes.map((route: any) => (
              <Link href={`${route.href}`} key={route.id}>
                {route.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
