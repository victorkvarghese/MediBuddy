import * as React from 'react';

// NavigationConatiner is refered here - Check NavigationStack
export const navigationRef = React.createRef();

function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

function reset(name, params) {
  navigationRef.current?.reset({
    index: 0,
    routes: [{ name, params }],
  });
}

function goBack() {
  navigationRef.current?.goBack();
}

export default {
  navigate,
  reset,
  goBack,
};
