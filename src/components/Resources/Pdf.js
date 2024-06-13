import React, { useState } from 'react';
import { Button } from './../Resources/PDF/Button';
import { Modal } from './../Resources/PDF/Model';

const Pdf = () => {
  const [modal, setModal] = useState(false);
  const [resume, setResume] = useState(null);
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (pdfUrl, buttonName) => {
    setModal(true);
    setResume(pdfUrl);
    setSelectedButton(buttonName);
  };

  const handleCloseModal = () => {
    setModal(false);
    setSelectedButton(null);
  };

  return (
    <div className="container">
      <Button
        name="Button 1"
        onClick={() => handleButtonClick("https://firebasestorage.googleapis.com/v0/b/website-f2fa5.appspot.com/o/pdf%2FIntroduction_To_Selenium.pdf?alt=media&token=a66279c2-89d1-4409-bc27-2c3122d1437f&_gl=1*k5ipe*_ga*MjEyNzM1NDk3LjE2OTc3MTQ2MTA.*_ga_CW55HF8NVT*MTY5Nzc3MTYxMS41LjEuMTY5Nzc3MTY3NC41OS4wLjA.", "Button 1")}
      /><br></br><br></br>
      <Button
        name="Button 2"
        onClick={() => handleButtonClick("https://firebasestorage.googleapis.com/v0/b/website-f2fa5.appspot.com/o/pdf%2Fsoftware%20processes%20pdf.pdf?alt=media&token=85a9ee82-07e3-4462-89fd-7201873d3b0f&_gl=1*b1tugc*_ga*MjEyNzM1NDk3LjE2OTc3MTQ2MTA.*_ga_CW55HF8NVT*MTY5Nzc3NTU0NC42LjEuMTY5Nzc3NTkwMS41OC4wLjA.", "Button 2")}
      /><br></br><br></br>
      <Button
        name="Button 3"
        onClick={() => handleButtonClick("https://example.com/pdf3.pdf", "Button 3")}
      />
      {modal === true && (
        <Modal resume={resume} onCloseModal={handleCloseModal} selectedButton={selectedButton} />
      )}
    </div>
  );
};

export default Pdf;
