import { useState } from "react";
const TableAction = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="dropdown relative">
      <a
        onClick={() => setOpen(!open)}
        className="btn border-transparent py-1 text-16 text-gray-500 shadow-none dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        id="dropdownMenu123"
        aria-expanded="false"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m6 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2M6 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"
          />
        </svg>
      </a>
      <ul
        className={`min-w-max absolute bg-white z-50 float-left py-2 list-none text-left -left-5 w-32 rounded-lg shadow-lg  bg-clip-padding border-none  ${
          !open && "hidden"
        }`}
        aria-labelledby="dropdownMenu123"
      >
        <li>
          <a
            className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap   bg-transparent text-gray-700 hover:bg-gray-50/50"
            href="#"
          >
            Edit
          </a>
        </li>
        <li>
          <a
            className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap  
                                                                bg-transparent text-gray-700 hover:bg-gray-50/50"
            href="#"
          >
            Print
          </a>
        </li>
        <li>
          <a
            className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap   bg-transparent
                                                                text-gray-700 hover:bg-gray-50/50"
            href="#"
          >
            Delete
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TableAction;
