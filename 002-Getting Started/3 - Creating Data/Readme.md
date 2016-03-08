# CREATING DATA
- Creating a simple data
- keys and values

var info = {
	"full_name":"Sivaprabu Ganesan",
	"designation":"Senior Programmer",
	"qty" : 3
}

- Multiple values separated with comma
- White space for clarity.
- No quotes on Numbers, true, false, null.


#### Retrieving values

var info = {
	"full_name":"Sivaprabu Ganesan",
	"designation":"Senior Programmer",
	"qty" : 3
}

- Normally access through . notation
	console.log(info.age) => 3

- You can also use the [] notation
	console.log(info["full_name"]) => Sivaprabu Ganesan

#### List created with brackets

var info = {
    "full_name": "Ray Villalobos",
    "links": [{
        "blog": "http://iviewsource.com"
    }, {
        "facebook": "http://facebook.com/iviewsource"
    }, {
        "youtube": "http://www.youtube.com/planetoftheweb"
    }, {
        "podcast": "http://feeds.feedburner.com/authoredcontent"
    }, {
        "twitter": "http://twitter.com/planetoftheweb"
    }],
    "title": "Staff Author"
};


- Accessed via an index number
- console.log(info.links[0])