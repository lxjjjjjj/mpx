const convertModes = {
  'wx-ali': 'wxToAli',
  'wx-web': 'wxToWeb',
  'wx-swan': 'wxToSwan',
  'wx-qq': 'wxToQq',
  'wx-tt': 'wxToTt',
  'wx-jd': 'wxToJd',
  'wx-dd': 'wxToDd',
  'wx-ks':'wxToKs'
}

export function getConvertMode (srcMode) {
  console.log('__mpx_mode__',__mpx_mode__)
  return convertModes[srcMode + '-' + __mpx_mode__]
}
