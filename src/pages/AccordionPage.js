import Accordian from "../componenets/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "fnvlkj",
      label: "Can we use React in a Project",
      content:
        "Yes You can use React in Your projects whenever you want.Yes You can use React in Your projects whenever you want.Yes You can use React in Your projects whenever you want.Yes You can use React in Your projects whenever you want.Yes You can use React in Your projects whenever you want.",
    },
    {
      id: "nfvrw",
      label: "Can we use JavaScript in a Project",
      content:
        "Yes You can use React in Your projects whenever you want.Yes You can use React in Your projects whenever you want.Yes You can use React in Your projects whenever you want.Yes You can use React in Your projects whenever you want.Yes You can use React in Your projects whenever you want.",
    },
    {
      id: "cmlksdnf",
      label: "Can we use CSS in a Project",
      content:
        "Yes You can use React in Your projects whenever you want.Yes You can use React in Your projects whenever you want.Yes You can use React in Your projects whenever you want.Yes You can use React in Your projects whenever you want.Yes You can use React in Your projects whenever you want.",
    },
  ];

  return <Accordian items={items} />;
}

export default AccordionPage;
