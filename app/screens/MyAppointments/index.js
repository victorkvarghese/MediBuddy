import React from 'react';
import MobileAppointments from './index.mobile';
import TabletAppointments from './index.tablet';

import Renderer from 'app/components/Renderer';

export default function MyAppointments(props) {
  return <Renderer Mobile={MobileAppointments} Tablet={TabletAppointments} />;
}
