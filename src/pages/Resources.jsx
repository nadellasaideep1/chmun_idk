import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Resources() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-black text-white pt-20 flex flex-col items-center">
      {/* Top Section with Logo Background */}
      <section
        className="w-full flex flex-col items-center bg-contain bg-center bg-no-repeat py-32"
        style={{
          backgroundImage: `url('/chmunlogo.png')`,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backgroundBlendMode: 'overlay',
          backgroundSize: '350px 350px',
        }}
      >
        <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="text-7xl md:text-9xl font-black tracking-tight text-center mb-5">
            Resources
          </h1>
        </div>
      </section>

      {/* Resources Content */}
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <section className="w-full mb-12">
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
  {[
    { label: 'Matrix', href: 'https://docs.google.com/spreadsheets/d/17j3mgUWoVHAypN4l-MdZtOFcBEQA-5zGSE7GTeToyBI/edit?gid=2126818736#gid=2126818736' },
    { label: 'Background Guides', href: 'https://drive.google.com/drive/u/2/folders/1HUZpQBu6LJKGmqpFk6AJdK1rabT2hCm9' },
    { label: 'Brochure', href: 'https://drive.google.com/file/d/11lQksFpH_5jaJff4S0vm_yThDRCDMMzr/view?usp=share_link' },
  ].map((item, index) => (
    <a
      key={index}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center"
    >
                <Button className="bg-white text-black hover:cursor-pointer hover:bg-gray-200 text-lg font-semibold px-8 py-3 rounded-lg w-full">
                  {item.label} <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
              </a>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="col-start-1 lg:col-start-2">
              <a
                href="https://docs.google.com/document/d/1FB4zOMVGtdnGw_NByLtTLFXRcjCmsSMKurX3ZljjuzQ/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center"
              >
                <Button className="bg-white text-black hover:cursor-pointer hover:bg-gray-200 text-lg font-semibold px-8 py-3 rounded-lg w-full">
                  Code of Conduct <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Resources;
