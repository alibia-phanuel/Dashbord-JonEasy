import { useState } from "react";

const Accordion = () => {
  const [expand, setExpand] = useState(false);
  const toggleExpand = () => setExpand((prevExpand) => !prevExpand);
  console.log(expand);
  return (
    <div className="max-w-[15rem] mb-1">
      <button
        onClick={toggleExpand}
        className="w-full p-[0.5rem] text-[1rem] cursor-pointer border rounded-[5px] flex  justify-between items-center"
      >
        header <span>{expand ? "-" : "+"}</span>
      </button>
      {expand && (
        <div className="p-[0.5rem]  bg-[#f7f7f7]">this is a conetent</div>
      )}
    </div>
  );
};

export default Accordion;
