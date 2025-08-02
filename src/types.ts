export type User = {
    _id: string;
    email: string; 
    name: string;
    addressLine1: string;
    city: string;
    country: string;
};

//this define the type of the body
export type Book = {
    _id: string,
    user: string,
    name: string,
    price: number,
    genres: string[],
    description: string,
    author: string,
    city: string,
    country: string,
    shippingCost: number,
    estimatedShippingTime: number,
    condition: string,
    imageUrl: string,
    lastUpdated: string,


}

export type CartItem = {
    book: Book;
    quantity: number;
}

export type Cart = {
    user: string,
    items: CartItem[];
}


export type BookSearchResponse = {
    data: Book[];
    pagination: {
        total: number,
        page: number,
        pages: number,
    }
}

// user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
//     name: { type: String, required: true},
//     price: {type: Number, required: true},
//     genres: [{type: String, required: true}],
//     description: {type:String, required:true},
//     author:{type: String},
//     city: { type: String, required: true},
//     country: { type: String, required: true},
//     shippingCost: { type: Number, required: true},
//     estimatedShippingTime: { type: Number, required: true},
//     imageUrl: {type: String,required:true},
//     condition: { type: String, enum: ['new', 'like new', 'very good', 'good', 'acceptable'], required: true },
//     lastUpdated: {type: Date},