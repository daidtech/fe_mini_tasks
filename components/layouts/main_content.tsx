export default function MainContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="main-content w-full">
      {children}
    </main>
  );
}