import { useNavigate } from "react-router-dom";

import { calculateMedian } from "./utils/pureCalculations";
import { calculateArithmeticMean } from "./utils/pureCalculations";
import { calculateGeometricMean } from "./utils/pureCalculations";
import { calculateHarmonicMean } from "./utils/pureCalculations";

import ForDesktopGraph from "./utils/graphOrientation/ForDesktop";
import ForMobileGraph from "./utils/graphOrientation/ForMobile";

export function createRandomColor() {
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

  let screenWidth = window.innerWidth
  window.addEventListener("resize", () => {
    screenWidth = window.innerWidth
    console.log(screenWidth);
  })

  return (
    <>
      <button onClick={handlePathToHome} className="absolute top-8 left-8 underline">
        back
      </button>
      <div className="w-4/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-md:w-full max-md:p-4">
        {screenWidth <= 768 ? (
          <ForMobileGraph data={data} />
        ) : (
          <ForDesktopGraph data={data} />
        )}
      </div>
    </>
  )
}