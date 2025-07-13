import { Button } from "../components/ui/button";
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

function NotFound() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-black text-white pt-20 flex flex-col items-center">
      <section className="w-full flex flex-col items-center py-32">
        <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="text-6xl md:text-9xl font-black tracking-tight text-center mb-6">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-gray-300 text-center mb-8">
            The page you're looking for doesn't exist.
          </p>
          <Link to="/" className="flex justify-center">
            <Button className="bg-white text-black hover:cursor-pointer hover:bg-gray-200 text-lg font-semibold px-8 py-3 rounded-lg">
              Go to Home
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default NotFound;
