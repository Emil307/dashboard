import { Links } from "./Links";

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
    <div className="flex flex-col gap-6 h-screen w-fit pl-2 pr-2 pt-6 bg-gray-50">
      <div className="w-52">Эмиль Новиков</div>
      <div className="flex flex-col gap-10">
        {groups.map((group: TGroup) => (
          <div className="flex flex-col gap-1" key={group.id}>
            <h6 className="text-base font-semibold leading-4 opacity-50">
              {group.title}
            </h6>
            <Links routes={group.routes} />
          </div>
        ))}
      </div>
    </div>
  );
};
