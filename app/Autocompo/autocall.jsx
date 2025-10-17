import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  FlatList,
  Linking,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

const Autocall = () => {
  const [selectedArea, setSelectedArea] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const navigation = useNavigation();

  const areas = [
    "Periyapet",
    "Chennampet",
    "Fort",
    "Muslimpur",
    "Shakirabad",
    "Basheerabad",
    "Noorullahpet",
  ];

  // ✅ Area-based electricians
  const areaContacts = {
    Periyapet: [
      { name: "Anees", phone: "+91 99442 54828" },
      { name: "Babu", phone: "+91 98942 98105" },
    ],
    Chennampet: [
      { name: "Aslam", phone: "+91 90033 55100" },
      { name: "Azeem", phone: "+91 95005 80677" },
      { name: "Babu", phone: "+91 98942 98105" },
    ],
    Fort: [{ name: "Ayyapan", phone: "+91 99944 98234" }],
    Muslimpur: [
      { name: "Ateeq", phone: "+91 770867 8632" },
      { name: "Nouman", phone: "+91 78717 28858" },
    ],
    Shakirabad: [{ name: "Saddam", phone: "+91 86808 69963" }],
    Basheerabad: [
      { name: "Suhail", phone: "+91 77665 55443" },
    
    ],
    Noorullahpet: [{ name: "Ameen", phone: "+91 66554 44332" }],
  };

  const handleAreaPress = (area) => {
    setLoading(true);
    setSelectedArea(null);
    setTimeout(() => {
      setSelectedArea(area);
      setLoading(false);
    }, 3000);
  };

  const confirmCall = () => {
    if (selectedContact) {
      Linking.openURL(`tel:${selectedContact.phone}`);
      setSelectedContact(null);
    }
  };

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

        <Text className="text-white text-xl font-bold">Auto Service</Text>
        <View className="w-8" />
      </View>

      {/* Area Selection */}
      {!selectedArea && !loading && (
        <View className="flex-1 px-6 mt-6">
          <Text className="text-lg font-semibold text-gray-700 mb-4">
            Choose your area:
          </Text>

          <FlatList
            data={areas}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleAreaPress(item)}
                className="bg-white py-4 px-6 rounded-2xl mb-3 flex-row items-center shadow-sm active:bg-[#e8eef8]"
              >
                <Ionicons
                  name="location-outline"
                  size={22}
                  color="#365486"
                  style={{ marginRight: 12 }}
                />
                <Text className="text-lg text-gray-800 font-medium flex-1">
                  {item}
                </Text>
                <Ionicons
                  name="chevron-forward-outline"
                  size={20}
                  color="#365486"
                />
              </TouchableOpacity>
            )}
          />
        </View>
      )}

      {/* Loader */}
      {loading && (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="#365486" />
          <Text className="mt-3 text-gray-700">Loading contacts...</Text>
        </View>
      )}

      {/* Contacts Display */}
      {selectedArea && !loading && (
        <View className="flex-1 mt-4 bg-white rounded-t-3xl p-6 shadow-lg">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-xl font-bold text-gray-800">
              {selectedArea} Area
            </Text>
            <TouchableOpacity
              onPress={() => setSelectedArea(null)}
              className="bg-gray-200 rounded-full p-2"
            >
              <Ionicons name="close-outline" size={22} color="#333" />
            </TouchableOpacity>
          </View>

          {areaContacts[selectedArea]?.map((person, index) => (
            <View
              key={index}
              className="bg-[#f5f7fb] rounded-2xl px-5 py-4 mb-3 flex-row justify-between items-center shadow-sm"
            >
              <View>
                <Text className="text-lg font-semibold text-gray-800">
                  {person.name}
                </Text>
                <Text className="text-gray-500">{person.phone}</Text>
              </View>
              <TouchableOpacity
                onPress={() => setSelectedContact(person)}
                className="bg-[#365486] px-5 py-2 rounded-full"
              >
                <Text className="text-white font-medium">Call</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}

      {/* Call Confirmation Modal */}
      <Modal
        visible={!!selectedContact}
        animationType="slide"
        transparent
        onRequestClose={() => setSelectedContact(null)}
      >
        <View className="flex-1 justify-end bg-black/40">
          <View className="bg-white rounded-t-3xl p-6 shadow-xl">
            <Text className="text-center text-lg font-semibold text-gray-800 mb-3">
              Call {selectedContact?.name}?
            </Text>
            <Text className="text-center text-gray-600 mb-6">
              {selectedContact?.phone}
            </Text>

            <View className="flex-row justify-around">
              <TouchableOpacity
                onPress={() => setSelectedContact(null)}
                className="bg-gray-300 px-8 py-2 rounded-full"
              >
                <Text className="text-gray-800 font-medium">Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={confirmCall}
                className="bg-[#365486] px-8 py-2 rounded-full"
              >
                <Text className="text-white font-medium">Call</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Autocall;
