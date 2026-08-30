import { Aboutus } from "./Aboutus/Aboutus";
import "./App.css";
import { Contactme } from "./Contactme/Contactme";
import Header from "./Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Services } from "./Services/Services";
import { Clients } from "./Clients/Clients";
import { Contact } from "./Contact/Contact";
import ScrollToTop from "./ScrollToTop";
import { Policy } from "./Policy/Policy";
import { NotFound } from "./NotFound/NotFound";
function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Header />}></Route>
          <Route path="/aboutus" element={<Aboutus />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/clients" element={<Clients />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/policy" element={<Policy />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Contactme />
      </BrowserRouter>
    </div>
  );
}

export default App;
