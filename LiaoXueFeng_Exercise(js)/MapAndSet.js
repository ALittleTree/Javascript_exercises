/*map就是dictionary，set就是key的集合不能重复。*/
var m = new Map(); // 空Map
m.set('Adam', 67); // 添加新的key-value
m.set('Bob', 59);
m.has('Adam'); // 是否存在key 'Adam': true
m.get('Adam'); // 67
m.delete('Adam'); // 删除key 'Adam'
m.get('Adam'); // unde
/***************************/
/*Set

Set和Map类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在Set中，没有重复的key。

要创建一个Set，需要提供一个Array作为输入，或者直接创建一个空Set：*/

var s1 = new Set(); // 空Set
var s2 = new Set([1, 2, 3]); // 含1, 2, 3
//重复元素在Set中自动被过滤：

var s = new Set([1, 2, 3, 3, '3']);
console.log("1"); // Set {1, 2, 3, "3"}
//注意数字3和字符串'3'是不同的元素。

//通过add(key)方法可以添加元素到Set中，可以重复添加，但不会有效果：
