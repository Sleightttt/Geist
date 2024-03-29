import React from "react";
import { Text, View } from "react-native";
import styles from "./specifics.style";

const Specifics = ({ title, points }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>

      <View style={styles.pointsContainer}>
        {points.map((item, index) => (
          <View key={item + index}>
            <Text style={styles.pointWrapper} key={item + index}>
              <Text style={styles.pointDot}></Text>
              <Text style={styles.pointText}>{item}</Text>
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Specifics;
