import clsx from "clsx";
import dayjs from "dayjs";
import {
  Dimensions,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { generateProgressPercentage } from "../utils/generate-progress-percentage";

const WEEK_DAYS = 7;
const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5;

export const DAY_MARGIN_BETWEEN = 8;
export const DAY_SIZE =
  Dimensions.get("screen").width / WEEK_DAYS - (SCREEN_HORIZONTAL_PADDING + 5);

interface Props extends TouchableOpacityProps {
  date: Date;
  amountOfHabits?: number;
  amountCompleted?: number;
}

export function HabitDay({
  date,
  amountOfHabits = 0,
  amountCompleted = 0,
  ...rest
}: Props) {
  const amountAccomplishedPercentage =
    amountOfHabits > 0
      ? generateProgressPercentage(amountCompleted, amountOfHabits)
      : 0;

  const today = dayjs().startOf("day").toDate();
  const isCurrentDay = dayjs(date).isSame(today);

  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.7}
      style={{ width: DAY_SIZE, height: DAY_SIZE }}
      className={clsx("rounded-lg border-2 m-1", {
        ["bg-zinc-900  border-zinc-800"]: amountAccomplishedPercentage === 0,
        ["bg-violet-900  border-violet-700"]:
          amountAccomplishedPercentage > 0 && amountAccomplishedPercentage < 20,
        ["bg-violet-800  border-violet-600"]:
          amountAccomplishedPercentage >= 20 &&
          amountAccomplishedPercentage < 40,
        ["bg-violet-700  border-violet-500"]:
          amountAccomplishedPercentage >= 40 &&
          amountAccomplishedPercentage < 60,
        ["bg-violet-600  border-violet-500"]:
          amountAccomplishedPercentage >= 60 &&
          amountAccomplishedPercentage < 80,
        ["bg-violet-500  border-violet-400"]: amountAccomplishedPercentage > 80,
        ["border-white border-4"]: isCurrentDay,
      })}
    />
  );
}
