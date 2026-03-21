
const VirtualTour = () => {
  return (
    <section id="virtual-tour" className="py-24 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-8 bg-amber-500"></span>
            <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">
              Virtual Experience
            </span>
            <span className="h-px w-8 bg-amber-500"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Step Inside Your New Home
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take an immersive 360° walkthrough of the Sukoon Villas. Explore the elegant architecture, premium finishes, and abundant natural light at your own pace.
          </p>
        </div>

        {/* Kuula Iframe Container */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-8 border-slate-100 bg-white flex items-center justify-center group" style={{ height: '75vh', minHeight: '500px', maxHeight: '800px' }}>
          
          {/* Loading Placeholder (Visible briefly before iframe loads) */}
          <div className="absolute inset-0 flex items-center justify-center flex-col gap-4 z-0">
            <div className="w-10 h-10 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-slate-500 font-medium tracking-wide">Loading Virtual Tour...</span>
          </div>

          {/* The Actual Embed */}
          <iframe
            title="Sukoon Virtual 3D Tour"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="xr-spatial-tracking; gyroscope; accelerometer"
            allowFullScreen
            scrolling="no"
            src="https://kuula.co/share/collection/7HQDw?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1"
            className="absolute top-0 left-0 w-full h-full z-10"
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default VirtualTour;