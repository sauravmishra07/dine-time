import { View, Text, Image, Platform, ScrollView, ImageBackground, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import React from 'react'
import { BlurView } from 'expo-blur';
import { SafeAreaView } from 'react-native-safe-area-context'
import { restaurants } from '../../store/restaurants';
const logo = require("../../assets/images/dinetimelogo.png");
const banner = require("../../assets/images/homeBanner.png");
const home = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.85}
      className="bg-[#5f5f5f] max-h-60 max-w-xs rounded-xl p-3 mr-2 shadow-md"
      style={{ justifyContent: "flex-start" }}
    >
      {/* IMAGE */}
      <Image
        source={{ uri: item.image }}
        resizeMode="cover"
        style={{
          width: 270,
          height: 100,
          borderRadius: 10,
          marginBottom: 8,
        }}
      />

      {/* NAME */}
      <Text className="text-dine-orange bg-white font-semibold text-base p-1 rounded-md text-center mb-2">
        {item.name}
      </Text>

      {/* ADDRESS */}
      <View className="flex-row items-start mb-1">
        <Entypo name="location-pin" size={18} color="white" style={{ marginTop: 2, marginRight: 4 }} />
        <Text className="text-white text-sm flex-1 leading-5">
          {item.address.split(", ").slice(0, 3).join(", ")}
          {"\n"}
          {item.address.split(", ").slice(2).join(", ")}
        </Text>
      </View>

      {/* HOURS */}
      <View className="flex-row items-center mt-1">
        <MaterialIcons name="watch-later" size={16} color="white" style={{ marginRight: 4 }} />
        <Text className="text-white text-xs opacity-80">
          Open: {item.opening} - Close: {item.closing}
        </Text>
      </View>
    </TouchableOpacity>
  );
  // Shuffle function
  const shuffleArray = (arr) => {
    return [...arr].sort(() => Math.random() - 0.5);
  };


  return (
    <SafeAreaView style={[{ backgroundColor: "#2b2b2b" },
    Platform.OS == "android" && { paddingBottom: 55 },
    Platform.OS == "ios" && { paddingBottom: 20 }
    ]}>
      <View className="flex items-center mt-5">
        <View className="bg-[#5f5f5f] w-11/12 rounded-lg shadow-lg justify-between p-1 items-center flex-row">
          {/* content */}
          <View className="flex flex-row items-center p-1">
            <Text className={`text-white text-base pt-[${Platform.OS == "ios" ? "pt-[8px]" : "pt-1"}] align-middle h-10`}>
              {" "}
              Welcome to {" "}
            </Text>
            <Image source={logo} className={"w-20 h-12"} resizeMode="cover" />
          </View>
        </View>
      </View>
      <ScrollView stickyHeaderIndices={[0]}>
        <ImageBackground source={banner} className="w-full bg-dark h-52 items-center justify-center" resizeMode="cover" >
          <BlurView intensity={Platform.OS === "android" ? 100 : 40} tint='dark' className="w-full shadow-2xl p-4">
            <Text className="text-center text-white text-3xl font-bold ">
              Dine with us
            </Text>
            <Text className="text-center mt-1 text-dine-orange text-base font-bold " >
              where every meal is a celebration of flavor and togetherness!
            </Text>
          </BlurView>
        </ImageBackground>
        <View className="p-4 bg-dark flex-row items-center">
          <Text className="text-3xl text-white font-bold mr-2">
            Special Discounts for you %
          </Text>
        </View>
        {
          restaurants.length > 0 ? (
            <FlatList
              data={restaurants}
              renderItem={renderItem}
              horizontal
              contentContainerStyle={{ padding: 16 }}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={true}
            />
          ) : (
            <ActivityIndicator animating color={"#fb9b33"} />
          )
        }
        <View className="p-4 bg-dark flex-row items-center">
          <Text className="text-3xl text-white font-bold mr-2">
            Our Resturants
          </Text>
        </View>
        {
          restaurants.length > 0 ? (
            <FlatList
              data={shuffleArray(restaurants)}   // ⬅ shuffled ONLY for this list
              renderItem={renderItem}
              horizontal
              contentContainerStyle={{ padding: 16 }}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={true}
            />
          ) : (
            <ActivityIndicator animating color={"#fb9b33"} />
          )
        }


      </ScrollView>

    </SafeAreaView>
  )
}

export default home