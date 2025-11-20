import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View className=""
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-purple-700 h-10 bg-gray-300"> Home page </Text>
      <TouchableOpacity onPress={() => router.push("/home")}>
        <Text> change route</Text>      
      </TouchableOpacity>
    </View>
  );
}
