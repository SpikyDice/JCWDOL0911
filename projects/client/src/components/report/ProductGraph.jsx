import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import BarChart from "./BarChart";
import { currency } from "../../helpers/currency";
import {
  ascProductReport,
  descProductReport,
} from "../../features/report/reportSlice";

function ProductGraph({ chartSalesReport, dateRange }) {
  const dispatch = useDispatch();
  const { startDate, endDate } = dateRange;
  const productReport = useSelector((state) => state.report.salesReport);
  const [userData, setUserData] = useState({
    labels: chartSalesReport.map((report) => report.name),
    datasets: [
      {
        label: "User Spending Mwahahaha",
        data: chartSalesReport.map((report) => report.purchase),
      },
    ],
  });

  const onChangeSortingHandler = (e) => {
    if (e.target.value === "asc") {
      dispatch(ascProductReport());
    } else if (e.target.value === "desc") {
      dispatch(descProductReport());
    }
  };

  useEffect(() => {
    setUserData({
      labels: chartSalesReport.map((report) => report.name),
      datasets: [
        {
          label: "User Spending Mwahahaha",
          data: chartSalesReport.map((report) => report.purchase),
        },
      ],
    });
  }, [chartSalesReport, productReport]);

  return (
    <div>
      <div className="relative mx-auto sm:h-[350px] h-[300px]">
        <BarChart chartData={userData} />
      </div>
      <div className="w-full text-center mt-4">Product Name</div>
      <hr className="my-4" />
      <div className="my-2 flex sm:flex-row flex-col justify-between sm:gap-10 gap-4 items-center">
        <select
          id="sorting"
          onChange={onChangeSortingHandler}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        >
          <option value="">Sorting by user spending</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <div className="w-full">
          {!startDate && !endDate
            ? "All Time"
            : `From ${startDate} To ${endDate}`}
        </div>
      </div>
      <div className="flex flex-col">
        {productReport.map((report) => {
          return (
            <div className="flex odd:bg-green-100 even:bg-gray-100 sm:flex-row flex-col shadow-xl justify-between bg-red-200 px-4 py-2">
              <div className="font-bold">Product Name : {report.name}</div>
              <div className="flex sm:flex-row flex-col sm:gap-10 gap-2">
                <div>Gross Income : {currency(report.purchase)}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductGraph;
