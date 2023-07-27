import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [IsOpen, setIsOpen] = useState(false);

  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!IsOpen);
  };

  const handleOptionClick = (selectedOption) => {
    // close Dropdown
    setIsOpen(false);
    //  Option that user clicked on
    onChange(selectedOption);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => {
          handleOptionClick(option);
        }}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <GoChevronDown className="text-lg" />
      </Panel>
      {IsOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
