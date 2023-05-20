import React, { useEffect } from "react";
import AllItems from "../allitems/AllItems";
import Categories from "../categories/Categories";
import { FiSettings } from "react-icons/fi";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";

import { cate } from "../../store/slices/CategorySlice";

import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cate());
  }, []);
  const categories = useSelector((state) => state.categories.dataCategories);
  return (
    <>
      <div className="flex">
        <div className="">
          <Sidebar />
        </div>
        <div className="w-full">
          <Navbar />
          <div className="all-items h-96 pt-4">
            <div className="grid grid-rows-2 grid-flow-col gap-4 mainallitemdiv">
              <div className="row-span-3 col-span-1  d-flex px-6">
                <div className="w-full flex mb-4">
                  CATEGORIES <FiSettings className="mt-1 ml-4" />
                </div>
                <Categories categories={categories} />
              </div>
              <div className="row-span-3 col-span-4 pr-12">
                <AllItems />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
