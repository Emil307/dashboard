import { Navbar } from "@/app/ui";

const groups = [
  {
    id: 1,
    title: "Личное",
    routes: [
      {
        id: 1,
        title: "Опыт и навыки",
        href: "/dashboard/employee/experience-and-skills",
      },
      {
        id: 2,
        title: "Проекты и задачи",
        href: "/dashboard/employee/projects-and-tasks",
      },
      {
        id: 3,
        title: "Моя карьера",
        href: "/dashboard/employee/career",
      },
      {
        id: 4,
        title: "Курсы",
        href: "/dashboard/employee/courses",
      },
      {
        id: 5,
        title: "Тесты",
        href: "/dashboard/employee/tests",
      },
    ],
  },
  {
    id: 2,
    title: "Другое",
    routes: [
      {
        id: 6,
        title: "Ярмарка проектов",
        href: "/dashboard/employee/projects-fair",
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
