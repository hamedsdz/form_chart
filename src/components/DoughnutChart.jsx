import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

const DoughnutChart = ({ dataInfo }) => {
  const count = (arr, item) => {
    return arr.filter((x) => x === item).length;
  };

  const getUniqueLabel = (arr) => {
    const uniqueElements = new Set(arr);
    return uniqueElements;
  };

  const getAges = (list) => {
    return list.map((item) => item.age);
  };

  const getAgeCount = (dataSet) => {
    return dataSet.map((item) => count(getAges(dataInfo), item));
  };

  const generateBackgroundColor = () => {
    return `rgba(${Math.floor(Math.random() * 200)}, ${Math.floor(
      Math.random() * 200
    )}, ${Math.floor(Math.random() * 200)}, 0.5)`;
  };

  const ageLabels = [...getUniqueLabel(getAges(dataInfo))].map(
    (item) => `${item} Years Old`
  );
  const bgList = ageLabels.map((item) => generateBackgroundColor());
  const AgeData = {
    labels: ageLabels,
    datasets: [
      {
        data: getAgeCount([...getUniqueLabel(getAges(dataInfo))]),
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
    <div className="py-5">
      <Doughnut data={AgeData} options={options} />
    </div>
  );
};

export default DoughnutChart;
