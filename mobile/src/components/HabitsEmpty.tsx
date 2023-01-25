import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function HabitsEmpty() {
  const { navigate } = useNavigation();

  return (
    <View>
      <Text className="text-zinc-400 text-base">
        Você ainda não está monitorando nenhum hábito,{" "}
        <Text
          onPress={() => navigate("new")}
          className="text-violet-400 text-base underline active:text-violet-500"
        >
          comece cadastrando um!
        </Text>
      </Text>
    </View>
  );
}
