import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { files } from "../../store/slices/FilesSlice";
import { files1 } from "../../store/slices";
function Search() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(files());
  }, []);
  const [searchValue, setSearchValue] = useState("");
  const filesRes = useSelector((state) => state.files.dataFiles);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };
  let filteredFiles = filesRes;
  if (searchValue) {
    filteredFiles = filesRes.filter((file) => file.Name.toLowerCase().includes(searchValue.toLowerCase()));
  }
  return (
    <>
      <div className="mt-1 text-right">
        <input type="text" placeholder="Search by name" className="search mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" value={searchValue} onChange={handleSearch} />
      </div>
    </>
  );
}

export default Search;
