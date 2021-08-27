import {Platform} from 'react-native';
import {requestMultiple, PERMISSIONS} from 'react-native-permissions';

const onPermission = async () => {
  await requestMultiple([
    PERMISSIONS.ANDROID.CAMERA,
    PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
  ]).then(statuses => {
    const status = statuses;

    if (Platform.Version < 29) {
      if (
        status['android.permission.CAMERA'] &&
        status['android.permission.READ_EXTERNAL_STORAGE'] &&
        status['android.permission.WRITE_EXTERNAL_STORAGE'] === 'granted'
      ) {
        return;
      }
      return;
    }
    if (
      status['android.permission.CAMERA'] &&
      status['android.permission.READ_EXTERNAL_STORAGE'] &&
      status['android.permission.WRITE_EXTERNAL_STORAGE'] === 'granted'
    ) {
      return;
    }
    return;
  });
};

export default onPermission;
