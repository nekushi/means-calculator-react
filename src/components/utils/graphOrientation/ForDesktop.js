import { Chart } from "react-google-charts";
import { createRandomColor } from "../../Graph";

export default function ForDesktopGraph({ data }) {
    const options = {
        chart: {
            title: "Calculating means",
            subtitle: "Means of the given data set",
        },
        colors: [createRandomColor()],
        hAxis: {
            title: "Total Population",
            minValue: 100,
        },
        vAxis: {
            title: "Mean",
        },
        bars: "horizontal",
        axes: {
            y: {
                0: { side: "center" },
            },
        },
    };

    return (
        <>
            <Chart className="h-64 max-md:h-40"
                chartType="Bar"
                width={"100%"}
                height={"250px"}
                data={data}
                options={options}
            />
        </>
    )
}