

export default function Product(docProduct){
    // {id: doc.id, name: doc.data().name, price: doc.data().price}
    this.document = docProduct;
    this.id = docProduct.id;
    this.name = docProduct.data().name;
    this.price = docProduct.data().price;

    this.getId = function(){
        return this.id;
    }

    this.setName = function(name){
        this.name = name
    }

    this.getName = function(){
        
        return this.name;
    }

    this.setPrice = function(price){
        this.price = price;
    }

    this.getPrice = function(){
        console.log('log - get price is', this.price);
        return this.price
    }

    this.getDocument = function(){
        return this.document
    }
}

