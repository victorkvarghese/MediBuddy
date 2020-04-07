import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { Avatar, Text, IconButton, Menu, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withTheme } from 'react-native-paper';

import GeneralStatusBar from './status-bar';

const width = 120;
const CustomIcon = ({ name, onPress }) => {
  return (
    <IconButton icon={name} color="#bdc3c7" size={28} onPress={() => {}} />
  );
};

function TabBar({
  state,
  descriptors,
  navigation,
  navigationState,
  position,
  theme,
}) {
  const { colors } = theme;
  const [visible, setvisible] = React.useState(false);
  /** Indicator transition */
  const indicatorTranslateX = Animated.interpolate(position, {
    inputRange: [0, 1, 2, 3],
    outputRange: [110, 2 * width + 24, 3 * width + 24, 4 * width + 48],
  });
  const indicatorWidth = Animated.interpolate(position, {
    inputRange: [0, 1, 2, 3],
    outputRange: [140, 100, 140, 100],
  });

  const TabIcon = ({ route, index }) => {
    const { options } = descriptors[route.key];
    const label =
      options.tabBarLabel !== undefined
        ? options.tabBarLabel
        : options.title !== undefined
        ? options.title
        : route.name;

    const isFocused = state.index === index;

    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name);
      }
    };

    return (
      <TouchableOpacity key={index} style={styles.tab} onPress={onPress}>
        <Text
          style={
            (styles.tabTxt,
            {
              color:
                index === navigationState.index ? colors.accent : '#bdc3c7',
            })
          }>
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <GeneralStatusBar backgroundColor="#ffff" />
      <View style={styles.tabView}>
        <Avatar.Image
          size={50}
          style={styles.icon}
          source={{
            uri: 'https://i.ya-webdesign.com/images/male-avatar-icon-png-7.png',
          }}
        />

        {state.routes.map((route, index) => {
          return <TabIcon route={route} index={index} />;
        })}

        <View style={styles.sideMenu}>
          <Menu
            visible={visible}
            onDismiss={() => setvisible(false)}
            anchor={
              <TouchableOpacity onPress={() => setvisible(true)}>
                <View style={styles.dropView}>
                  <Text style={styles.name}>Dr. Christian Wade</Text>
                  <Icon name="keyboard-arrow-down" size={24} color="#bdc3c7" />
                </View>
              </TouchableOpacity>
            }>
            <Menu.Item onPress={() => {}} title="Request Leave" />
            <Menu.Item onPress={() => {}} title="Provide Feeback" />

            <Divider />
            <Menu.Item onPress={() => {}} title="Check for Updates" />
            <Menu.Item onPress={() => {}} title="Logout " />
          </Menu>

          <Avatar.Image
            size={50}
            style={styles.avatar}
            source={{
              uri:
                'https://i.ya-webdesign.com/images/male-avatar-icon-png-7.png',
            }}
          />
          <CustomIcon name="bell" />
          <CustomIcon name="settings" />
          <CustomIcon name="magnify" />
        </View>
      </View>
      <Animated.View
        style={[
          styles.indicator,
          {
            left: indicatorTranslateX,
            backgroundColor: colors.accent,
            width: indicatorWidth,
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  indicator: {
    height: 3,
    elevation: 2,
    position: 'absolute',
    bottom: 0,
  },
  tabView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#bdc3c7',
  },
  tab: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },

  sideMenu: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginHorizontal: 24,
  },
  avatar: { marginHorizontal: 16, marginLeft: 36 },
  icon: { marginHorizontal: 24 },
  tabTxt: { fontSize: 16, fontWeight: 'bold' },
  dropView: { flexDirection: 'row', justifyContent: 'center' },
  name: { fontSize: 16 },
});

export default withTheme(TabBar);
