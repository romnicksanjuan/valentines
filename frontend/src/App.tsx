import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Us from "./components/Us";
import Message from "./components/Message";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/us" element={<Us />} />
          <Route path="/message" element={<Message />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
