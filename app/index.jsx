import { Image, View, ActivityIndicator, TouchableOpacity, Text } from "react-native";
import Animated, { ZoomIn, FadeIn, FadeOut } from "react-native-reanimated";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import companyLogo from "../assets/images/pinghelplogo.png";

export default function Index() {
  const router = useRouter();
  const [showSpinner, setShowSpinner] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Show spinner after logo zoom-in (after 1.2s)
    const spinnerTimer = setTimeout(() => {
      setShowSpinner(true);
    }, 1200);

    // After 5 seconds, hide spinner & show button
    const buttonTimer = setTimeout(() => {
      setShowSpinner(false);
      setShowButton(true);
    }, 5000);

    return () => {
      clearTimeout(spinnerTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  const handleNavigate = () => {
    router.replace("/homeCompo/home");
  };

  return (
    <View className="flex-1 bg-[#365486] justify-center items-center">
      {/* Logo animation */}
      <Animated.View entering={ZoomIn.duration(1200)}>
        <Image
          source={companyLogo}
          className="w-100 h-60"
          resizeMode="contain"
        />
      </Animated.View>

      {/* Spinner (fades in) */}
      {showSpinner && (
        <Animated.View entering={FadeIn.duration(500)} exiting={FadeOut.duration(500)} className="mt-5">
          <ActivityIndicator size="large" color="#ffffff" />
        </Animated.View>
      )}

      {/* Button (fades in after spinner) */}
      {showButton && (
        <Animated.View entering={FadeIn.duration(800)} className="mt-6">
          <TouchableOpacity
            onPress={handleNavigate}
            className="bg-white px-6 py-3 rounded-2xl"
            activeOpacity={0.8}
          >
            <Text className="text-[#365486] text-lg pl-2 pr-2 font-semibold">Get Started</Text>
          </TouchableOpacity>
        </Animated.View>
      )}

      <StatusBar barStyle="light-content" backgroundColor="#fff" />
    </View>
  );
}
