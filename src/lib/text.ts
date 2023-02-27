export const pluralize = ({
  count,
  noun,
  suffix = 's',
}: {
  count: number
  noun: string
  suffix?: string
}) => `${count} ${noun}${count !== 1 ? suffix : ''}`
