/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import React from "react"

import useStore from "../models/store"

import { useColorScheme, Image, Text } from "react-native"
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {
  AllVehicles,
  LagosState,
  SelectCategory,
  HomePage,
  HomePremuim,
  GetewayScreen,
  StartScreen,
  ForgetPassword,
  CheckEmail,
  OnboardingScreen,
  FilterScreen,
  AllCatogories,
  NewPassword,
  FilterByCategoryScreen,
  PasswordReset,
  Profile,
  AccountSetting,
  AccountPasswordReset,
  ChangePassword,
  SignIN,
  CreateAccount,
  BuyAProduct,
  BuyAProductRevw,
  MySave,
  Notification,
  Activee,
  BuyAProductVideo,
  Notification_similarAds as NotificationSimilarAds,
  FilterByScreenMake,
  FilterByScreenModal,
  FilterByScreenBodyType,
  Reviewing,
  Decline,
  Closed,
  SellerProfile,
  CategoryHome,
  SplashScreen1,
  SplashScreen2,
  FilterByScreenEngineSize,
  FilterByScreenColor,
  FilterByScreenCondition,
  AddNewPost,
  MyMessages,
  ArchieveChats,
  ChatScreen,
} from "../screens"
import { navigationRef, useBackButtonHandler } from "./navigation-utilities"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type NavigatorParamList = {
  // welcome: undefined
  Start: undefined
  Splash_1: undefined
  Splash_2: undefined
  Onboarding: undefined
  forgetpassword: undefined
  checkemail: undefined
  filterScreen: undefined
  newpassword: undefined
  passwordreset: undefined
  profile: undefined
  Geteway: undefined
  homePremuim: undefined
  homePage: undefined
  allcatogories: undefined
  allvehicles: undefined
  lagosstate: undefined
  selectcategory: undefined
  accountsetting: undefined
  accountpasswordreset: undefined
  changepassword: undefined
  signin: undefined
  createaccount: undefined
  filterbycategory: undefined
  buyAProduct: undefined
  mysave: undefined
  notification: undefined
  activee: undefined
  buyAProductRevw: undefined
  buyAProductVideo: undefined
  notification_similarads: undefined
  HomeTabs: undefined
  filrerbyscreenmake: undefined
  filrerbyscreenmodal: undefined
  filrerbyscreenbodytype: undefined
  reviewing: undefined
  decline: undefined
  closed: undefined
  sellerProfile: undefined
  categoryHome: undefined
  myMessages: undefined
  archieveChats: undefined
  chatScreen: undefined
  filterbyscreenenginesize: undefined
  filterbyscreencolor: undefined
  filterbyscreencondition: undefined
  addnewposts: undefined
}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<NavigatorParamList>()
const Tab = createBottomTabNavigator()

const HomeTabs = () => {
  const { token } = useStore()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: { height: 63 },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: () => <Image source={require("../../assets/images/bottomHome.png")} />,
        }}
        name="Home"
        component={HomePage}
      />

      <Tab.Screen
        name="Favourite"
        component={token?MySave:SignIN}
        options={{
          tabBarIcon: () => <Image source={require("../../assets/images/favorite.png")} />,
        }}
      />
      <Tab.Screen
        name="Sell"
        component={AddNewPost}
        options={{
          tabBarIcon: () => {
            return <Image source={require("../../assets/images/sellBottomHome.png")} />
          },
        }}
      />

      <Tab.Screen
        options={{
          tabBarIcon: () => <Image source={require("../../assets/images/MesssageIcon.png")} />,
        }}
        name="Message"
        component={token?MyMessages:SignIN}
      />
      
      <Tab.Screen
        options={{
          tabBarIcon: () => <Image source={require("../../assets/images/profile.png")} />,
        }}
        name="Profile"
        component={token?Profile:SignIN}
      />
    </Tab.Navigator>
  )
}
const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Splash_1"
    >
      <Stack.Screen name="Splash_1" component={SplashScreen1} />
      <Stack.Screen name="Splash_2" component={SplashScreen2} />
      <Stack.Screen name="signin" component={SignIN} />
      <Stack.Screen name="Start" component={StartScreen} />
      <Stack.Screen name="Geteway" component={GetewayScreen} />
      <Stack.Screen name="addnewposts" component={AddNewPost} />
      <Stack.Screen name="chatScreen" component={ChatScreen} />
      <Stack.Screen name="homePage" component={HomeTabs} />
      <Stack.Screen name="createaccount" component={CreateAccount} />
      <Stack.Screen name="accountsetting" component={AccountSetting} />
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
      <Stack.Screen name="archieveChats" component={ArchieveChats} />
      <Stack.Screen name="activee" component={Activee} />
      <Stack.Screen name="decline" component={Decline} />
      <Stack.Screen name="reviewing" component={Reviewing} />
      <Stack.Screen name="closed" component={Closed} />
      <Stack.Screen name="notification_similarads" component={NotificationSimilarAds} />
      <Stack.Screen name="filrerbyscreenmake" component={FilterByScreenMake} />
      <Stack.Screen name="filrerbyscreenmodal" component={FilterByScreenModal} />
      <Stack.Screen name="filrerbyscreenbodytype" component={FilterByScreenBodyType} />
      <Stack.Screen name="filterbyscreenenginesize" component={FilterByScreenEngineSize} />
      <Stack.Screen name="filterbyscreencolor" component={FilterByScreenColor} />
      <Stack.Screen name="filterbyscreencondition" component={FilterByScreenCondition} />
      <Stack.Screen name="filterbycategory" component={FilterByCategoryScreen} />
      <Stack.Screen name="filterScreen" component={FilterScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="checkemail" component={CheckEmail} />
      <Stack.Screen name="homePremuim" component={HomePremuim} />
      <Stack.Screen name="categoryHome" component={CategoryHome} />
      <Stack.Screen name="notification" component={Notification} />
      <Stack.Screen name="mysave" component={HomeTabs} />
      <Stack.Screen name="newpassword" component={NewPassword} />
      <Stack.Screen name="profile" component={HomeTabs} />
      <Stack.Screen name="allcatogories" component={AllCatogories} />
      <Stack.Screen name="lagosstate" component={LagosState} />
      <Stack.Screen name="buyAProduct" component={HomeTabs} />
      <Stack.Screen name="buyAProductRevw" component={BuyAProductRevw} />
      <Stack.Screen name="buyAProductVideo" component={BuyAProductVideo} />
      <Stack.Screen name="sellerProfile" component={SellerProfile} />
      <Stack.Screen name="forgetpassword" component={ForgetPassword} />
      <Stack.Screen name="accountpasswordreset" component={AccountPasswordReset} />
      <Stack.Screen name="changepassword" component={ChangePassword} />
      <Stack.Screen name="passwordreset" component={PasswordReset} />
      <Stack.Screen name="selectcategory" component={SelectCategory} />
      <Stack.Screen name="allvehicles" component={AllVehicles} /> 
    </Stack.Navigator>
  )
}

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  const colorScheme = useColorScheme()
  useBackButtonHandler(canExit)
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
}

AppNavigator.displayName = "AppNavigator"

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["welcome"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
