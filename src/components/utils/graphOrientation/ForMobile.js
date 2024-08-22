import { Chart } from "react-google-charts";
import { createRandomColor } from "../../Graph";

export default function ForMobileGraph({ data }) {
    const options = {
        chart: {
            title: "Calculating means",
            subtitle: "Means of the given data set",
        },
        colors: [(createRandomColor())]
    };

    return (
        <Chart
            chartType="Bar"
            width="100%"
            height="400px"
            data={data}
            options={options}
        />
    );
}
