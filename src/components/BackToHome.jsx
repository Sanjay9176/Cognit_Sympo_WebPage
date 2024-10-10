import { Link } from "react-router-dom";

const BackToHome = () => {
  return (
    <div className="flex items-center justify-center">
      <Link to="/">
        <button className="font-bold px-4 py-2.5 md:px-6 md:py-3 text-white md:text-lg border border-cse-cyan hover:bg-cse-violet transition-all hover:transition-all rounded-lg text-shadow shadow-glow-hover flex justify-center items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-white mr-1"
            >
              <path d="m7.85 13l2.85 2.85q.3.3.288.7t-.288.7q-.3.3-.712.313t-.713-.288L4.7 12.7q-.3-.3-.3-.7t.3-.7l4.575-4.575q.3-.3.713-.287t.712.312q.275.3.288.7t-.288.7L7.85 11H19q.425 0 .713.288T20 12t-.288.713T19 13z"></path>
            </svg>
          </span>
          Back to Events
        </button>
      </Link>
    </div>
  );
};

export default BackToHome;
