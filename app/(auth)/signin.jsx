import { View, Text, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from 'expo-router';
import { Formik } from 'formik';
import validationSchema from '../../utils/authSchema';

const logo = require("../../assets/images/dinetimelogo.png");
const entryimage = require("../../assets/images/Frame.png");

const Signin = () => {
  const router = useRouter();

  const handelSignin = () => { };

  return (
    <SafeAreaView className="bg-dark height-full" screenOptions={{ animation: 'slide_from_right' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

        {/* Header */}
        <View className="flex m-2 pt-3 justify-center items-center">
          <Image source={logo} style={{ width: 250, height: 245 }} />
          <Text className="text-xl font-semibold text-center text-dine-orange ">
            Let's get you started
          </Text>
        </View>

        {/* Form */}
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handelSignin}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View className="w-full px-10 mb-2">
              <Text className="text-dine-orange font-semibold mb-1">Email</Text>
              <TextInput
                className="border border-dine-orange bg-white text-dine-orange rounded-md p-3 mb-2"
                keyboardType="email-address"
                onChangeText={handleChange("email")}
                value={values.email}
                onBlur={handleBlur("email")}
              />
              {touched.email && errors.email && (
                <Text className="text-red-500 text-xs mb-2">
                  {errors.email}
                </Text>
              )}

              <Text className="text-dine-orange font-semibold mb-1">Password</Text>
              <TextInput
                className="bg-white border border-dine-orange rounded-md p-3 mb-5"
                secureTextEntry
                onChangeText={handleChange("password")}
                value={values.password}
                onBlur={handleBlur("password")}
              />
              {touched.password && errors.password && (
                <Text className="text-red-500 text-xs mb-2">
                  {errors.password}
                </Text>
              )}

              <TouchableOpacity
                onPress={handleSubmit}
                className="bg-dine-orange p-3 rounded-lg mt-2"
              >
                <Text className="text-xl font-semibold text-center text-black">
                  Sign in
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
        <View className="justify-center items-center mb-3">
          <TouchableOpacity
            className="flex-row items-center mt-4"
            onPress={() => router.push("/signup")}
          >
            <Text className="text-white font-semibold mr-2">Welcome Back</Text>
            <Text className="text-base font-semibold underline text-dine-orange">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center w-full justify-center px-6">
          <View className="border-b-2 border-dine-orange w-32 mr-3" />
          <Text className="text-center text-base font-semibold text-white">or</Text>
          <View className="border-b-2 border-dine-orange w-32 ml-3" />
        </View>
        <TouchableOpacity
          className="flex-row justify-center items-center mt-1"
          onPress={() => router.push("/home")}
        >
          <Text className="text-white font-semibold mr-2">Be a</Text>
          <Text className="text-base font-semibold underline text-dine-orange">
            Guest User
          </Text>
        </TouchableOpacity>

        {/* Bottom Image */}
        <View className="flex-1 items-center mt-4">
          <Image
            source={entryimage}
            className="h-60 w-11/12 mt-4"
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signin;
