import "./App.css";
import { Button, Typography } from "@mui/material";
import { useState } from "react";
function App() {
  var [count, setCount] = useState(0);
  return (
    <>
      <div>
        <Typography id="header" variant="h1">
          Counter
        </Typography>
        <br />
        <br />
        <Typography id="counter" variant="h2">
          {count}
        </Typography>
        <br />
        <br />
        <Button
          onClick={() => {
            setCount(--count);
          }}
          id="btminus"
          variant="contained"
        >
          _
        </Button>
        <Button
          onClick={() => {
            setCount(0);
          }}
          id="btreset"
          variant="contained"
        >
          Reset
        </Button>
        <Button
          onClick={() => {
            setCount(++count);
          }}
          id="btplus"
          variant="contained"
        >
          +
        </Button>
      </div>
    </>
  );
}

export default App;
