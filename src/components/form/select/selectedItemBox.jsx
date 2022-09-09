const SelectedItemBox = ({ id, title, removeFromList }) => {
  const removeClickHandler = (id) => {
    removeFromList(id);
  };
  return (
    <>
      <div className="inline-flex justify-center rounded-md border border-transparent bg-slate-200 py-1 px-1.5 text-sm font-medium text-black shadow-sm focus:outline-none focus:ring-2 hover:bg-slate-300 focus:ring-offset-2 my-2 mr-1">
        {title}
        <div
          className="inline-flex justify-center rounded-md border border-transparent py-.5 px-1 ml-1 text-sm font-medium text-red-600 hover:text-red-800 shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer"
          onClick={() => removeClickHandler(id)}
        >
          &times;
        </div>
      </div>
    </>
  );
};

export default SelectedItemBox;
