import OderIcon from "@/lib/svg/OderIcon";
import PayIcon from "@/lib/svg/PayIcon";
import ReturnIcon from "@/lib/svg/ReturnIcon";
import UserIcon from "@/lib/svg/UserIcon";
import { FaqListItem } from "@/lib/types/types";

export const FaqList: FaqListItem[] = [
  {
    Question: "Question1",
    Answer: "Answer1",
    Icon: <UserIcon />,
  },
  {
    Question: "Question2",
    Answer: "Answer2",
    Icon: <PayIcon />,
  },
  {
    Question: "Question3",
    Answer: "Answer3",
    Icon: <OderIcon />,
  },
  {
    Question: "Question4",
    Answer: "Answer4",
    Icon: <ReturnIcon />,
  },
];
