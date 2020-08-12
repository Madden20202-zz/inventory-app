// Provide a "Product" object 

export class Product {

    constructor(
        public sku: string,
        public name: string,
        public imageUrl: string,
        public department: string[], //why add the brackets?
        public price: number
    ) {
        //Code to use these variables will come in later!
    }

}