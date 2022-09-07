import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const BarChart = ({dataInfo}) => {
    const count = (arr, item) => {
        return arr.filter(x => x === item).length;
    }

    const getUniqueLabel = (arry) => {
        const uniqueElements = new Set(arry);
        return uniqueElements
    }

    const getSkills = (list) => {
        return (list.map(item => item.skill))
    }

    const getSkillCount = (dataSet) => {
        return dataSet.map(item => count(getSkills(dataInfo), item))
    }

    const skillLabels = [...getUniqueLabel(getSkills(dataInfo))].map(item => `${item}`)
    const SkillData = {
        labels: skillLabels,
        datasets: [
            {
                label: 'Skills',
                data: getSkillCount([...getUniqueLabel(getSkills(dataInfo))]),
                backgroundColor: `rgba(${Math.floor(Math.random() * 200)}, ${Math.floor(Math.random() * 200)}, ${Math.floor(Math.random() * 200)}, 0.5)`,
            },
        ]
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart Of Skills',
            },
        },
    };


    return (
        <div className='mt-10 py-5 border-t-2 border-zinc-800'>
            <Bar options={options} data={SkillData} />
        </div>
    )
}

export default BarChart