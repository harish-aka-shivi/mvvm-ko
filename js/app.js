var cats = [
	{
		clickCount:0,
		name : "Taabby",
		imageSrc: "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426s",
		nickNames:[
			'pinky','rinki','dimpi'
		]
	},
	{
		clickCount:0,
		name : "Taabby",
		imageSrc: "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426s",
		nickNames:[
			'pinky','rinki'
		]
	},
	{
		clickCount:0,
		name : "Taabby",
		imageSrc: "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426s",
		nickNames:[
			'pinky',
		]
	},
	{
		clickCount:0,
		name : "Taabby",
		imageSrc: "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426s",
		nickNames:[
			'kinki'
		]
	}
]

var ViewModel = function() {
	var self = this;

	this.catList = ko.observableArray([]);

	cats.forEach(function(catItem) {
		self.catList.push(new Cat(catItem))
	})

	this.currentCat = ko.observable(this.catList()[0]);

	self.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1) // as called from html with Cat bindiin context
		// self.currentCat().clickCount(self.currentCat().clickCount() + 1)
	}

	self.setCat = function(clickedCat) {
		console.debug('click')

		self.currentCat(this) 
	}

}


var Cat = function(cat) {
	this.clickCount = ko.observable(0);
	this.name = ko.observable(cat.name);
	this.imgSrc = ko.observable(cat.imageSrc);
	this.nickNames = ko.observableArray(cat.nickNames);
	
}

ko.applyBindings(new ViewModel())