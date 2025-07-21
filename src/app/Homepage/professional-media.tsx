import Image from 'next/image';

const Professional = () => {
  return (
    // Main section container with white background and relative positioning for the blur effect
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden relative">
      {/*
        Background Blur Element
        - Positioned absolutely to top-right.
        - Dimensions as specified: w-[925px] h-[1029px].
        - Rotated by -64.05 degrees.
        - Using a gradient for the blur color to match the "news" text hue.
        - blur-3xl for a strong blur.
        - rounded-full makes it a soft, circular blob before rotation.
        - translate-x/y are adjusted to position the *center* of the rotated blob off-screen
          in a way that visually matches the source image where it fades in from the top right.
        - opacity for a softer appearance.
        - pointer-events-none ensures it doesn't interfere with user interaction.
      */}
      <div
        className="absolute right-0 top-0 w-[925px] h-[1029px] transform -rotate-[64.05deg] translate-x-[300px] translate-y-[-200px] bg-gradient-to-br from-purple-500/30 to-blue-500/30 blur-3xl rounded-full opacity-60 pointer-events-none"
      ></div>

      {/* Content Container - centered and above the blur (z-10) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Title */}
        <h1 className="text-[48px] md:text-5xl font-medium text-gray-900 leading-tight mb-4">
          Professional media and industry{' '}
          {/* "news" part with gradient text */}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
            news
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-[24px] md:text-3xl font-medium text-gray-700 mb-12">
          Stay updated with the latest trends, updates, and news shared by industry experts.
        </p>

        {/* UI Mockup Image - centered */}
        <div className="relative w-full max-w-4xl mx-auto mt-8">
          <Image
            src="/homePage/professional.png" // Path to your saved image
            alt="Staffbook UI Mockup"
            width={1000} // Approximate width of the image based on visual scale
            height={800} // Approximate height to maintain aspect ratio, adjust if your image is different
            layout="responsive" // Makes the image scale with its parent div
            objectFit="contain" // Ensures the entire image is visible within its bounds
            quality={100} // High quality for hero image
            priority // Preload the image as it's critical for the LCP
          />
        </div>
      </div>
    </section>
  );
};

export default Professional;