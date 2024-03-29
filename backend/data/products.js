const products = [
  {
    name: 'Airpods Wireless Bluetooth Headphones',
    image: '/images/airpods.jpg',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Electronics',
    price: 49999,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: 'iPhone 11 Pro 256GB Memory',
    image: '/images/phone.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'Apple',
    category: 'Electronics',
    price: 59999,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    name: 'Cannon EOS 80D DSLR Camera',
    image: '/images/camera.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'Cannon',
    category: 'Electronics',
    price: 92999,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    name: 'APPLE Watch Series 8 GPS',
    image: '/images/Watch.jpg',
    description:
      'Apple Watch is a wearable smartwatch that allows users to accomplish a variety of tasks, including making phone calls, sending text messages and reading email',
    brand: 'Apple',
    category: 'Electronics',
    price: 45900,
    countInStock: 3,
    rating: 4.9,
    numReviews: 3,
  },
  {
    name: 'Logitech G-Series Gaming Mouse',
    image: '/images/mouse.jpg',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'Logitech',
    category: 'Electronics',
    price: 6999,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: 'Amazon Echo Dot 3rd Generation',
    image: '/images/alexa.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'Amazon',
    category: 'Electronics',
    price: 9999,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  {
    name: 'Apple Magic Wireless Keyboard',
    image: '/images/keyboard.jpg',
    description:
      'Magic Keyboard delivers a remarkably comfortable and precise typing experience It is also wireless and rechargeable, with an incredibly long-lasting internal battery that will power your keyboard for about a month or more between charges',
    brand: 'Dell',
    category: 'Electronics',
    price: 2199,
    countInStock: 5,
    rating: 4.5,
    numReviews: 8,
  },
  {
    name: '12th Gen Intel® Core™ i7 DELL Inspiron 16',
    image: '/images/Laptop.jpg',
    description:
      'Dell Inspiron 16 7610 Laptop Intel Core I7 -11800H Gaming Processor 16 Inches 3K 3072 X 1920 Qhd 16 Gb Ram 1Tb Ssd Nvidia 4Gb Rtx 3050 Gaming Graphics Windows 11+ Ms Office H&S 2021 2.1Kg.',
    brand: 'Dell',
    category: 'Electronics',
    price: 91199,
    countInStock: 5,
    rating: 4.5,
    numReviews: 8,
  },
  {
    name: 'MI Power Bank 3i 20000mAh',
    image: '/images/Powerbank.jpg',
    description:
      'MI Power Bank 3i 20000mAh Lithium Polymer 18W Fast Power Delivery Charging | Input- Type C | Micro USB| Triple Output | Sandstone Black',
    brand: 'MI',
    category: 'Electronics',
    price: 2099,
    countInStock: 8,
    rating: 3.8,
    numReviews: 10,
  },
  {
    name: 'Sony Playstation 4 Pro White Version',
    image: '/images/playstation.jpg',
    description:
      'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
    brand: 'Sony',
    category: 'Electronics',
    price: 39999,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    name: 'HP v236w USB 2.0 64GB Pen Drive, Metal',
    image: '/images/Pendrive.jpg',
    description:
      'Durable metal Charming appearance which brings a great sense of style, Electronic plating after printing technic (Anti-fake). Other Features : Plug & Play',
    brand: 'HP',
    category: 'Electronics',
    price: 745,
    countInStock: 10,
    rating: 4.0,
    numReviews: 5,
  },
  {
    name: 'Redmi 55 inches 4K Ultra HD Android LED TV',
    image: '/images/TV.jpg',
    description:
      'Resolution: 4K Ultra HD (3840 x 2160) | Refresh Rate: 60Hz | 178 Degree Viewing angle.',
    brand: 'MI',
    category: 'Electronics',
    price: 39999,
    countInStock: 8,
    rating: 4.1,
    numReviews: 5,
  },
  {
    name: 'DJI Mini 3 | 4K/60fps Video, 48MP Photo',
    image: '/images/Drone.jpg',
    description:
      'Care-free Creation - Weighing less than 249 g, Mini 3 Pro does not require registration in most countries and regions. The foldable and compact design also makes it easy to carry on any adventure.',
    brand: 'DJI',
    category: 'Electronics',
    price: 49999,
    countInStock: 10,
    rating: 4.0,
    numReviews: 1,
  },
  {
    name: 'Apple 2023 MacBook Pro Laptop M2 Pro chip',
    image: '/images/MacBook.jpg',
    description:
      'SUPERCHARGED BY M2 PRO OR M2 MAX — Take on demanding projects with the M2 Pro or M2 Max chip. M2 Pro has up to 12 CPU cores, up to 19 GPU cores and up to 32GB unified memory.',
    brand: 'Apple',
    category: 'Electronics',
    price: 251111,
    countInStock: 1,
    rating: 4.75,
    numReviews: 2,
  },
  {
    name: 'Samsung Galaxy S22 Ultra 5G',
    image: '/images/S22.jpg',
    description:
      'The first Galaxy S with embedded S Pen. Write comfortably like pen on paper, turn quick notes into legible text and use Air Actions to control your phone remotely.',
    brand: 'Sumsung',
    category: 'Electronics',
    price: 106999,
    countInStock: 2,
    rating: 4.1,
    numReviews: 5,
  },
  {
    name: 'boAt Airdopes 131 | Wireless Earbuds',
    image: '/images/AirBuds.jpg',
    description:
      'Never lose a second with seamless Bluetooth 5.0 and Insta’ Wake n Pair, that connects your phone to your earbuds the moment they leave the charging case. Charge your tws bluetooth earphones with Type C for great speed.',
    brand: 'Boat',
    category: 'Electronics',
    price: 1099,
    countInStock: 1,
    rating: 4.6,
    numReviews: 5,
  },
];

export default products;
