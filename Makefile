.SUFFIXES: .coffee .js

all: current-visitors-common.js current-visitors-server.js

clean:
	rm current-visitors-common.js current-visitors-server.js

doc:
	coffeedoc -o docs .

.coffee.js:
	coffee -c $^
