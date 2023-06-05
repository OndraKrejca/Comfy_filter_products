export const priceFormat = (price) => {
  const newPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price / 100).toFixed(2))
  return newPrice
}

export const newItems = (name, items) => {
  let newData = items.map((item) => item[name])

  if (name === 'colors') {
    newData = newData.flat()
  }

  return ['all', ...new Set(newData)]
}
