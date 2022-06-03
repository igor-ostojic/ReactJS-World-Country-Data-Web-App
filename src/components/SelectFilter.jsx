import { useState } from "react";

const SelectFilter = ({ setSelectTerm }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={() => setShowMenu(!showMenu)}>
        Filter by Region
        <svg
          className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#202c37"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      {showMenu && (
        <div className="dropdown-content">
          <p href="#" onClick={(e) => setSelectTerm(e.target.innerText)}>
            Africa
          </p>
          <p href="#" onClick={(e) => setSelectTerm(e.target.innerText)}>
            America
          </p>
          <p href="#" onClick={(e) => setSelectTerm(e.target.innerText)}>
            Asia
          </p>
          <p href="#" onClick={(e) => setSelectTerm(e.target.innerText)}>
            Europe
          </p>
          <p href="#" onClick={(e) => setSelectTerm(e.target.innerText)}>
            Oceania
          </p>
        </div>
      )}
    </div>
  );
};

export default SelectFilter;
