import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "./../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  userName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },
  welcomeMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.secondary,
    marginTop: 2,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
    shadowColor: "rgba(0, 0, 0, 0.25)", // For iOS
    shadowOffset: {
      width: 0,
      height: 4, // Adjust the height based on your preference
    },
    shadowOpacity: 0.8, // Adjust the opacity based on your preference
    shadowRadius: 6, // Adjust the radius based on your preference
    elevation: 4, // For Android (adjust this value based on your preference)
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 0.25)", // For iOS
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 4,
  },

  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activeJobType === item ? COLORS.tertiary : COLORS.secondary,
    backgroundColor: activeJobType === item ? COLORS.secondary : COLORS.white,
    marginLeft: 1,
    marginRight: 1,
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    color: activeJobType === item ? COLORS.white : COLORS.secondary,
  }),
  scrollview: {
    width: "100%",
  },
});

export default styles;
