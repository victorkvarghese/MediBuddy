/*
 * Reducer actions related with navigation
 */
import NavigationService from 'app/navigation/NavigationService';

export function resetToHome(params) {
  NavigationService.reset('Home', params);
}
