import { Headphones, PictureInPicture, Upload } from "lucide-react";

const Features = () => {
    return ( 
        <section id="features" className="py-20 bg-slate-900">
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
                <PictureInPicture className="h-12 w-12 text-white mx-auto mb-4"/>
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
     );
}
 
export default Features;