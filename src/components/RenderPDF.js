import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import doc1 from "../pdf/paper1.pdf";
import doc2 from "../pdf/paper2.pdf";
import doc3 from "../pdf/paper3.pdf";
import doc4 from "../pdf/paper4.pdf";
import doc5 from "../pdf/paper5.pdf";

function RenderPDF(props) {
  const files = { f1: doc1, f2: doc2, f3: doc3, f4: doc4, f5: doc5 };
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const activePageNavStyle =
    "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 rounded my-2 mx-3";
  const disabledPageNavStyle =
    "bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed";

  function onDocumentLoadSuccess({ numPages }) {
    // setPageNumber(1);
    setNumPages(numPages);
    console.log(pageNumber);
  }
  function hasNextPage() {
    return !(pageNumber + 2 > numPages);
  }
  function hasPrevPage() {
    return pageNumber >= 2;
  }
  return (
    <div className="grid place-items-center h-screen">
      <Document
        file={files[`f${props.file}`]}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <div className="grid grid-cols-2">
          <div>
            <Page pageNumber={pageNumber} error="End Of File" />
          </div>
          <div
            className="auto"
            // style={{
            //   margin: "auto",
            //   display: "inline-block",
            //   width: "48%",
            // }}
          >
            <Page pageNumber={pageNumber + 1} error="End Of File" />
          </div>
        </div>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 rounded my-2 mx-3"
          disabled={!hasPrevPage()}
          onClick={() => setPageNumber(pageNumber - 1)}
        >
          Prev page
        </button>
        <button
          disabled={!hasNextPage()}
          className={!hasNextPage() ? disabledPageNavStyle : activePageNavStyle}
          onClick={() => setPageNumber(pageNumber + 1)}
        >
          Next page
        </button>
      </Document>
      <p className="text-sm font-bold text-gray-900">
        Page {pageNumber}-{pageNumber + 1} of {numPages}
      </p>
    </div>
  );
}

export default RenderPDF;
