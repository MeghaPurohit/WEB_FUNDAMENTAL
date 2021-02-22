var app = new Vue({
el: '#app',
data :{
	product:'Socks',
	selectedvariant:0,
	alttext:'apair of socks',
	details:["80% cotton","20% polyster","Gender-neutral"],
	variants:[{variantId:2234,
				variantcolor:"green",
				variantImage:"images/vmSocks-green.jpg",
				variantQty:10
				},
				{variantId:2235,
				variantcolor:"blue",
				variantImage:"images/vmSocks-blue.jpg",
				variantQty:0
				}],
	cart:0
	},
methods:
{
	addTocart: function(){
		this.cart+=1
	},
	updateProduct: function(index){
		this.selectedvariant=index
	}
},
computed: {
		image(){
			return this.variants[this.selectedvariant].variantImage
		},
		instock(){ 
			return this.variants[this.selectedvariant].variantQty
		}
	}
}) 