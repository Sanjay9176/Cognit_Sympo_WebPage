const RegisterBtn = () => {
  return (
    <div className="">
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScgulYk7h3hglD8-vO8EpvtcKXMeSVwvIvvpNHNZGRLksDFuA/viewform?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="font-bold px-4 py-2.5 md:px-6 md:py-3 text-white md:text-lg border border-cse-cyan hover:bg-cse-violet transition-all hover:transition-all rounded-lg text-shadow shadow-glow-hover flex justify-center items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 16 16"
              className="fill-current text-white mr-1"
            >
              <g fill="currentColor">
                <path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69z"></path>
                <path d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25z"></path>
              </g>
            </svg>
          </span>
          Register Now
        </button>
      </a>
    </div>
  );
};

export default RegisterBtn;
