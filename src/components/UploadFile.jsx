import React, { useRef } from "react";
import { BsFiletypeXls, BsFiletypeXlsx } from "react-icons/bs";
import { FaFileCsv } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
// import Button from "./Button";
import Link from "next/link";

const UploadFile = ({ file, setFile }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const uploadedFile = e.dataTransfer.files[0];
    setFile(uploadedFile);
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleDeleteFile = (e) => {
    e.stopPropagation();
    setFile(null);
  };

  return (
    <div className="w-full flex flex-col  justify-center">
      <div className="flex flex-col w-full items-center justify-center  pb-5 px-6">
        {file ? (
          <div
            className="flex items-center justify-center w-full sm:w-[472px] h-[80px] border-2 border-[#cbd5e1] border-dotted rounded-[2px] cursor-pointer bg-[#FFF5FB]"
            onClick={triggerFileInput}
          >
            <div className="mt-4 flex  gap-5 items-center justify-between p-5">
              <div className="flex flex-col items-center gap-5">
                {file.type ===
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ? (
                  <BsFiletypeXlsx className="text-green-600 text-5xl" />
                ) : file.type === "application/vnd.ms-excel" ? (
                  <BsFiletypeXls className="text-5xl" />
                ) : file.type === "text/csv" ? (
                  <FaFileCsv className="text-5xl" />
                ) : (
                  <div className="text-red-600">Unsupported file type</div>
                )}
              </div>
              <div className="flex">
                <p>{file.name}</p>
                <button
                  type="button"
                  onClick={handleDeleteFile}
                  className="text-red-600"
                >
                  <MdDelete />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center w-full pt-5 px-5">
            <label
              htmlFor="file-upload"
              className="flex flex-col items-center justify-center w-full sm:w-[472px] h-[96px] border-2 border-[#cbd5e1] border-dotted rounded-[2px] cursor-pointer bg-[#FFF5FB]"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <div className="flex items-center justify-center pt-14 pb-14">
                <FiUpload size={32} className="text-gray-500 mb-4" />

                <button
                  type="button"
                  variant="primary"
                  className="text-sm w-28 font-semibold py-6 mt-2 "
                  onClick={() => document.getElementById("file-upload").click()}
                >
                  Upload File
                </button>
                <p className="text-[9px] text-gray-500 mt-3">
                  Supported file: CSV, XLSX up to 100 MB
                </p>
              </div>
            </label>
          </div>
        )}
        <input
          id="file-upload"
          type="file"
          accept=".csv, .xlsx"
          className="hidden"
          onChange={handleFileChange}
          ref={fileInputRef}
        />
      </div>
    </div>
  );
};

export default UploadFile;
