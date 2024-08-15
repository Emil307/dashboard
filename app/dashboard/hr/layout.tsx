import { Navbar } from "@/app/ui";

const groups = [
  {
    id: 1,
    title: "Моя компания",
    routes: [
      {
        id: 1,
        title: "Сотрудники",
        href: "/dashboard/hr/employees",
      },
      {
        id: 2,
        title: "Тесты",
        href: "/dashboard/hr/tests",
      },
      {
        id: 3,
        title: "Структура",
        href: "/dashboard/hr/structure",
      },
      {
        id: 4,
        title: "Аналитика",
        href: "/dashboard/hr/analytic",
      },
    ],
  },
  {
    id: 2,
    title: "Другое",
    routes: [
      {
        id: 5,
        title: "База вакансий",
        href: "/dashboard/hr/vacancies",
      },
      {
        id: 6,
        title: "Ярмарка проектов",
        href: "/dashboard/hr/projects-fair",
      },
    ],
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar groups={groups} />
      <div>{children}</div>
    </div>
  );
}
