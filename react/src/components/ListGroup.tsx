import { useState } from "react";

interface Props {
  items: string[];
  head: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, head, onSelectItem }: Props) {
  const [selectedIndex, setselectedIndex] = useState(-1);

  //   items = [];
  //   if (items.length === 0) {
  //     return (
  //       <>
  //         <h1>List</h1>
  //         <p>No Items</p>
  //       </>
  //     );
  //   }
  //   items.map((item) => {
  //     return <li>{sitem}</li>;
  //   });
  //   const message = items.length === 0 ? <p>No item found</p> : null;
  //   const getMessage = () => {
  //     return items.length === 0 ? <p>No item found</p> : null;
  //   };

  return (
    <>
      <h1>{head}</h1>
      {/* {getMessage}   */}
      {/* {
      items.length === 0 ? <p>No item found</p> : null
      
      } */}
      {items.length === 0 && <p>No item found</p>}

      <ul className="list-group">
        {items.map((item, index) => {
          return (
            <li
              className={
                selectedIndex == index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                setselectedIndex(index);
                onSelectItem(item);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default ListGroup;
