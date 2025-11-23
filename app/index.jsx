import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import logo from "../assets/images/dinetimelogo.png";
const logo = require("../assets/images/dinetimelogo.png");
const entryimage = require("../assets/images/Frame.png");

export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaView className="bg-dark">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="flex m-2 pt-10 justify-center items-center">
          <Image source={logo} style={{ width: 300, height: 300 }} />
          <View className="w-3/4">
            <TouchableOpacity
              onPress={() => router.push("/signup")}
              className="bg-dine-orange p-2 my-2 rounded-lg"
            >
              <Text className="text-xl font-semibold text-center text-black">Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push("/home")}
              className="bg-dark p-2 my-2 border border-dine-orange rounded-lg"
            >
              <Text className="text-xl font-semibold text-dine-orange text-center">
                Guest User
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Fixed divider section: don't nest Views inside Text */}
        <View className="items-center my-4">
          <View className="flex-row items-center w-full justify-center px-6">
            <View className="border-b-2 border-dine-orange w-32 mr-3" />
            <Text className="text-center text-base font-semibold text-white">or</Text>
            <View className="border-b-2 border-dine-orange w-32 ml-3" />
          </View>

          <TouchableOpacity
            className="flex-row items-center mt-4"
            onPress={() => router.push("/signin")}
          >
            <Text className="text-white font-semibold mr-2">Already a User?</Text>
            <Text className="text-base font-semibold underline text-dine-orange">
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex-1">
          <Image source={entryimage} 
          className="h-full w-full"
          resizeMode="contain"/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
