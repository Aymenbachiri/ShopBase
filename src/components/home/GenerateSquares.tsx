import { shuffle } from "./Shuffle";
import { SquareData } from "./SquareData";
import { motion } from "framer-motion";

export const generateSquares = () => {
  return shuffle(SquareData).map((sq: any) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};
