import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { Avatar, Text, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { withTheme } from 'react-native-paper';

import GeneralStatusBar from './status-bar';
function TabBar({
  state,
  descriptors,
  navigation,
  navigationState,
  position,
  theme,
}) {
  const width = 120;
  /** Indicator transition */
  const indicatorTranslateX = Animated.interpolate(position, {
    inputRange: [0, 1, 2, 3],
    outputRange: [110, 2 * width + 24, 3 * width + 48, 4 * width + 48],
  });

  const indicatorWidth = Animated.interpolate(position, {
    inputRange: [0, 1, 2, 3],
    outputRange: [140, 140, 100, 100],
  });

  const { colors } = theme;

  const CustomIcon = ({ name, onPress }) => {
    return (
      <TouchableOpacity style={{ marginHorizontal: 12 }} onPress={onPress}>
        <Icon name={name} size={28} color="#bdc3c7" />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <GeneralStatusBar backgroundColor="#ffff" />
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          alignItems: 'center',
        }}>
        <Avatar.Image
          size={50}
          style={{ marginHorizontal: 24 }}
          source={{
            uri: 'https://i.ya-webdesign.com/images/male-avatar-icon-png-7.png',
          }}
        />

        {state.routes.map((route, index) => {
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
            <TouchableOpacity
              key={index}
              style={{
                height: 70,
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 24,
              }}
              onPress={onPress}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color:
                    index === navigationState.index ? colors.accent : '#bdc3c7',
                }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}

        <View
          style={{
            flex: 1,
            flexDirection: 'row-reverse',
            alignItems: 'center',
            marginHorizontal: 24,
          }}>
          <Text style={{ fontSize: 16 }}>Dr. Christian Wade</Text>
          <Avatar.Image
            size={50}
            style={{ marginHorizontal: 16, marginLeft: 36 }}
            source={{
              uri:
                'https://i.ya-webdesign.com/images/male-avatar-icon-png-7.png',
            }}
          />
          <CustomIcon name="notifications" />
          <CustomIcon name="settings" />
          <CustomIcon name="search" />
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
    height: 2,
    elevation: 2,
    position: 'absolute',
    bottom: 0,
  },
});

export default withTheme(TabBar);
