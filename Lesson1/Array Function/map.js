/* 
Function này được sử dụng với mục đích để “biến đổi” các phần tử trong mảng 
theo một “công thức” nhất định mà không thay đổi giá trị của mảng ban đầu
 */

const arr = [1, 2, 3]

// const arr2 = arr.map(
// 	item => {
// 		return item * 2
// 	}
// )

const arr2 = []
for (let i = 0; i < arr.length; i++) {
	arr2.push(arr[i] * 2)
}

console.log(arr2)
console.log(arr)
