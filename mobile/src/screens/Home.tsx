import { ScrollView, Text, View } from "react-native";

import { Header } from "../components/Header";
import { DAY_SIZE, HabitDay } from "../components/HabitDay";
import { generateDatesFromYearBegging } from "../utils/generate-dates-from-year-begging";

const minimumSummaryDatesSizes = 18 * 5;
const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
const datesFromYearStart = generateDatesFromYearBegging();
const amountOfDaysToFill = minimumSummaryDatesSizes - datesFromYearStart.length;

export function Home() {
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />

      <View className="flex-row mt-6 mb-2">
        {weekDays.map((weekDay, index) => {
          return (
            <Text
              key={`${weekDay}-${index}`}
              style={{ width: DAY_SIZE }}
              className="text-zinc-400 text-xl font-bold text-center mx-1"
            >
              {weekDay}
            </Text>
          );
        })}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className="flex-row flex-wrap">
          {datesFromYearStart.map((date) => (
            <HabitDay key={date.toISOString()} />
          ))}

          {amountOfDaysToFill > 0 &&
            Array.from({ length: amountOfDaysToFill }).map((_, index) => (
              <View
                key={index}
                style={{ width: DAY_SIZE, height: DAY_SIZE }}
                className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
              />
            ))}
        </View>
      </ScrollView>
    </View>
  );
}
