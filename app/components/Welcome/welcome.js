import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import styles from "./welcome.style";
import { icons, SIZES } from "../../constants";
import { SafeAreaView } from "react-native-safe-area-context";

const jobTypes = ["Nearby", "New", "Popular", "Most Compatible", "Recommended"];

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = React.useState("Nearby");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Sup, dawg</Text>
        <Text style={styles.welcomeMessage}>Find your perfect date</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="What are you looking for?"
            value=""
            onChange={(e) => {}}
            placeholderTextColor="#666"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollview}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      >
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsContainer}
        />
      </ScrollView>
    </View>
  );
};

export default Welcome;
