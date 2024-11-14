export default function MainContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="main-content w-full h-full bg-gray-200">
      <div className="my-3 me-3 rounded bg-white h-[calc(100vh-2rem)] border border-gray-300">
        {children}
      </div>
    </main>
  );
}