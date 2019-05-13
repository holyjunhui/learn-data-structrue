
// 栈的实现
function stack(){
	var items = []
	this.push = function(e){
		items.push(e)
	}

	this.pop = function() {
		return items.pop()
	}
	this.peek = function(){
		return items[items.length - 1]
	}
	this.isEmpty = function(){
		return items.length === 0
	}
	this.size = function(){
		return items.length
	}
	this.clear =function(){
		items =[]
	}
	this.print = function(){
		console.log("items",items.toString())
	}
}

function divi(decNumber){
	var arr = new stack()
	var rem,binarySum = '';
	while(decNumber>0){
		rem = Math.floor(decNumber%2)
		arr.push(rem)
		decNumber = Math.floor(decNumber/2)
	}
	while(!arr.isEmpty()){
		binarySum += arr.pop().toString()
	}
	return binarySum;
}

console.log("arr",divi(233))
console.log("aaa",divi(10))


function Queue(){
	var item = []

	this.enqueue = function(v){
		item.push(v)
	}
	this.dequeue = function(){
		return item.shift()
	}
	this.front = function(){
		return item[0]
	}
	this.isEmpty = function(){
		return item.length === 0
	}
	this.size = function(){
		return item.length
	}
	this.clear = function(){
		item = []
	}
	this.print = function(){
		console.log("item",item.toString())
	}
}

var queue  = new Queue()

console.log("isEmpty",queue.isEmpty())
console.log("enqueue",queue.enqueue('lijunhui'))
console.log("dequeue",queue.enqueue('lijunhuisss'))
console.log("333",queue.print())

// function PriorityQueue(){
// 	var items = []
// 	function QueueElement(element, priority){
// 		this.element = element;
// 		this.priority = priority;
// 	}
// 	this.enqueue = function(element,priority){
// 		var queueElement = new QueueElement(element,priority)

// 		console.log("this.isEmty",queueElement)
// 		if(this.isEmpty()){
// 			// console.log("22")
// 			items.push(queueElement)
// 		}else{
// 			var added = false;
// 			// debugger
// 			// console.log("items",items.toString)
// 			for(var i =0;i<items.length;i++){
// 					console.log("items111111",items.length)
// 				if(queueElement.priority < items[i].priority){
// 					items.splice(i,0,queueElement)
// 					added = true;
// 					break
// 				}
// 			}
// 			if(!added){
// 				items.push(queueElement)
// 			}
// 		}

// 	}
// 		this.isEmpty = function(){
// 		return items.length === 0
// 	}
// 	this.print = function(){
// 		console.log("priorityQueue",items.toString())
// 	}
// }

// var priorityQueue = new PriorityQueue()

// priorityQueue.enqueue("john",2);
// priorityQueue.enqueue("faa",1);
// priorityQueue.enqueue("lijunhi",3);
// priorityQueue.print()

function circleQueue(namelist,num){

	var queue = new Queue()
	for(var i=0;i<namelist.length;i++){
		queue.enqueue(namelist[i])
	}

	var eliminated =''
	while(queue.size()>1){
			for(var i=0;i<num;i++){

				queue.enqueue(queue.dequeue())
							console.log("loglog",queue.size())

			}
			console.log('quequeu',queue.print())
			eliminated = queue.dequeue()
			console.log(eliminated+ '淘汰了')
	}
	return queue.dequeue()
}


var name = ['johb','jack','camila','inrg','carl']

var winner = circleQueue(name,7)
console.log("wininer",winner)