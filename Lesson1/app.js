let arr = [1, 2, 3, 4, 5]
arr.map(item => {
	if (item % 2 === 0) {
		return item
	}
	return item * 2
})

console.log(arr)
