export default function textInitials(text) {
  if (text.includes('@')) {
    return text.substring(0, 2).toUpperCase()
  }

  const newText = text.split(' ')
  return (newText[0].substring(0, 1) + newText[1].substring(0, 1)).toUpperCase()
}
