import { View, SafeAreaView, ScrollView } from "react-native";
import { Stack, useRouter } from "expo-router";
import ScreenHeaderBtn from "./components/ScreenHeaderBtn/screenheaderbtn";
import { COLORS, FONT, SIZES, SHADOWS, icons, images } from "./constants";
import Welcome from "./components/Welcome/welcome";
import Nearby from "./components/Nearby/nearby";
import Popular from "./components/Popular/popular";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.primary },
          headerTintColor: COLORS.secondary,
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerTitle: "Geist",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome />
          <Nearby />
          <Popular />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
