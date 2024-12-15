export function getDaysLeft(endDate: string) {
  if (!checkIsValidDate(endDate)) return ''
  const now = new Date()
  const endDay = new Date(endDate)
  const diff = endDay.getTime() - now.getTime()
  const result = Math.floor(diff / (1000 * 60 * 60 * 24))
  return result > 0 ? result : 0
}

export function checkIsValidDate(date: string) {
  return Date.parse(date) ? true : false
}
