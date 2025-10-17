import { View, Text, TouchableOpacity, Image, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const Healthcare = () => {
  const navigation = useNavigation();

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

        <Text className="text-white text-xl font-bold">
          Healthcare Services
        </Text>

        {/* Spacer to balance layout */}
        <View className="w-8" />
      </View>

      {/* Content Section */}
      <View className="flex-1 gap-2 items-center justify-start mt-4 space-y-12 px-2 ">
        {/* Pharmacy Button */}
        <TouchableOpacity
          activeOpacity={0.7}
          className="w-full h-24 rounded-3xl overflow-hidden shadow-2xl border-2 border-white"
        >
          <LinearGradient
            colors={["#4A6FA5", "#365486", "#2C3E50"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="flex-row items-center justify-between h-full px-6"
          >
            <View className="flex-row items-center space-x-4">
              <View className="bg-white/20 p-3 mr-2 rounded-2xl">
                <Image
                  source={require("../../assets/images/package.png")}
                  className="w-8 h-8"
                  resizeMode="contain"
                />
              </View>
              <View>
                <Text className="text-white text-xl font-bold">Pharmacy</Text>
                <Text className="text-white/80 text-sm">
                  Medicines & Health products
                </Text>
              </View>
            </View>
            <View className="bg-white/20 p-2 rounded-full">
              <Ionicons name="medical" size={20} color="#fff" />
            </View>
          </LinearGradient>
        </TouchableOpacity>

        {/* Hospital Button */}
        <TouchableOpacity
          activeOpacity={0.7}
          className="w-full h-24 rounded-3xl overflow-hidden shadow-2xl border-2 border-white"
        >
          <LinearGradient
            colors={["#4A6FA5", "#365486", "#2C3E50"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="flex-row items-center justify-between h-full px-6"
          >
            <View className="flex-row items-center space-x-4">
              <View className="bg-white/20 p-3 mr-2 rounded-2xl">
                <Image
                  source={require("../../assets/images/hospital.png")}
                  className="w-8 h-8"
                  resizeMode="contain"
                />
              </View>
              <View>
                <Text className="text-white text-xl font-bold">Hospital</Text>
                <Text className="text-white/80 text-sm">
                  Emergency & Medical care
                </Text>
              </View>
            </View>
            <View className="bg-white/20 p-2 rounded-full">
              <Ionicons name="medkit" size={20} color="#fff" />
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Healthcare;
