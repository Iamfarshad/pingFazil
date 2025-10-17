import { View, Text, TouchableOpacity, Image, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";

const Mechanicrep = () => {
  const navigation = useNavigation();
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#8ea3c6]">
      <StatusBar barStyle="light-content" backgroundColor="#365486" />
      {/* Header */}
      <View className="flex-row items-center justify-between bg-[#365486] px-4 py-4 shadow-lg rounded-b-3xl">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="p-2 rounded-full bg-white/20"
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        <Text className="text-white text-xl font-bold">Mechanic Services</Text>

        {/* Spacer to balance layout */}
        <View className="w-8" />
      </View>

      {/* Content Section */}
      <View className="flex-1 gap-2 items-center justify-start mt-4 space-y-12 px-2 ">
        {/* Pharmacy Button */}
        <TouchableOpacity
          onPress={() => router.push("/Homeappliancecompo/homappliance")}
          activeOpacity={0.7}
          className="w-full h-20 rounded-3xl overflow-hidden shadow-2xl border-2 border-white"
        >
          <LinearGradient
            colors={["#4A6FA5", "#365486", "#fff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="flex-row items-center justify-between h-full px-6"
          >
            <View className="flex-row items-center space-x-4">
              <View className="bg-white/20 p-3 mr-2 rounded-2xl">
                <Ionicons name="home" size={20} color="#000" />
              </View>
              <View>
                <Text className="text-white text-xl font-bold">
                  Home Appliance
                </Text>
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>

        {/* Hospital Button */}
        <TouchableOpacity
          activeOpacity={0.7}
          className="w-full h-20 rounded-3xl overflow-hidden shadow-2xl border-2 border-white"
        >
          <LinearGradient
            colors={["#4A6FA5", "#365486", "#fff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="flex-row items-center justify-between h-full px-6"
          >
            <View className="flex-row items-center space-x-4">
              <View className="bg-white/20 p-3 mr-2 rounded-2xl">
                <Ionicons name="bicycle" size={20} color="#000" />
              </View>
              <View>
                <Text className="text-white text-xl font-bold">
                  Two Wheeler{" "}
                </Text>
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          className="w-full h-20 rounded-3xl overflow-hidden shadow-2xl border-2 border-white"
        >
          <LinearGradient
            colors={["#4A6FA5", "#365486", "#fff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="flex-row items-center justify-between h-full px-6"
          >
            <View className="flex-row items-center space-x-4">
              <View className="bg-white/20 p-3 mr-2 rounded-2xl">
                <Ionicons name="car" size={20} color="#000" />
              </View>
              <View>
                <Text className="text-white text-xl font-bold">
                  Four Wheeler{" "}
                </Text>
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Mechanicrep;
