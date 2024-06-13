import React, { useState } from 'react';
import { Button } from './PDF/Button';
import { Modal } from './PDF/Model';

const Resource1 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [resume, setResume] = useState(null);
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (pdfUrl, buttonName) => {
    if (modalOpen) {
      // Close the PDF
      setModalOpen(false);
      setResume(null);
      setSelectedButton(null);
    } else {
      // Open the PDF
      setModalOpen(true);
      setResume(pdfUrl);
      setSelectedButton(buttonName);
    }
  };

  const button1Label = "PDF 1";
  const button2Label = "PDF 2";

  return (
    <div>
      <section className="resource section" id="resource">
        <h2 className="section__title">Resource</h2>
        <div className="resource__container container grid">
          <div className="resource__content">
            <h3 className="resource__title">Learn with me</h3>
            <div className="container">
              <Button
                name={selectedButton === button1Label ? 'Close' : button1Label}
                onClick={() =>
                  handleButtonClick(
                    'https://firebasestorage.googleapis.com/v0/b/website-f2fa5.appspot.com/o/pdf%2FIntroduction_To_Selenium.pdf?alt=media&token=a66279c2-89d1-4409-bc27-2c3122d1437f&_gl=1*k5ipe*_ga*MjEyNzM1NDk7Y*&gl*KZnGv8dlvnE%2Fmrdzvq2X%2FutK7HHslpg%3Fbim%3F.%2A_ga_CW55HF8NVT*MTY5Nzc3MTYxMS41LjEuMTY5Nzc3MTY3NC41OS4wLjA.'
                  , button1Label)
                }
              />
              {selectedButton === button1Label && <Modal resume={resume} onCloseModal={() => setModalOpen(false)} />}
              <br />
              <br />
              <br />
              <Button
                name={selectedButton === button2Label ? 'Close' : button2Label}
                onClick={() =>
                  handleButtonClick(
                    'https://firebasestorage.googleapis.com/v0/b/website-f2fa5.appspot.com/o/pdf%2Fsoftware%20processes%20pdf.pdf?alt=media&token=85a9ee82-07e3-4462-89fd-7201873d3b0f&_gl=1*b1tugc*_ga*MjEyNzM1NDk7Y*&gl*91QVQMKo0VH%2FzyfG%2BrXKBvD7Y4f1gET%3Fbim%3F.%2A_ga_CW55HF8NVT*MTY5Nzc3NTU0NC42LjEuMTY5Nzc3NTkwMS41OC4wLjA.'
                  , button2Label)
                }
              />
              {selectedButton === button2Label && <Modal resume={resume} onCloseModal={() => setModalOpen(false)} />}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resource1;
