  import React from 'react';
  import { Worker } from '@react-pdf-viewer/core';
  import { Viewer } from '@react-pdf-viewer/core';
  import '@react-pdf-viewer/core/lib/styles/index.css';
  import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
  import '@react-pdf-viewer/default-layout/lib/styles/index.css';
  import './CustomPDFViewer.css'; // Create a custom CSS file for styling


  export const Modal = ({ resume, onCloseModal }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
      <div className='backshadow'>
        <div className='custom-modal'>
          <div className='delete-icon' onClick={onCloseModal}></div>
          <div className="pdf-container" style={{ overflow: 'auto', height: '400px' }}>
            {resume !== null && (
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              <Viewer fileUrl={resume} plugins={[defaultLayoutPluginInstance]} readOnly={true}/>

              </Worker>
            )}
          </div>
        </div>
      </div>
    );
  };
