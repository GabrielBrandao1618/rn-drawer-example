import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Home } from "./src/screens/Home";
import { Info } from "./src/screens/Info";
import { Items } from "./src/screens/Items";
import { View, Text, Button } from "react-native";

export type screensParams = {
  home: undefined;
  info: undefined;
  items: undefined;
};
const nav = createDrawerNavigator<screensParams>();

type sideBarItemProps = {
  title: string;
  onPress: () => void;
};
const SidebarItem = (props: sideBarItemProps) => {
  return <Button {...props} />;
};

const SideBar = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <SidebarItem
        onPress={() => {
          props.navigation.navigate("home");
        }}
        title="Home"
      />
      <SidebarItem
        onPress={() => {
          props.navigation.navigate("info");
        }}
        title="Info"
      />
      <SidebarItem
        onPress={() => {
          props.navigation.navigate("items");
        }}
        title="Items"
      />
    </DrawerContentScrollView>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <nav.Navigator drawerContent={SideBar}>
        <nav.Screen name="home" component={Home} />
        <nav.Screen name="info" component={Info} />
        <nav.Screen name="items" component={Items} />
      </nav.Navigator>
    </NavigationContainer>
  );
}
