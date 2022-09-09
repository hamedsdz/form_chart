import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Utils
import {
  getUniqueLabel,
  getLabelCount,
  getLabels,
  generateBackgroundColor,
} from "../../utils/tools";

ChartJS.register(ArcElement, Tooltip);

const DoughnutChart = ({ dataInfo }) => {
  const ageLabels = [...getUniqueLabel(getLabels(dataInfo, "age"))].map(
    (item) => `${item} Years Old`
  );

  const bgList = ageLabels.map((item) => generateBackgroundColor());
  const AgeData = {
    labels: ageLabels,
    datasets: [
      {
        data: getLabelCount(
          dataInfo,
          [...getUniqueLabel(getLabels(dataInfo, "age"))],
          "age"
        ),
        backgroundColor: bgList,
        borderColor: bgList,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart Of Ages",
      },
    },
  };

  return (
    <div className="py-5 max-w-xl w-full">
      <Doughnut data={AgeData} options={options} />
    </div>
  );
};

export default DoughnutChart;
