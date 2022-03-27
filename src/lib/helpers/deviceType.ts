import UAParser from 'ua-parser-js';

export default {
  isMobile() {
    const parser = new UAParser();
    const deviceInfo = parser.getDevice();

    if (!deviceInfo || !deviceInfo.type) {
      return false;
    }

    return deviceInfo.type === 'mobile';
  },

  isTablet() {
    const parser = new UAParser();
    const deviceInfo = parser.getDevice();

    if (!deviceInfo || !deviceInfo.type) {
      return false;
    }

    return deviceInfo.type === 'tablet';
  }
};
