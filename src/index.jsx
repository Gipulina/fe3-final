import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRoute>
      <GlobalContextProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dentist/:id" element={<Detail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favs" element={<Favs />} />
        </Routes>
      </GlobalContextProvider>
    </BrowserRoute>
  </React.StrictMode>
);


