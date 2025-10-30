import { View, Text, TouchableOpacity, Image, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const PublicCare = () => {
  const router = useRouter();



  // const publicServices = [
  //   {
  //     id: 1,
  //     name: "Postal Service",
  //     icon: "create-outline",
  //     route: "/Postcompo/postcall",
  //   },
  //   {
  //     id: 2,
  //     name: "Water Suppliers",
  //     icon: "water",
  //   },
  //   {
  //     id: 3,
  //     name: "Daily Uses",
  //     icon: "newspaper-outline",
  //   },
  //   {
  //     id: 4,
  //     name: "Grocery",
  //     icon: "pricetag-outline",
  //   },
  //   {
  //     id: 5,
  //     name: "Service Apartment VNB",
  //     icon: "business-outline",
  //     route: "/Serviceapartments/apartmentscall",
  //   },
  //   {
  //     id: 6,
  //     name: "BC Services",
  //     icon: "settings-outline",
  //   },
  // ];



  const publicCareServices = [
    {
      id: 1,
      name: "Fire Safety",
      // icon: require("../../assets/images/"),
      route: "/nav/fireSafety",
      color: "#F97316",
      bgColor: "#FFF7ED"
    },
    {
      id: 2,
      name: "Police Station",
      // icon: require("../../assets/images/police.png"),
      route: "/nav/police",
      color: "#3B82F6",
      bgColor: "#EFF6FF"
    },
    {
      id: 3,
      name: "Ambulance",
      icon: require("../../assets/images/ambulance.png"),
      route: "/nav/ambulance",
      color: "#10B981",
      bgColor: "#ECFDF5"
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
              Tap to view details
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
      <StatusBar barStyle="light-content" backgroundColor="#3B82F6" />

      {/* Header */}
      <View className="flex-row items-center justify-between bg-[#3B82F6] px-4 py-4 shadow-lg rounded-b-3xl">
        <TouchableOpacity
          onPress={() => router.back()}
          className="p-2 rounded-full bg-white/20"
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        <Text className="text-white text-xl font-bold">
          Public Care Services
        </Text>

        <View className="w-8" />
      </View>

      {/* Content */}
      <View className="flex-1 bg-gray-50">
        <View className="px-6 pt-6 flex-1">
          {publicCareServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </View>

        <View className="px-6 pb-8">
          <View className="bg-white rounded-2xl p-4 shadow-sm">
            <Text className="text-gray-600 text-center text-sm">
              🚨 Emergency helplines available 24/7
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PublicCare;
