import { Headphones, Image, Upload } from 'lucide-react';
import Button from './button';

export default function Landing() {
  return (
    <div className="bg-[#2C003E] min-h-screen">
    {/* Grid Background */}
    <div className="absolute inset-0 bg-grid-blue-500/10 [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]" />
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold text-white mb-4">
          Can&apos;t sleep?
        </h1>
        <p className="text-xl text-white mb-8">
          Feel free to try out this website with 10+ ready presets or play something custom for yourself :p
        </p>
        <p className="text-xl text-white mb-8">
          Download the application for full customazation.
        </p>
        <Button text="Explore" href="/presets" />
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-[#2C003E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Headphones className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Soothing Sounds
              </h3>
              <p className="text-white">
                Relax with a library of calming sounds.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-2">
                Custom Images
              </h3>
              <p className="text-white">
                For extra ambience you can upload custom images.
              </p>
            </div>
            <div className="text-center">
              <Upload className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Sound upload
              </h3>
              <p className="text-white">
                Need more sounds? Feel free to upload them!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-20 bg-blue-800 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Sleep Better?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Download the app for free and to use extra features! I didnt add any custom payment plan just download it :3
        </p>
        <Button text="Download" href="/download" />
      </section>
    </div>
  );
}
