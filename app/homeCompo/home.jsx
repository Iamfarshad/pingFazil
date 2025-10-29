import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

// Your image imports
import ElectritionEngineer from "../../assets/images/electrition.png";
import PlumberRepair from "../../assets/images/tap.png";
import cylinder from "../../assets/images/lpg.png";
import hospitalbuilding from "../../assets/images/hospital.png";
import rikshaw from "../../assets/images/rikshaw.png";
import labourss from "../../assets/images/workers.png";
import car from "../../assets/images/sedan.png";
import mec from "../../assets/images/mechanical.png";
import ambuhelp from "../../assets/images/ambulance.png";

const Home = () => {
  const router = useRouter();

  const services = [
    {
      id: 1,
      name: "Electrician",
      icon: ElectritionEngineer,
      route: "/Electritioncompo/electritioncall",
      color: "#FF6B35",
      bgColor: "#FFF0EB"
    },
    {
      id: 2,
      name: "Plumber",
      icon: PlumberRepair,
      route: "/Plumbcompo/plumbercall",
      color: "#00A8FF",
      bgColor: "#E8F7FF"
    },
    {
      id: 3,
      name: "LPG",
      icon: cylinder,
      route: "/Gascompo/gascall",
      color: "#FF9F1C",
      bgColor: "#FFF5E6"
    },
    {
      id: 4,
      name: "Health Care",
      icon: hospitalbuilding,
      route: "/nav/healthcare",
      color: "#E84178",
      bgColor: "#FDE8EF"
    },
    {
      id: 5,
      name: "Public",
      icon: "👦",
      route: "/nav/publiccare",
      color: "#9C27B0",
      bgColor: "#F3E5F5"
    },
    {
      id: 6,
      name: "Auto Driver",
      icon: rikshaw,
      route: "/Autocompo/autocall",
      color: "#4CAF50",
      bgColor: "#E8F5E8"
    },
    {
      id: 7,
      name: "Mason(labour)",
      icon: labourss,
      route: null,
      color: "#795548",
      bgColor: "#EFEBE9"
    },
    {
      id: 8,
      name: "Car Driver",
      icon: car,
      route: "/Carcompo/carcall",
      color: "#2196F3",
      bgColor: "#E3F2FD"
    },
    {
      id: 9,
      name: "Mechanic",
      icon: mec,
      route: "/nav/mechanicrep",
      color: "#607D8B",
      bgColor: "#ECEFF1"
    },
    {
      id: 10,
      name: "Emergency",
      icon: ambuhelp,
      route: null,
      color: "#F44336",
      bgColor: "#FFEBEE"
    }
  ];

  const handleServicePress = (route) => {
    if (route) {
      router.push(route);
    }
    // If route is null, do nothing (for coming soon services)
  };

  const ServiceCard = ({ service }) => (
    <TouchableOpacity 
      onPress={() => handleServicePress(service.route)}
      className={`w-[48%] mb-4 rounded-2xl p-4 shadow-lg ${
        service.route ? 'active:scale-95' : 'opacity-70'
      }`}
      style={{ backgroundColor: service.bgColor }}
      disabled={!service.route}
    >
      <View className="items-center">
        <View 
          className="w-16 h-16 rounded-full items-center justify-center mb-3 shadow-sm"
          style={{ backgroundColor: service.color + '20' }}
        >
          {typeof service.icon === 'string' ? (
            <Text className="text-2xl">{service.icon}</Text>
          ) : (
            <Image source={service.icon} className="w-10 h-10" resizeMode="contain" />
          )}
        </View>
        <Text className="text-gray-800 text-base font-semibold text-center">
          {service.name}
        </Text>
        {!service.route && (
          <Text className="text-gray-500 text-xs mt-1">Coming Soon</Text>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="light-content" backgroundColor="#6366F1" />

      {/* Header */}
      <View className="bg-[#6366F1] pt-12 pb-6 px-6 rounded-b-3xl shadow-lg">
        <View className="mb-4">
          <Text className="text-white text-3xl font-bold">Ping Help</Text>
          <Text className="text-white text-opacity-90 text-base mt-1">
            Connecting Our Town, One Ping at a Time
          </Text>
        </View>
        
       
       
      </View>

      {/* Main Content */}
      <ScrollView 
        className="flex-1 bg-gray-50"
        showsVerticalScrollIndicator={false}
      >
        {/* Welcome Section */}
        <View className="px-6 pt-6">
          <Text className="text-2xl font-bold text-gray-800 mb-2">
            How can we help you today?
          </Text>
          <Text className="text-gray-600 text-base">
            Choose from our trusted services
          </Text>
        </View>

        {/* Services Grid */}
        <View className="px-6 pt-6 pb-8">
          <View className="flex-row flex-wrap justify-between">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </View>
        </View>

        {/* Features Section */}
        <View className="mx-6 mb-6 bg-white rounded-2xl p-5 shadow-sm">
          <Text className="text-xl font-bold text-gray-800 mb-4">
            Why Choose Ping Help?
          </Text>
          <View className="flex-row justify-between">
            <View className="items-center flex-1">
              <View className="w-12 h-12 bg-green-100 rounded-full items-center justify-center mb-2">
                <Text className="text-lg">⚡</Text>
              </View>
              <Text className="text-gray-700 text-sm font-medium text-center">Quick Response</Text>
            </View>
            <View className="items-center flex-1">
              <View className="w-12 h-12 bg-blue-100 rounded-full items-center justify-center mb-2">
                <Text className="text-lg">✓</Text>
              </View>
              <Text className="text-gray-700 text-sm font-medium text-center">Verified Pros</Text>
            </View>
            <View className="items-center flex-1">
              <View className="w-12 h-12 bg-purple-100 rounded-full items-center justify-center mb-2">
                <Text className="text-lg">⭐</Text>
              </View>
              <Text className="text-gray-700 text-sm font-medium text-center">Rated Services</Text>
            </View>
          </View>
        </View>

        
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;