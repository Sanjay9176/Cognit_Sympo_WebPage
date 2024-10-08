const Footer = () => {
  return (
    <footer className="bg-cse-main px-3 md:px-10 py-7 md:py-10 text-center -mt-5 md:-mt-3">
      <div className="container">
        <div className="text-white space-y-3">
          <h1 className="text-shadow text-2xl md:text-3xl lg:text-4xl tracking-wide">
            Contact
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-stroke-1-cse-cyan">
            Feel free to Ask!
          </h2>
          <div className="!mt-5 flex flex-col justify-center items-center space-y-3">
            <a
              href="tel:+91 9750795125"
              className="text-shadow font-semibold text-lg md:text-xl lg:text-2xl text-shadow"
            >
              📞 +91 9750795125
            </a>
            <a
              href="tel:+91 9629503642"
              className="text-shadow font-semibold text-lg md:text-xl lg:text-2xl text-shadow"
            >
              📞 +91 9629503642
            </a>
          </div>
        </div>
        <div className="mt-8 text-white">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-shadow">
            Reach Us on
          </h1>

          <div className="mt-6 flex items-center lg:px-72 justify-evenly">
            <div>
              <a
                href="mailto:sparzo.cseofficial@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
                className="flex flex-col justify-center items-center"
              >
                <img
                  src="/Envelope.png"
                  className="lg:w-8 lg:h-8 md:w-7 md:h-7"
                  alt="mail"
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/sparzo_offl/"
                rel="noopener noreferrer"
                target="_blank"
                className="flex flex-col justify-center items-center"
              >
                <img
                  src="/instagram.png"
                  className="lg:w-8 lg:h-8 md:w-7 md:h-7"
                  alt="instagram"
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/school/gcetirunelveli/"
                rel="noopener noreferrer"
                target="_blank"
                className="flex flex-col justify-center items-center"
              >
                <img
                  src="/Linkedin.png"
                  className="lg:w-8 lg:h-8 md:w-7 md:h-7"
                  alt="linkedin"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 text-white">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-shadow">
            Department Of CSE
          </h1>
          <div className="mt-2 flex items-center justify-center space-x-2">
            <div className="text-xl md:text-2xl lg:text-3xl text-shadow flex items-center">
              <img
                src="/crosshair.png"
                alt="Government College Of Engineering"
                className="lg:w-6 lg:h-6 md:w-5 md:h-5 w-4 h-4 mr-3"
              />{" "}
              Government College Of Engineering
            </div>
          </div>
          <h2 className="mt-3 text-lg md:text-xl lg:text-2xl text-shadow">
            Tirunelveli
          </h2>
        </div>
        <div className="mt-6 md:text-lg lg:text-xl text-stroke-0-cse-cyan text-white">
          &copy; 2024 GCE CSE Association | All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
