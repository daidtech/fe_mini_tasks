export default function MainContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="main-content w-full h-full bg-gray-200">
      <div className="m-0 sm:m-3 rounded bg-white w-full h-full sm:w-[calc(100%-1.5rem)] sm:h-[calc(100%-1.5rem)] border border-gray-300">
        {children}
      </div>
    </main>
  );
}