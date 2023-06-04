import React from "react"
import Testing from "../../microfront-end-1/src/Testing";
const MFE1Button = React.lazy(() => import("MFE1/Button"));

function App() {
  return (
    <div>
      <h1>MFE2</h1>
      <div>
        <React.Suspense fallback='Loading Button'>
          <MFE1Button />
        </React.Suspense>
          <Testing />
      </div>
      <h2>MFE2</h2>
    </div>
  );
}

export default App