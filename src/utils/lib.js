export const resize = (image, option) => {
  var imageService = '//img2.storyblok.com/'
  var path = image.replace('//a.storyblok.com', '')
  return imageService + option + path
}

export const driverType = value => {
  switch (value) {
    case 'D':
      return 'dynamic'
    case 'BA':
      return 'balanced armature'
    case 'PM':
      return 'planar magnetic'
    case 'E':
      return 'electrostatic'
    case 'BC':
      return 'bone conduction'
    default:
      return 'Unknown'
  }
}

export const backType = value => {
  switch (value) {
    case 'open':
      return 'open back'
    case 'semi':
      return 'semi open'
    case 'closed':
      return 'closed back'
    default:
      return 'Unknown'
  }
}
