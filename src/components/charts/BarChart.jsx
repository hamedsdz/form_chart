import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// Utils
import {
  getUniqueLabel,
  getLabelCount,
  getLabels,
  generateBackgroundColor,
} from "../../utils/tools";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ dataInfo }) => {
  const skillLabels = [...getUniqueLabel(getLabels(dataInfo, "skill"))].map(
    (item) => `${item}`
  );

  const SkillData = {
    labels: skillLabels,
    datasets: [
      {
        label: "Skills",
        data: getLabelCount(
          dataInfo,
          [...getUniqueLabel(getLabels(dataInfo, "skill"))],
          "skill"
        ),
        backgroundColor: `rgba(${Math.floor(Math.random() * 200)}, ${Math.floor(
          Math.random() * 200
        )}, ${Math.floor(Math.random() * 200)}, 0.5)`,
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
        text: "Chart Of Skills",
      },
    },
  };

  return (
    <div className="mt-10 py-5 border-t-2 border-zinc-800">
      <Bar options={options} data={SkillData} />
    </div>
  );
};

export default BarChart;
