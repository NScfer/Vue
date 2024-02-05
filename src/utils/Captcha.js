export const getCaptcha = (captchalength = 4) => {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const codeLength = captchalength;
  let randomStr = '';
  for (let i = 0; i < codeLength; i++) {
    const index = Math.floor(Math.random() * chars.length);
    randomStr += chars[index];
  }
  return randomStr;
}