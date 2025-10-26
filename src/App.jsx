import React from "react";
import Home from "./pages/Home";
import BottomNav from './components/BottomNav'; // Make sure to import it

function App() {
  return (
    <div className="App">
      {/* The Header is already inside the Home page, so we don't need it here */}
      <main className="pb-16"> {/* The pb-16 is important! */}
        {/* 
          For a single-page view, rendering Home directly is fine.
          If you add more pages, you'll want to use React Router here.
        */}
        <Home />
      </main>
      <BottomNav /> {/* Ensure this is present */}
    </div>
  );
}

export default App;
