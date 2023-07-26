export const calcDiscountedPrice = (price: number, dicount: number) => {
  if (!dicount) return price.toFixed(2)

  const discountAmount = price * (dicount / 100)
  const finalPrice = price - discountAmount

  const formattedPrice = finalPrice.toFixed(2)
  return formattedPrice
}
