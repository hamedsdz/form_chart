// Components
import SelectedItemBox from "./selectedItemBox";

const SelectedItemsList = ({ items, removeItemHandler }) => {
  const listUpdateHandler = (index) => {
    removeItemHandler(index);
  };
  return (
    <>
      {items && items.length > 0 ? (
        items.map((item, idx) => (
          <SelectedItemBox
            id={idx}
            key={idx}
            title={item}
            removeFromList={listUpdateHandler}
          />
        ))
      ) : (
        <></>
      )}
    </>
  );
};

export default SelectedItemsList;
