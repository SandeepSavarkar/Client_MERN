import React, { Suspense } from "react";
import Routing from "./router";

function App() {
  return (
    <Suspense fallback={<h1>...loading</h1>}>
      <Routing/>
    </Suspense>
  );
}

export default App;
