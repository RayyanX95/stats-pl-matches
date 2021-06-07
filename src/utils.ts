export const dateStringToDate = (dataString: string): Date => {
  // 28/10/2018 =>  ['28', '10', '2018'] => [28, 10, 2018]
  const dataParts = dataString
    .split('/')
    .map(value => parseInt(value));

  return new Date(dataParts[2], dataParts[1] - 1, dataParts[0]);
}