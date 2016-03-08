# JSON VS JAVA SCRIPT OBJECTS

#### JSON TYPE
- Key words always in " " only.
- JSON keys wrapped in "quotes"
- JSON  keys can be any valid string.
- JSON values have to be one of six data types.
	- strings
	- numbers
	- objects
	- arrays
	- booleans
	- null

#### JAVASCRIPT OBJECT TYPE
- Quotes on keys not necessary.
- Javascript object can be any data type.


#### Parsing

- var info = JSON.parse(info);
- var infostring = JSON.stringify(info);
- console.log(infostring);

- JSON has to be parsed into JavaScript.
- Can be done using eval( ' ( ' + data + ' ) ' ); or JSON.parse()

- JSON.stringify() does the opposity of JSON.parse()
- using jQuery is easy for using JSON
