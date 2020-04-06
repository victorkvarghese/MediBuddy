/*
 * Reducer actions related with login
 */
import * as types from './types';

export function appointmentSelected(selectedID) {
  return {
    type: types.APPOINTMENT_SELECTED,
    selectedID,
  };
}
