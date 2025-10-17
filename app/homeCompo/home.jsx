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
import ElectritionEngineer from "../../assets/images/electrition.png";
import PlumberRepair from "../../assets/images/tap.png";
import cylinder from "../../assets/images/lpg.png";
import hospitalbuilding from "../../assets/images/hospital.png";
import rikshaw from "../../assets/images/rikshaw.png";
import labourss from "../../assets/images/workers.png";
import car from "../../assets/images/sedan.png";
import mec from "../../assets/images/mechanical.png";
import ambuhelp from "../../assets/images/ambulance.png";
import { useRouter } from "expo-router";

const Home = () => {

    const router = useRouter();

  return (
    <SafeAreaView className="flex-1">
      <StatusBar barStyle="light-content" backgroundColor="#365486" />

      {/* Background with red color */}
      <View className="flex-1 bg-[#365486]">
        {/* Ping Help Header - Fixed position */}
        <View className="items-center mt-20 mb-10 gap-2">
          <Text className="text-white text-5xl font-bold">Ping Help</Text>
          <Text className="text-white text-lg ">Connecting Our Town, One Ping at a Time</Text>

        </View>

        {/* Scrollable content area */}
        <View className="flex-1">
          <ScrollView
            className="flex-1"
            contentContainerStyle={{ flexGrow: 1 }}
          >
            {/* Main content area */}
            <View className="flex-1 rounded-t-3xl bg-[#8ea3c6]">
              {/* Services Grid */}
              <View className="p-6">
               

                {/* First Row */}
                <View className="flex-row justify-between mb-6">
                  <TouchableOpacity onPress={() => router.push("/Electritioncompo/electritioncall")}  className="w-[48%] bg-gray-50 rounded-2xl p-6 items-center shadow-sm border border-gray-100">
                    <View className="w-20 h-20 bg-blue-100 rounded-full items-center justify-center mb-3">
                      <Image source={ElectritionEngineer}  className="w-14 h-14" resizeMode="contain" />
                    </View>
                    <Text className="text-gray-800 text-lg font-semibold">
                      Electrician
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => router.push("/Plumbcompo/plumbercall")} className="w-[48%] bg-gray-50 rounded-2xl p-6 items-center shadow-sm border border-gray-100">
                    <View className="w-20 h-20 bg-green-100 rounded-full items-center justify-center mb-3">
                      <Text className="text-green-600 text-3xl font-bold">
                       <Image source={PlumberRepair}  className="w-14 h-14" resizeMode="contain" />
                      </Text>
                    </View>
                    <Text className="text-gray-800 text-lg font-semibold">
                      Plumber
                    </Text>
                  </TouchableOpacity>
                </View>

                {/* Second Row */}
                <View className="flex-row justify-between mb-6">
                  <TouchableOpacity onPress={() => router.push("/Gascompo/gascall")} className="w-[48%] bg-gray-50 rounded-2xl p-6 items-center shadow-sm border border-gray-100">
                    <View className="w-20 h-20 bg-orange-100 rounded-full items-center justify-center mb-3">
                      <Image source={cylinder}  className="w-14 h-14" resizeMode="contain" />
                    </View>
                    <Text className="text-gray-800 text-lg font-semibold">
                      LPG
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => router.push("/nav/healthcare")} className="w-[48%] bg-gray-50 rounded-2xl p-6 items-center shadow-sm border border-gray-100">
                    <View className="w-20 h-20 bg-red-100 rounded-full items-center justify-center mb-3">
                     <Image source={hospitalbuilding}  className="w-14 h-14" resizeMode="contain" />
                    </View>
                    <Text className="text-gray-800 text-lg font-semibold">
                      Health Care
                    </Text>
                  </TouchableOpacity>
                </View>

                {/* Third Row */}
                <View className="flex-row justify-between mb-6">
                   <TouchableOpacity onPress={() => router.push("/nav/publiccare")} className="w-[48%] bg-gray-50 rounded-2xl p-6 items-center shadow-sm border border-gray-100">
                    <View className="w-16 h-16 bg-teal-100 rounded-full items-center justify-center mb-3">
                      <Text className="text-teal-600 text-3xl font-bold">
                        👦
                      </Text>
                    </View>
                    <Text className="text-gray-800 text-lg font-semibold">
                      Public
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => router.push("/Autocompo/autocall")} className="w-[48%] bg-gray-50 rounded-2xl p-6 items-center shadow-sm border border-gray-100">
                    <View className="w-20 h-20 bg-yellow-100 rounded-full items-center justify-center mb-3">
                       <Image source={rikshaw}  className="w-14 h-14" resizeMode="contain" />
                    </View>
                    <Text className="text-gray-800 text-lg font-semibold">
                      Auto Driver
                    </Text>
                  </TouchableOpacity>
                </View>

                {/* Fourth Row */}
                <View className="flex-row justify-between mb-6">
                  <View className="w-[48%] bg-gray-50 rounded-2xl p-6 items-center shadow-sm border border-gray-100">
                    <View className="w-20 h-20 bg-indigo-100 rounded-full items-center justify-center mb-3">
                     <Image source={labourss}  className="w-14 h-14" resizeMode="contain" />
                    </View>
                    <Text className="text-gray-800 text-lg font-semibold">
                      Mason(labour)
                    </Text>
                  </View>

                  <TouchableOpacity onPress={() => router.push("/Carcompo/carcall")} className="w-[48%] bg-gray-50 rounded-2xl p-6 items-center shadow-sm border border-gray-100">
                    <View className="w-20 h-20 bg-purple-100 rounded-full items-center justify-center mb-3">
                       <Image source={car}  className="w-14 h-14" resizeMode="contain" />
                    </View>
                    <Text className="text-gray-800 text-lg font-semibold">
                      Car Driver
                    </Text>
                  </TouchableOpacity>
                </View>

                {/* Fifth Row */}
                <View className="flex-row justify-between mb-6">
                  <TouchableOpacity onPress={() => router.push("/nav/mechanicrep")} className="w-[48%] bg-gray-50 rounded-2xl p-6 items-center shadow-sm border border-gray-100">
                    <View className="w-20 h-20 bg-gray-100 rounded-full items-center justify-center mb-3">
                       <Image source={mec}  className="w-14 h-14" resizeMode="contain" />
                    </View>
                    <Text className="text-gray-800 text-lg font-semibold">
                      Mechanic
                    </Text>
                  </TouchableOpacity>

                  <View className="w-[48%] bg-gray-50 rounded-2xl p-6 items-center shadow-sm border border-gray-100">
                    <View className="w-20 h-20 bg-red-100 rounded-full items-center justify-center mb-3">
                      <Image source={ambuhelp}  className="w-14 h-14" resizeMode="contain" />
                    </View>
                    <Text className="text-gray-800 text-lg font-semibold">
                      Emergency
                    </Text>
                  </View>
                </View>

                {/* Sixth Row */}
                <View className="flex-row justify-between">
                 

                  {/* Empty space to maintain grid layout */}
                  <View className="w-[48%]"></View>
                </View>
              </View>

              {/* Bottom Section */}
              <View className="pb-8 pt-4 items-center">
                <Text className="text-gray-500 text-sm">
                  Tap on any service to get help
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;