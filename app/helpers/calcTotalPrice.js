export const calcTotalPrice = items =>
	items.reduce((acc, i) => (acc += Number(i.price)), 0)
