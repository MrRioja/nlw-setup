import Lottie from "lottie-react-native";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function HabitsEmpty() {
  const { navigate } = useNavigation();

  return (
    <View className="flex flex-col items-center">
      <Lottie
        loop
        autoPlay
        style={{ width: "100%" }}
        source={require("../assets/empty-animation.json")}
      />

      <Text className="text-zinc-400 text-base text-center">
        Você ainda não está monitorando nenhum hábito.
      </Text>

      <Text
        onPress={() => navigate("new")}
        className="mt-5 text-violet-400 text-base underline active:text-violet-500"
      >
        Cadastre um novo hábito
      </Text>
    </View>
  );
}
