import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { useCallback, useState } from "react";

import Company from "../components/Company/company";
import JobAbout from "../components/JobAbout/jobabout";
import JobFooter from "../components/JobFooter/jobfooter";
import JobTabs from "../components/JobTabs/jobtabs";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn/screenheaderbtn";
import Specifics from "../components/Specifics/specifics";

const JobDetails = () => {
  return <Text>This is a user's profile page</Text>;
};

export default JobDetails;
