# MODIFY ARRAYS

- use for delete the variable in an array()
	- console.log(delete(info.company));

- Delete an inner array
	- console.log(delete(info.links[2]));

#### Using the above method not delete properly use [splice](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

-   console.log(info.links.splice(1, 1));

#### Using [push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) method to add a value in an array.

- console.log(info.links.push({"courses": "http://annauniv.edu"}));

