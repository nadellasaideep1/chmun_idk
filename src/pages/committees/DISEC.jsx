import { Button } from "../../components/ui/button";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function DISEC() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div
      className="min-h-screen bg-black text-white pt-20"
      style={{
        backgroundImage: `url(/disec.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Default for desktop
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backgroundBlendMode: "overlay",
      }}
    >
      <style>
        {`
          @media (max-width: 640px) {
            .min-h-screen {
              background-attachment: scroll !important;
            }
          }
        `}
      </style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h1 className="text-6xl md:text-9xl font-black tracking-tight text-center mt-8 md:mt-8 mb-8">
          Disarmament and International Security Committee
        </h1>
        <p className="text-2xl md:text-3xl text-gray-200 text-center mb-12">
          <strong>Agenda:</strong> De-nuclearization of the Middle East and addressing the emerging gaps in the Non-Proliferation Treaty (NPT) framework.
        </p>
        <p className="text-lg md:text-xl text-gray-300 text-center max-w-3xl mb-5">
DISEC is the First Committee of the UN General Assembly, addressing threats to international peace, global disarmament, and arms control. Delegates formulate multilateral solutions to reduce armed conflict and promote global security. The committee emphasizes diplomacy, treaty-making, and conflict prevention.
        </p>
        <div className="flex flex-row sm:flex-row mb-5 gap-4">
          <a
            href="https://docs.google.com/spreadsheets/d/17j3mgUWoVHAypN4l-MdZtOFcBEQA-5zGSE7GTeToyBI/edit?gid=2126818736#gid=2126818736"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="hover:cursor-pointer mt-10 bg-white text-black text-lg font-semibold px-8 py-3 rounded-lg relative overflow-hidden group"
              style={{ transition: "color 300ms ease-in-out" }}
            >
              <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                Matrix
              </span>
            </Button>
          </a>
          <a
  onClick={(e) => {
    e.preventDefault(); // Prevent the link from opening
    alert("Coming Soon"); // Show the alert
  }}
          >
            <Button
              className="hover:cursor-pointer mt-10 bg-white text-black text-lg font-semibold px-8 py-3 rounded-lg relative overflow-hidden group"
              style={{ transition: "color 300ms ease-in-out" }}
            >
              <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                Background Guide
              </span>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default DISEC;