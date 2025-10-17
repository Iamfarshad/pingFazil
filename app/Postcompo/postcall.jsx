import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Linking,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Postcall = () => {
  const navigation = useNavigation();
  const [selectedContact, setSelectedContact] = useState(null);

  const electricians = [
    { name: "The Professional Couriers", phone: "+91 93642 24899" },
    { name: "Sub Post Office", phone: "04174 232 384" },
    { name: "DHT Global Express", phone: "+91 90425 77651" },
    { name: "ST Courier", phone: "+91 99948 59147" },
  ];

  const handleCallPress = (contact) => {
    setSelectedContact(contact);
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

        <Text className="text-white text-xl font-bold">LPG Service</Text>

        <View className="w-8" />
      </View>

      {/* Electricians List */}
      <View className="flex-1 gap-2 items-center justify-start mt-6 space-y-4 px-4">
        {electricians.map((person, index) => (
          <View
            key={index}
            className="w-full bg-white rounded-2xl shadow-md px-4 py-4 flex-row items-center justify-between"
          >
            <View>
              <Text className="text-lg font-semibold text-gray-800">
                {person.name}
              </Text>
              <Text className="text-gray-500">{person.phone}</Text>
            </View>

            <TouchableOpacity
              onPress={() => handleCallPress(person)}
              className="bg-[#365486] px-5 py-2 rounded-full"
            >
              <Text className="text-white font-medium">Call</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Call Confirmation Modal */}
      <Modal
        visible={!!selectedContact}
        animationType="slide"
        transparent
        onRequestClose={() => setSelectedContact(null)}
      >
        <View className="flex-1 justify-end bg-black/50">
          <View className="bg-white rounded-t-3xl p-6">
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

export default Postcall;
