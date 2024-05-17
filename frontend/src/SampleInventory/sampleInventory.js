const items = {
    womenswear: [
        { itemID: 1, name: 'Dress', price: 50, condition: 'New', description: 'Lorem ipsum...', pickupLocations: ['Location A', 'Location B'], paymentMethod: ['Cash', 'Credit Card'], sellerID: 'user123' },
        { itemID: 2, name: 'Blouse', price: 30, condition: 'New', description: 'Lorem ipsum...', pickupLocations: ['Location C'], paymentMethod: ['Cash', 'PayPal'], sellerID: 'user456' },
        { itemID: 3, name: 'Skirt', price: 40, condition: 'New', description: 'Lorem ipsum...', pickupLocations: ['Location D'], paymentMethod: ['Credit Card', 'Venmo'], sellerID: 'user789' },
        { itemID: 4, name: 'Jeans', price: 60, condition: 'New', description: 'Lorem ipsum...', pickupLocations: ['Location E'], paymentMethod: ['Cash', 'Credit Card'], sellerID: 'user1011' },
    ],
    menswear: [
        { itemID: 5, name: 'Shirt', price: 35, condition: 'New', description: 'Lorem ipsum...', pickupLocations: ['Location F'], paymentMethod: ['Cash', 'PayPal'], sellerID: 'user1213' },
        { itemID: 6, name: 'Pants', price: 45, condition: 'New', description: 'Lorem ipsum...', pickupLocations: ['Location G'], paymentMethod: ['Cash', 'Credit Card'], sellerID: 'user1415' },
        { itemID: 7, name: 'Jacket', price: 60, condition: 'New', description: 'Lorem ipsum...', pickupLocations: ['Location H'], paymentMethod: ['Cash', 'PayPal'], sellerID: 'user1617' },
        { itemID: 8, name: 'Sweater', price: 50, condition: 'New', description: 'Lorem ipsum...', pickupLocations: ['Location I'], paymentMethod: ['Credit Card', 'Venmo'], sellerID: 'user1819' },
    ],
    homegoods: [
        { itemID: 9, name: 'Chair', price: 100, condition: 'New', description: 'Lorem ipsum...', pickupLocations: ['Location J'], paymentMethod: ['Cash', 'Credit Card'], sellerID: 'user2021' },
        { itemID: 10, name: 'Table', price: 150, condition: 'New', description: 'Lorem ipsum...', pickupLocations: ['Location K'], paymentMethod: ['Cash', 'PayPal'], sellerID: 'user2223' },
        { itemID: 11, name: 'Lamp', price: 50, condition: 'New', description: 'Lorem ipsum...', pickupLocations: ['Location L'], paymentMethod: ['Credit Card', 'Venmo'], sellerID: 'user2425' },
        { itemID: 12, name: 'Sofa', price: 300, condition: 'New', description: 'Lorem ipsum...', pickupLocations: ['Location M'], paymentMethod: ['Cash', 'Credit Card'], sellerID: 'user2627' },
    ],
    electronics: [
        { itemID: 13, name: 'TV', price: 800, condition: 'New', description: 'Lorem ipsum...', pickupLocations: ['Location N'], paymentMethod: ['Cash', 'PayPal'], sellerID: 'user2829' },
        { itemID: 14, name: 'Laptop', price: 1000, condition: 'New', description: 'Lorem ipsum...', pickupLocations: ['Location O'], paymentMethod: ['Cash', 'Credit Card'], sellerID: 'user3031' },
        { itemID: 15, name: 'Smartphone', price: 700, condition: 'New', description: 'Lorem ipsum...', pickupLocations: ['Location P'], paymentMethod: ['Credit Card', 'Venmo'], sellerID: 'user3233' },
        { itemID: 16, name: 'Headphones', price: 200, condition: 'New', description: 'Lorem ipsum...', pickupLocations: ['Location Q'], paymentMethod: ['Cash', 'PayPal'], sellerID: 'user3435' },
    ],
    accessories: [
        { itemID: 17, name: 'Watch', price: 300, condition: 'New', description: 'Lorem ipsum...', pickupLocations: ['Location R'], paymentMethod: ['Cash', 'Credit Card'], sellerID: 'user3637' },
        { itemID: 18, name: 'Bag', price: 150, condition: 'New', description: 'Lorem ipsum...', pickupLocations: ['Location S'], paymentMethod: ['Cash', 'PayPal'], sellerID: 'user3839' },
        { itemID: 19, name: 'Sunglasses', price: 100, condition: 'New', description: 'Lorem ipsum...', pickupLocations: ['Location T'], paymentMethod: ['Credit Card', 'Venmo'], sellerID: 'user4041' },
        { itemID: 20, name: 'Hat', price: 25, condition: 'New', description: 'Lorem ipsum...', pickupLocations: ['Location U'], paymentMethod: ['Cash', 'Credit Card'], sellerID: 'user4243' },
    ],
    misc: [
        { itemID: 21, name: 'Book', price: 20, condition: 'New', description: 'Lorem ipsum...', pickupLocations: ['Location V'], paymentMethod: ['Cash', 'PayPal'], sellerID: 'user4445' },
        { itemID: 22, name: 'Toy', price: 15, condition: 'New', description: 'Lorem ipsum...', pickupLocations: ['Location W'], paymentMethod: ['Cash', 'Credit Card'], sellerID: 'user4647' },
        { itemID: 23, name: 'Game', price: 40, condition: 'New', description: 'Lorem ipsum...', pickupLocations: ['Location X'], paymentMethod: ['Credit Card', 'Venmo'], sellerID: 'user4849' },
        { itemID: 24, name: 'Art', price: 50, condition: 'New', description: 'Lorem ipsum...', pickupLocations: ['Location Y'], paymentMethod: ['Cash', 'PayPal'], sellerID: 'user5051' },
    ],
};


const filters = {
    womenswear: ['Dresses', 'Tops', 'Bottoms', 'Outerwear', 'Activewear', 'Shoes'],
    menswear: ['Tops', 'Bottoms', 'Outerwear', 'Activewear', 'Shoes'],
    "home goods": ['Kitchen', 'Living Room', 'Office', 'Bedroom', 'Outdoors', 'Bathroom'],
    electronics: ['PC and Laptops', 'Tablets', 'Monitors', 'Keyboards', 'Mice', 'Headphones', 'Earphones', 'Calculators', 'Cameras', 'Printers'],
    accessories: ['Hats', 'Jewelry', 'Bags', 'Eyewear', 'Wallets'],
    misc: ['Office Supplies',' Books', 'Exercise Equipment', 'Board Games', 'Puzzles', 'Art Supplies'],
};

export { items, filters };
