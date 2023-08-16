
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(!matrix){
        return []
    }
    let newArr = []
    matrix.map((item, index) => {
        if(index % 2 !== 0){
            newArr.push(...item.reverse())
        } else {
            newArr.push(...item)
        }
    })
    return newArr
}
