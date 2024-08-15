export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <>компании настройки </>
      <div className="w-full pt-10 pl-4 pr-10 overflow-auto">{children}</div>
    </>
  );
}
