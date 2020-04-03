import React from 'react';
import DeviceInfo from 'react-native-device-info';

export default function Renderer({ Mobile, Tablet }) {
  return DeviceInfo.isTablet() ? <Tablet /> : <Mobile />;
}
