import React, { useState } from 'react';

const Certificate = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificateLinks = [
    "https://www.udemy.com/certificate/UC-026dadb1-1490-4105-a02e-ac7945b95fca/",
    "https://example.com/certificate2.pdf",
    "https://example.com/certificate3.pdf",
    "https://example.com/certificate4.pdf",
    "https://example.com/certificate5.pdf",
    "https://example.com/certificate6.pdf",
    "https://example.com/certificate7.pdf",
    "https://example.com/certificate8.pdf",
  ];

  return (
    <div className="p-4 bg-black min-h-screen text-white">
      <h2 className="text-3xl text-center mb-6 font-bold text-blue-400">My Certificates</h2>
      
      <div className="flex flex-wrap justify-center gap-6">
        {certificateLinks.map((link, index) => (
          <div key={index} className="flex flex-col items-center w-full md:w-[45%] bg-gray-900 p-4 rounded-xl border border-gray-700">
            <iframe
              src={link}
              title={`Certificate ${index + 1}`}
              className="w-full h-64 rounded mb-4"
            ></iframe>
            <button
              onClick={() => setSelectedCert(link)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold"
            >
              View Certificate
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCert && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-[90%] md:w-[80%] h-[80%] bg-gray-950 p-4 rounded-xl">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-2 right-4 text-white text-xl hover:text-red-500"
            >
              ✕
            </button>
            <iframe
              src={selectedCert}
              className="w-full h-full rounded"
              title="Full Certificate View"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificate;
