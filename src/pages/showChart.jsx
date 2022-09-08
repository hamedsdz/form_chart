import { useState } from "react";

// Components
import DoughnutChart from "../components/charts/DoughnutChart";
import BarChart from "../components/charts/BarChart";
import { Link } from "react-router-dom";

const ShowChart = () => {
  const [dataInfo, setDataInfo] = useState(
    JSON.parse(localStorage.getItem("data"))
  );

  return (
    <div className="bg-slate-300">
      <div className="md:container md:mx-auto py-10 sm:my-0 min-h-screen h-full p-3">
        <div className="flex-row gap-6 ">
          {dataInfo && dataInfo.length > 0 ? (
            <>
              <DoughnutChart dataInfo={dataInfo} />
              <BarChart dataInfo={dataInfo} />
            </>
          ) : (
            <div className="py-20 bg-white text-center">
              <div className="my-6">Can't Make Chart Without Data</div>
            </div>
          )}

          <div className="my-4 md:px-4 sm:px-0 text-right">
            <Link
              to={"/"}
              className="inline-flex justify-center rounded-md border border-transparent bg-rose-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:ring-offset-2"
            >
              Add Info Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowChart;
