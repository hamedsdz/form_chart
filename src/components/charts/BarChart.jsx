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
import { count, getUniqueLabel, getLabels } from "../../utils/tools";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ dataInfo }) => {
  const getItemsCount = (bigData, dataSet, label) => {
    return dataSet.map((item) =>
      count([].concat.apply([], getLabels(bigData, label)), item)
    );
  };

  const skillLabels = [
    ...getUniqueLabel(
      [].concat.apply([], [...getUniqueLabel(getLabels(dataInfo, "skill"))])
    ),
  ].map((item) => `${item}`);

  const SkillData = {
    labels: skillLabels,
    datasets: [
      {
        label: "Skills",
        data: getItemsCount(
          dataInfo,
          [
            ...getUniqueLabel(
              [].concat.apply(
                [],
                [
                  ...getUniqueLabel(
                    [].concat.apply([], getLabels(dataInfo, "skill"))
                  ),
                ]
              )
            ),
          ],
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
