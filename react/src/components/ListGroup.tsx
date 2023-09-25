function ListGroup() {
  let items = ["New York", "California", "Florida", "Tokyo"];
  items = [];
  //   if (items.length === 0) {
  //     return (
  //       <>
  //         <h1>List</h1>
  //         <p>No Items</p>
  //       </>
  //     );
  //   }
  //   items.map((item) => {
  //     return <li>{item}</li>;
  //   });
  //   const message = items.length === 0 ? <p>No item found</p> : null;
  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };
  return (
    <>
      <h1>List</h1>
      {getMessage}
      <ul className="list-group">
        {items.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </>
  );
}
export default ListGroup;
