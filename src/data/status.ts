export default interface StatusDescription {
  name: string,
  colorScheme: string,
}

export const opensource = {
  name: 'Open Source',
  colorScheme: 'green',
};
export const inprogress = {
  name: '(In Progress)',
  colorScheme: 'orange',
};
export const privaterepo = {
  name: 'Private Repo',
  colorScheme: 'red',
};
