import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import doc1 from "../pdf/paper1.pdf";
import doc2 from "../pdf/paper2.pdf";
import doc3 from "../pdf/paper3.pdf";

function RenderPDF(props) {
  const files = { f1: doc1, f2: doc2, f3: doc3 };
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    console.log("Total Pages" + numPages);
  }
  function hasNextPage() {
    return !(pageNumber + 2 > numPages);
  }
  function hasPrevPage() {
    return pageNumber >= 2;
  }
  return (
    <div>
      <Document
        file={files[`f${props.file}`]}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <div style={{ margin: "auto", width: "70%" }}>
          <div
            style={{
              margin: "auto",
              display: "inline-block",
              width: "48%",
              border: "1px solid black",
            }}
          >
            <Page pageNumber={pageNumber} />
          </div>
          <div
            style={{
              margin: "auto",
              display: "inline-block",
              width: "48%",
              border: "1px solid black",
            }}
          >
            <Page pageNumber={pageNumber + 1} />
          </div>
        </div>

        <button
          disabled={!hasNextPage()}
          onClick={() => setPageNumber(pageNumber + 1)}
        >
          Next page
        </button>
        <button
          disabled={!hasPrevPage()}
          onClick={() => setPageNumber(pageNumber - 1)}
        >
          Prev page
        </button>
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

export default RenderPDF;
