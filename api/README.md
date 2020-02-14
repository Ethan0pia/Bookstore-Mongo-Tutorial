Bookstore API V1
----
uses MongoDB, NodeJS, and RESTful API

get '/' - Returns "Please use /api/v1/ to use."

Base 'http://localhost:3000/api/v1/'

get '/genres' - returns an array of genre json objects.
	Example response:
	```
		[{"_id":"5be4a2798e6334ce6baee827","name":"Thriller","create_date":"2018-11-09T19:06:42.278Z"}]
	```
post '/genres' - adds a new genre to the list. Requires a "name" field. Returns the new genre json object.
	Example input:
	```
		{"name":"Romance"}
	```
	Example output:
	```
		{"_id":"5be5b26bcf34db25504b0bb4","name":"Romance","create_date":"2018-11-09T16:14:35.845Z","__v":0}
	```

put '/genres/{id}' - edits an existing genre. Requires the id of the genre. Requires one or more of these fields: "name". Returns the edited genre json object.
	Example input:
	```
		{"name":"Romances"}
	```
	Example output:
	```
		{"_id":"5be5b26bcf34db25504b0bb4","name":"Romances","create_date":"2018-11-09T16:14:35.845Z","__v":0}
	```

delete '/genre/{id}' - deletes the genre with the correct id. Requires the id of the genre to delete.


get '/books' - returns an array of book json objects.
	Example response:
	```
		[{"_id":"5be5aa15f19f9bc9fbe9001c","title":"The Murder House","genre":"Suspense","description":"A book about stuff.","author":"James Patterson","publisher":"Penguin Books","pages":"480","image_url":"https://goo.gl/jtN4QF","buy_url":"https://goo.gl/jtN4QF","create_date":"2018-11-09T19:13:45.865Z"}]
	```
post '/books' - adds a new book to the list. Requires "author","title", and "genre" fields with optional "description", "publisher", "pages", "image_url", and "buy_url" fields. Returns the new book json object.
	Example input:
	```
		{"title":"The Murder House","genre":"Suspense","description":"A book about stuff.","author":"James Patterson","publisher":"Penguin Books","pages":"480","image_url":"https://goo.gl/jtN4QF","buy_url":"https://goo.gl/jtN4QF"}
	```
	Example output:
	```
		{"_id":"5be5aa15f19f9bc9fbe9001c","title":"The Murder House","genre":"Suspense","description":"A book about stuff.","author":"James Patterson","publisher":"Penguin Books","pages":"480","image_url":"https://goo.gl/jtN4QF","buy_url":"https://goo.gl/jtN4QF","create_date":"2018-11-12T15:44:07.460Z"}
	```

put '/books/{id}' - edits an existing book. Requires the id of the book. Request must include one or more of: "author", "title", "genre", "description", "publisher", "pages", "image_url", or "buy_url". Returns the edited genre json object.
	Example input:
	```
		{"title":"A Horror House"}
	```
	Example output:
	```
		{"_id":"5be5aa15f19f9bc9fbe9001c","title":"A Horror House","genre":"Suspense","description":"A book about stuff.","author":"James Patterson","publisher":"Penguin Books","pages":"480","image_url":"https://goo.gl/jtN4QF","buy_url":"https://goo.gl/jtN4QF","create_date":"2018-11-12T15:44:07.460Z"}
	```

delete '/book/{id}' - deletes the book with the correct id. Requires the id of the book to delete.

