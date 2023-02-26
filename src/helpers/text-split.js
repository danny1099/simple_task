export function textSplit(text) {
  if (text.includes('@')) {
    return text.split('@')[0]
  }

  return text.split(' ')[0]
}
