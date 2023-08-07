import React from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import styles from "../JobTabs/jobtabs.style";
import { SIZES } from "../../constants";

const JobTabs = ({ tabs, activeTab, setActiveTab }) => {
  const TabButton = ({ name, activeTab, onHandleSearchType }) => (
    <TouchableOpacity
      style={styles.btn(name, activeTab)}
      onPress={onHandleSearchType}
    >
      <Text style={styles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      />
    </View>
  );
};

export default JobTabs;
