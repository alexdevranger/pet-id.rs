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
    <div>
      <div style={{ width: "100%" }}>
        <div id="uplatnica" className="clearfix">
          <div id="levo">
            <div id="uplatnicanaslov">uplatilac</div>
            <div id="uplatilac">
              <span style={{ fontSize: "16px", marginLeft: "10px" }}>
                Vaše ime i adresa
              </span>
            </div>
            <div id="svrhauplatenaslov">svrha uplate</div>
            <div id="svrhauplate">
              <span style={{ marginLeft: "10px", fontSize: "16px" }}>
                547286{" "}
              </span>
            </div>
            <div id="primalacnaslov">primalac</div>
            <div
              id="primalac"
              style={{
                paddingLeft: "10px",
              }}
            >
              <span
                style={{
                  fontSize: "16px",
                }}
              >
                ID PROTECT PR KNJAŽEVAC
                <br />
                Branka Radičevića 14
              </span>
            </div>
          </div>
          <div id="desno">
            <div id="naslov">nalog za uplatu</div>

            <div id="desnakolona">
              <div id="kolonaiznos">
                <div id="kolonaiznosnaslov">
                  <div id="sifraplacanjanaslov">šifra plaćanja</div>
                  <div id="valutanaslov">valuta</div>
                  <div id="iznosnaslov">iznos</div>
                </div>
                <div id="kolonaiznosunos">
                  <div id="sifraplacanjaunos" style={{ paddingLeft: "4px" }}>
                    289
                  </div>
                  <div id="valutaunos">RSD </div>
                  <div id="iznosunos" style={{ paddingLeft: "10px" }}>
                    1.600,00{" "}
                  </div>
                </div>
              </div>
              <div id="racunprimaoca">
                <div id="racunprimaocanaslov">račun primaoca</div>
                <div id="racunprimaocaunos" style={{ paddingLeft: "10px" }}>
                  265-1100310081703-59{" "}
                </div>
              </div>
              <div id="modelipozivnabr">
                <div id="modelipozivbrnaslov">model i poziv na broj</div>
                <div id="modelipozivunos">
                  <div id="modelunos"> </div>
                  <div id="pozivbrunos" style={{ paddingLeft: "10px" }}>
                    547286{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="footer">
            <div id="pecatpotpis">pečat i potpis uplatioca</div>
            <div id="mestounos"></div>
            <div id="mestodatum">mesto i datum prijema</div>
            <div id="datumvalute">datum valute</div>
          </div>
        </div>
      </div>
      <div className="h-[150px]"></div>
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
