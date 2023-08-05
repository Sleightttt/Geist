import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./nearbycard.style";

const NearbyCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{ uri: item.employer_logo }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>
      <View style={styles.infoContainer}>
        <Text numberOfLines={2} style={styles.jobName(selectedJob, item)}>
          {item.job_title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyCard;
