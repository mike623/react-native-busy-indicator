import { DeviceEventEmitter } from 'react-native';

const loaderHandler = {
  hideLoader () {
    DeviceEventEmitter.emit('changeLoadingEffect', {isVisible: false});
  },
  showLoader (title, option) {
    DeviceEventEmitter.emit('changeLoadingEffect', {title, isVisible: true, ...option});
  }
};

module.exports = loaderHandler;
