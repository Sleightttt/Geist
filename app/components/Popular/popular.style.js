import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SIZES.small,
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.secondary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,

    gap: SIZES.small,
  },
  backgroundColor: "#ffffff", // Set the background color of the container
  borderRadius: 8, // Adjust the value as needed
  shadowColor: "#000", // Shadow color
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.2, // Opacity of the shadow
  shadowRadius: 2, // Spread of the shadow
  elevation: 3, // Android shadow elevation
});

export default styles;
