import { ActivityIndicator, View } from "react-native";

export function Loading() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#09090A",
      }}
    >
      <ActivityIndicator color="#7C3AED" />
    </View>
  );
}
