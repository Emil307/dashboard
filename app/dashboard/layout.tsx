export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="flex max-h-screen overflow-hidden">{children}</div>;
}
