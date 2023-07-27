import Dropdown from "../componenets/Dropdown";
import { useState } from "react";

function DropdownPage() {
  const [Selection, setSelection] = useState(null);

  const handleSelect = (selectedOption) => {
    setSelection(selectedOption);
  };

  const options = [
    { label: "Red", value: "Red" },
    { label: "Green", value: "Green" },
    { label: "Blue", value: "Blue" },
  ];

  return (
    <div className="flex">
      <Dropdown value={Selection} onChange={handleSelect} options={options} />
    </div>
  );
}

export default DropdownPage;
