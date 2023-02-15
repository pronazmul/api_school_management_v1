const DeviceDetector = require('node-device-detector')
const detector = new DeviceDetector({
  clientIndexes: true,
  deviceIndexes: true,
  deviceAliasCode: false,
})

const detectDevice = (agent) => {
  const { os = {}, client = {}, device = {} } = detector.detect(agent)

  const operatingSystem = os?.name || ''
  const browser = client?.name || ''
  const deviceType = device?.type || ''
  const deviceBrand = device?.brand || ''

  const deviceInfo = `${operatingSystem} ${browser} ${deviceType} ${deviceBrand}`

  return deviceInfo
}

module.exports = detectDevice
