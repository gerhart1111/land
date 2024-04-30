export const getInitialsFromName = (name: string) => {
  if (!name) return '';
  const nameParts = name.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts[1];
  return firstName.charAt(0) + lastName.charAt(0);
} 