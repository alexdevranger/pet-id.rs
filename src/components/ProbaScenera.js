import React, { useState, useRef, useEffect } from "react";
//import QrReader from "react-qr-reader";
import QRReader from "modern-react-qr-reader";

function ProbaScenera() {
  const [qrData, setQrData] = useState("");
  const [showScanner, setShowScanner] = useState(false);
  const scannerRef = useRef(null);

  useEffect(() => {
    if (showScanner && scannerRef.current) {
      scannerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showScanner]);

  const handleScan = (data) => {
    if (data) {
      setQrData(data);
      setShowScanner(false);
    }
  };

  const handleError = (err) => {
    alert(err);
  };

  return (
    <div className="h-screen pt-[600px]">
      <h1>QR Code Scanner</h1>
      <input
        type="text"
        value={qrData}
        onChange={(e) => setQrData(e.target.value)}
        className="border border-gray-300 px-4 py-2 rounded"
        placeholder="Scan QR code"
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          setShowScanner(!showScanner);
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded ml-4"
      >
        {showScanner ? "Close Scanner" : "Open Scanner"}
      </button>

      {showScanner && (
        <div className="mt-4" ref={scannerRef}>
          <QRReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: "100%" }}
            facingMode="environment" // Use the rear camera on mobile devices
          />
        </div>
      )}
    </div>
  );
}

export default ProbaScenera;
