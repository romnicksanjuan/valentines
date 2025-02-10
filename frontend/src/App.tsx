import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Us from "./components/Us";
import Message from "./components/Message";
import Pin from "./components/Pin";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/us" element={<Us />} />
          <Route path="/message" element={<Message />} />
          <Route path="/" element={<Pin />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
