hello = ->
	console.log('hello world!!!!!!')
hello()

square = (x) -> x * x

fib = (n) ->
	if n < 2
		n
	else
		fib(n - 1) + fib(n - 2)

pos =
	x: 100
	y: 200
	dump: ->
		console.log(111)

size = width: 100, height: 100

arr = ['a', 'b', 'c', 'd']
for val, i in arr
	console.log "#{i}: #{val}"

if myName?
	console.log 'yes'
else
	console.log 'no'
	
class Animal
	constructor: (name) ->
		@name = name
	say: (word) ->
		console.log "#{@name} said: #{word}"

class Dog extends Animal
	constructor: (name) ->
		super name
	say: (word) ->
		super "Bowwow, #{word}"

dog = new Dog('Bob')
dog.say('Hello!')