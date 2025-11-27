export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-6">
      <div className="flex flex-col items-center">
        {/* <Construction className="w-16 h-16 mb-4 animate-pulse" /> */}

        <h1 className="text-3xl font-bold mb-2">
          This page is currently being updated
        </h1>

        <p className="text-muted-foreground max-w-md mb-6">
          We’re working hard to improve this page. Please check back later for
          the latest updates and improvements.
        </p>
      </div>
    </div>
  );
}
