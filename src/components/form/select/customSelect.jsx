// Modules
import { useEffect, useState } from "react";

// Components
import SelectedItemsList from "./selectedItemsList";

const CustomSelect = ({
  templateList,
  id,
  title,
  addNewHandler,
  currentData,
  removeItemHandler,
}) => {
  const [items, setItems] = useState(templateList);

  const removeHandler = (index) => {
    removeItemHandler(index);
    updateListHandler();
  };

  const addHandler = (e) => {
    addNewHandler(e);
    updateListHandler();
  };

  const updateListHandler = () => {
    let newData = items;
    currentData.forEach((item) => {
      if (items.indexOf(item) !== -1) {
        newData.splice(items.indexOf(item), 1);
      }
    });
    setItems(newData);
  };

  useEffect(() => {
    let newData = templateList;
    currentData.forEach((item) => {
      if (newData.indexOf(item) !== -1) {
        newData.splice(newData.indexOf(item), 1);
      }
    });
    setItems(newData);
  }, [currentData, templateList]);

  return (
    <>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {title}
      </label>
      <select
        id={id}
        name={id}
        autoComplete={id}
        className="mt-1 block w-full bg-slate-200 rounded-md border border-gray-300 py-1 px-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        onChange={(e) => addHandler(e)}
        value=""
      >
        <option></option>
        {items.map((item, idx) => (
          <option value={item} key={idx}>
            {item}
          </option>
        ))}
      </select>
      <div className="selected">
        <SelectedItemsList
          items={currentData}
          removeItemHandler={removeHandler}
        />
      </div>
    </>
  );
};

export default CustomSelect;
