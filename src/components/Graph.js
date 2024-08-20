import { useNavigate } from "react-router-dom";
import { Chart } from "react-google-charts";

import { calculateMedian } from "./utils/pureCalculations";
import { calculateArithmeticMean } from "./utils/pureCalculations";
import { calculateGeometricMean } from "./utils/pureCalculations";
import { calculateHarmonicMean } from "./utils/pureCalculations";

function createRandomColor() {
  const hexColorChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
  let hexColorCode = "#"
  for (let i = 0; i < 6; i++) {
    hexColorCode += hexColorChar[Math.floor(Math.random() * 16)]
  }
  return hexColorCode
}

export default function Graph({ currentDataset }) {
  const navigate = useNavigate()

  const handlePathToHome = () => {
    navigate("/")
  }

  const data = [
    ["Mean", "Calculated means"],
    ["MD", calculateMedian(currentDataset)],
    ["AM", calculateArithmeticMean(currentDataset)],
    ["GM", calculateGeometricMean(currentDataset)],
    ["HM", calculateHarmonicMean(currentDataset)],
  ];

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

  let size
  let screenWidth = window.innerWidth
  window.addEventListener("resize", () => {
    screenWidth = window.innerWidth
    size = screenWidth <= 768 ? "175px" : "250px"
  })

  return (
    <>
      <button onClick={handlePathToHome} className="absolute top-8 left-8 underline">
        back
      </button>
      <div className="w-4/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-md:w-full max-md:p-4">
        <Chart className="h-64 max-md:h-40"
          chartType="Bar"
          width={"100%"}
          height={size}
          data={data}
          options={options}
        />
      </div>
    </>
  )
}