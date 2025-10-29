import { View, Text, TouchableOpacity, Image, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Healthcare = () => {
  const router = useRouter();

  const healthcareServices = [
    {
      id: 1,
      name: "Pharmacy",
      icon: require("../../assets/images/package.png"),
      route: "/nav/pharmacy",
      color: "#10B981",
      bgColor: "#ECFDF5"
    },
    {
      id: 2,
      name: "Hospital",
      icon: require("../../assets/images/hospital.png"),
      route: "/nav/hospital",
      color: "#EF4444",
      bgColor: "#FEF2F2"
    }
  ];

  const ServiceCard = ({ service }) => (
    <TouchableOpacity
      onPress={() => service.route && router.push(service.route)}
      className="w-full bg-white rounded-2xl p-6 shadow-lg mb-6 border border-gray-100 active:scale-95"
    >
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center flex-1">
          <View 
            className="w-16 h-16 rounded-full items-center justify-center mr-4"
            style={{ backgroundColor: service.bgColor }}
          >
            <View 
              className="w-12 h-12 rounded-full items-center justify-center"
              style={{ backgroundColor: service.color + '20' }}
            >
              <Image
                source={service.icon}
                className="w-6 h-6"
                resizeMode="contain"
              />
            </View>
          </View>
          <View className="flex-1">
            <Text className="text-gray-800 text-xl font-bold">
              {service.name}
            </Text>
            <Text className="text-gray-500 text-base mt-1">
              Tap to explore services
            </Text>
          </View>
        </View>
        <View className="w-8 h-8 bg-gray-100 rounded-full items-center justify-center">
          <Text className="text-gray-400 text-lg">→</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="light-content" backgroundColor="#6366F1" />
      
      {/* Header - Matching Home Screen Style */}
     <View className="flex-row items-center justify-between bg-[#6366F1] px-4 py-4 shadow-lg rounded-b-3xl">
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

      {/* Main Content */}
      <View className="flex-1 bg-gray-50">
        
        

        {/* Services List */}
        <View className="px-6 pt-6 flex-1">
          {healthcareServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </View>

        {/* Additional Info */}
        <View className="px-6 pb-8">
          <View className="bg-white rounded-2xl p-4 shadow-sm">
            <Text className="text-gray-600 text-center text-sm">
              🏥 24/7 emergency services available
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Healthcare;