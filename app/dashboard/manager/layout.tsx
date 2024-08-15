import { Navbar } from "@/app/ui";

const groups = [
  {
    id: 1,
    title: "Личное",
    routes: [
      {
        id: 1,
        title: "Опыт и навыки",
        href: "/dashboard/manager/experience-and-skills",
      },
      {
        id: 2,
        title: "Проекты и задачи",
        href: "/dashboard/manager/projects-and-tasks",
      },
      {
        id: 3,
        title: "Моя карьера",
        href: "/dashboard/manager/career",
      },
      {
        id: 4,
        title: "Курсы",
        href: "/dashboard/manager/courses",
      },
      {
        id: 5,
        title: "Тесты",
        href: "/dashboard/manager/tests",
      },
      {
        id: 6,
        title: "Аналитика",
        href: "/dashboard/manager/analytic",
      },
    ],
  },
  {
    id: 2,
    title: "Другое",
    routes: [
      {
        id: 7,
        title: "Ярмарка проектов",
        href: "/dashboard/manager/projects-fair",
      },
      {
        id: 8,
        title: "Сотрудники",
        href: "/dashboard/manager/employees",
      },
    ],
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar groups={groups} />
      <div className="w-full pt-10 pl-4 pr-10 overflow-auto">{children}</div>
    </>
  );
}
