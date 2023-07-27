// import Table from "../componenets/Table";
import SortedTable from "../componenets/SortedTable";

function TablePage() {
  const data = [
    { name: "Apple", color: "bg-red-500", score: 5 },
    { name: "Banana", color: "bg-yellow-500", score: 3 },
    { name: "Orange", color: "bg-orange-500", score: 4 },
    { name: "Lime", color: "bg-green-500", score: 1 },
  ];

  const config = [
    {
      label: "Name",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Colors",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  return (
    <div>
      <SortedTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
