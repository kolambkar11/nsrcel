import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./allitems.css";
import Item from "../item/Item";
import ItemHeading from "../itemheading/ItemHeading";
import { files } from "../../store/slices/FilesSlice";

function AllItems() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(files());
  }, []);

  const filesRes = useSelector((state) => state.files.dataFiles);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  let filteredFiles = filesRes;
  if (searchValue) {
    filteredFiles = filesRes.filter((file) => file.Name.toLowerCase().includes(searchValue.toLowerCase()));
  }

  return (
    <>
      <div className="grid grid-rows-2 grid-flow-col gap-4 alit ">
        <div className="row-span-3 col-span-4 p-4 allitmes-div">
          <div className="bg-white">
            All Items
            <div className="overflow-x-auto">
              <div className="mt-1 text-right searchbar-allitems">
                <input type="text" placeholder="Search by name" className="search mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" value={searchValue} onChange={handleSearch} />
              </div>
              <table className="table-auto w-full">
                <ItemHeading />
                <tbody>{filteredFiles && filteredFiles.map((file) => <Item key={file.id} file={file} />)}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllItems;
