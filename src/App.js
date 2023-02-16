import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle
} from "mdb-react-ui-kit";
import Login from "./components/common/Login";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import "../public/css/App.css";
export default function App() {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <div>
      <Header />

      <Footer />
    </div>
  );
}
