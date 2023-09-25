// import ListGroup from "./components/ListGroup";

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

// function App() {
//   let items = ["New York", "California", "Florida", "Tokyo"];
//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };
//   return (
//     <div>
//       <ListGroup items={items} head="cities" onSelectItem={handleSelectItem} />
//     </div>
//   );
// }

function App() {
  const [visible, setvisible] = useState(false);
  return (
    <div>
      {visible && (
        <Alert>
          This is a simple alert <span>message!</span>
        </Alert>
      )}
      <Button color="secondary" onClick={() => setvisible(true)}>
        My button
      </Button>
    </div>
  );
}

export default App;
