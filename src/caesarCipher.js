export default function caesarCipher(str, shift) {
  let encode = ''

  for (let ch of str.toLowerCase()) {
    if (ch.match(/[a-z]/i)) {
      let ascii = (ch.charCodeAt() - 'a'.charCodeAt() + shift) % 26
      ascii += ascii < 0 ? 26 : 0
      ch = String.fromCharCode(ascii + 'a'.charCodeAt())
    }
    encode += ch
  }
  return encode
}
