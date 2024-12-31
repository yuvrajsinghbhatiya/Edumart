const Product = require("../models/Product");

const products = [
  {
    "_id": "677233a953e04d0721c7192b",
    "title": "Educational Robot Kit",
    "description": "Educational Robot Kit offers cutting-edge technology to enhance your learning experience, combining functionality and ease of use.",
    "price": 195,
    "discountPercentage": 12.177393169410383,
    "stockQuantity": 150,
    "brand": "65a7e20102e12c44f59943db",
    "category": "65a7e24602e12c44f599442d",
    "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.153Z"
  },
  {
    "_id": "677233a95de89f250793a695",
    "title": "Smart Whiteboard",
    "description": "Smart Whiteboard offers cutting-edge technology to enhance your learning experience, combining functionality and ease of use.",
    "price": 896,
    "discountPercentage": 21.7249130194235,
    "stockQuantity": 78,
    "brand": "65a7e20102e12c44f59943db",
    "category": "65a7e24602e12c44f599442d",
    "thumbnail": "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a91100a9b5d2b158cd",
    "title": "Digital Learning Tablet",
    "description": "Digital Learning Tablet offers cutting-edge technology to enhance your learning experience, combining functionality and ease of use.",
    "price": 306,
    "discountPercentage": 17.130195408830563,
    "stockQuantity": 94,
    "brand": "65a7e20102e12c44f59943db",
    "category": "65a7e24602e12c44f599442d",
    "thumbnail": "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a93f8212c96b82d924",
    "title": "Literature Anthology",
    "description": "Literature Anthology is a comprehensive guide designed for students and enthusiasts, packed with clear explanations and real-world applications.",
    "price": 38,
    "discountPercentage": 14.6978527153073,
    "stockQuantity": 169,
    "brand": "65a7e20102e12c44f59943da",
    "category": "65a7e24602e12c44f599442c",
    "thumbnail": "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a946c89ee337c6127d",
    "title": "Literature Anthology",
    "description": "Literature Anthology is a comprehensive guide designed for students and enthusiasts, packed with clear explanations and real-world applications.",
    "price": 36,
    "discountPercentage": 10.278944541508126,
    "stockQuantity": 149,
    "brand": "65a7e20102e12c44f59943da",
    "category": "65a7e24602e12c44f599442c",
    "thumbnail": "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a99f01b966dec45a68",
    "title": "Scientific Calculator Pro",
    "description": "Scientific Calculator Pro offers cutting-edge technology to enhance your learning experience, combining functionality and ease of use.",
    "price": 112,
    "discountPercentage": 18.341454737554983,
    "stockQuantity": 152,
    "brand": "65a7e20102e12c44f59943db",
    "category": "65a7e24602e12c44f599442d",
    "thumbnail": "https://cdn.dummyjson.com/product-images/6/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a9fef6257559bdbaac",
    "title": "Advanced Mathematics Textbook",
    "description": "Advanced Mathematics Textbook is a comprehensive guide designed for students and enthusiasts, packed with clear explanations and real-world applications.",
    "price": 72,
    "discountPercentage": 17.686486722082687,
    "stockQuantity": 26,
    "brand": "65a7e20102e12c44f59943da",
    "category": "65a7e24602e12c44f599442c",
    "thumbnail": "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a99fc2671bbd8d0f12",
    "title": "Smart Whiteboard",
    "description": "Smart Whiteboard offers cutting-edge technology to enhance your learning experience, combining functionality and ease of use.",
    "price": 893,
    "discountPercentage": 12.468243566228095,
    "stockQuantity": 121,
    "brand": "65a7e20102e12c44f59943db",
    "category": "65a7e24602e12c44f599442d",
    "thumbnail": "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a93f71912a07ccb307",
    "title": "Literature Anthology",
    "description": "Literature Anthology is a comprehensive guide designed for students and enthusiasts, packed with clear explanations and real-world applications.",
    "price": 59,
    "discountPercentage": 9.390661096618436,
    "stockQuantity": 22,
    "brand": "65a7e20102e12c44f59943da",
    "category": "65a7e24602e12c44f599442c",
    "thumbnail": "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a91054f0f4de23d7d1",
    "title": "Digital Learning Tablet",
    "description": "Digital Learning Tablet offers cutting-edge technology to enhance your learning experience, combining functionality and ease of use.",
    "price": 305,
    "discountPercentage": 14.195638113173587,
    "stockQuantity": 22,
    "brand": "65a7e20102e12c44f59943db",
    "category": "65a7e24602e12c44f599442d",
    "thumbnail": "https://cdn.dummyjson.com/product-images/10/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a92b9608c950be849d",
    "title": "Smart Whiteboard",
    "description": "Smart Whiteboard offers cutting-edge technology to enhance your learning experience, combining functionality and ease of use.",
    "price": 896,
    "discountPercentage": 20.50026627666489,
    "stockQuantity": 87,
    "brand": "65a7e20102e12c44f59943db",
    "category": "65a7e24602e12c44f599442d",
    "thumbnail": "https://cdn.dummyjson.com/product-images/11/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a96b0ab83ddff6a718",
    "title": "Chemistry Laboratory Manual",
    "description": "Chemistry Laboratory Manual is a comprehensive guide designed for students and enthusiasts, packed with clear explanations and real-world applications.",
    "price": 52,
    "discountPercentage": 16.052869340403845,
    "stockQuantity": 68,
    "brand": "65a7e20102e12c44f59943da",
    "category": "65a7e24602e12c44f599442c",
    "thumbnail": "https://cdn.dummyjson.com/product-images/12/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a9bd23c5f8332f200e",
    "title": "Advanced Mathematics Textbook",
    "description": "Advanced Mathematics Textbook is a comprehensive guide designed for students and enthusiasts, packed with clear explanations and real-world applications.",
    "price": 87,
    "discountPercentage": 5.8542132854387745,
    "stockQuantity": 105,
    "brand": "65a7e20102e12c44f59943da",
    "category": "65a7e24602e12c44f599442c",
    "thumbnail": "https://cdn.dummyjson.com/product-images/13/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a9046ed22dce8e5c4d",
    "title": "Literature Anthology",
    "description": "Literature Anthology is a comprehensive guide designed for students and enthusiasts, packed with clear explanations and real-world applications.",
    "price": 55,
    "discountPercentage": 22.28873893746195,
    "stockQuantity": 141,
    "brand": "65a7e20102e12c44f59943da",
    "category": "65a7e24602e12c44f599442c",
    "thumbnail": "https://cdn.dummyjson.com/product-images/14/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a9472e0361f7c1d331",
    "title": "Notebook Bundle",
    "description": "Notebook Bundle is crafted with premium materials, ensuring reliability and convenience for all your academic needs.",
    "price": 30,
    "discountPercentage": 24.36578593286837,
    "stockQuantity": 89,
    "brand": "65a7e20102e12c44f59943dd",
    "category": "65a7e24602e12c44f599442f",
    "thumbnail": "https://cdn.dummyjson.com/product-images/15/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a9967e23847e4c7e4c",
    "title": "Scientific Calculator Pro",
    "description": "Scientific Calculator Pro offers cutting-edge technology to enhance your learning experience, combining functionality and ease of use.",
    "price": 117,
    "discountPercentage": 5.064136418411074,
    "stockQuantity": 196,
    "brand": "65a7e20102e12c44f59943db",
    "category": "65a7e24602e12c44f599442d",
    "thumbnail": "https://cdn.dummyjson.com/product-images/16/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a91aec8dbfeb88a751",
    "title": "Chemistry Laboratory Manual",
    "description": "Chemistry Laboratory Manual is a comprehensive guide designed for students and enthusiasts, packed with clear explanations and real-world applications.",
    "price": 62,
    "discountPercentage": 22.05031407157598,
    "stockQuantity": 171,
    "brand": "65a7e20102e12c44f59943da",
    "category": "65a7e24602e12c44f599442c",
    "thumbnail": "https://cdn.dummyjson.com/product-images/17/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a9dfedacd0107fad26",
    "title": "Geometric Tools Set",
    "description": "Geometric Tools Set is crafted with premium materials, ensuring reliability and convenience for all your academic needs.",
    "price": 41,
    "discountPercentage": 13.728134084615357,
    "stockQuantity": 175,
    "brand": "65a7e20102e12c44f59943dd",
    "category": "65a7e24602e12c44f599442f",
    "thumbnail": "https://cdn.dummyjson.com/product-images/18/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a9e9db8fcfef7e7acc",
    "title": "Biology Reference Book",
    "description": "Biology Reference Book is a comprehensive guide designed for students and enthusiasts, packed with clear explanations and real-world applications.",
    "price": 60,
    "discountPercentage": 19.21162274054433,
    "stockQuantity": 64,
    "brand": "65a7e20102e12c44f59943da",
    "category": "65a7e24602e12c44f599442c",
    "thumbnail": "https://cdn.dummyjson.com/product-images/19/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a90b0636659b274b20",
    "title": "Notebook Bundle",
    "description": "Notebook Bundle is crafted with premium materials, ensuring reliability and convenience for all your academic needs.",
    "price": 22,
    "discountPercentage": 24.532703164272416,
    "stockQuantity": 185,
    "brand": "65a7e20102e12c44f59943dd",
    "category": "65a7e24602e12c44f599442f",
    "thumbnail": "https://cdn.dummyjson.com/product-images/20/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a9bed0fc35fff01c17",
    "title": "Geometric Tools Set",
    "description": "Geometric Tools Set is crafted with premium materials, ensuring reliability and convenience for all your academic needs.",
    "price": 45,
    "discountPercentage": 15.731788104452605,
    "stockQuantity": 27,
    "brand": "65a7e20102e12c44f59943dd",
    "category": "65a7e24602e12c44f599442f",
    "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a95811561a86462705",
    "title": "Audio Learning System",
    "description": "Audio Learning System offers cutting-edge technology to enhance your learning experience, combining functionality and ease of use.",
    "price": 125,
    "discountPercentage": 21.50009707148765,
    "stockQuantity": 38,
    "brand": "65a7e20102e12c44f59943db",
    "category": "65a7e24602e12c44f599442d",
    "thumbnail": "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a9ca9704f02517b888",
    "title": "Advanced Mathematics Textbook",
    "description": "Advanced Mathematics Textbook is a comprehensive guide designed for students and enthusiasts, packed with clear explanations and real-world applications.",
    "price": 69,
    "discountPercentage": 19.011928484992485,
    "stockQuantity": 116,
    "brand": "65a7e20102e12c44f59943da",
    "category": "65a7e24602e12c44f599442c",
    "thumbnail": "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a9f99034fe7a8972d0",
    "title": "Educational Robot Kit",
    "description": "Educational Robot Kit offers cutting-edge technology to enhance your learning experience, combining functionality and ease of use.",
    "price": 196,
    "discountPercentage": 7.581699758645335,
    "stockQuantity": 163,
    "brand": "65a7e20102e12c44f59943db",
    "category": "65a7e24602e12c44f599442d",
    "thumbnail": "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a9e4944244f99489f2",
    "title": "Biology Reference Book",
    "description": "Biology Reference Book is a comprehensive guide designed for students and enthusiasts, packed with clear explanations and real-world applications.",
    "price": 73,
    "discountPercentage": 22.35894901519034,
    "stockQuantity": 174,
    "brand": "65a7e20102e12c44f59943da",
    "category": "65a7e24602e12c44f599442c",
    "thumbnail": "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a9ab9600457cff45ac",
    "title": "Physics Study Guide",
    "description": "Physics Study Guide is a comprehensive guide designed for students and enthusiasts, packed with clear explanations and real-world applications.",
    "price": 69,
    "discountPercentage": 19.04941896875137,
    "stockQuantity": 107,
    "brand": "65a7e20102e12c44f59943da",
    "category": "65a7e24602e12c44f599442c",
    "thumbnail": "https://cdn.dummyjson.com/product-images/6/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a9e0c3d04204e45ae0",
    "title": "Premium Fountain Pen",
    "description": "Premium Fountain Pen is crafted with premium materials, ensuring reliability and convenience for all your academic needs.",
    "price": 62,
    "discountPercentage": 18.211576686876626,
    "stockQuantity": 34,
    "brand": "65a7e20102e12c44f59943dd",
    "category": "65a7e24602e12c44f599442f",
    "thumbnail": "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a97ba638a8b17519a7",
    "title": "Organization Folder Kit",
    "description": "Organization Folder Kit is crafted with premium materials, ensuring reliability and convenience for all your academic needs.",
    "price": 39,
    "discountPercentage": 21.286069206364136,
    "stockQuantity": 166,
    "brand": "65a7e20102e12c44f59943dd",
    "category": "65a7e24602e12c44f599442f",
    "thumbnail": "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a99dd4147c0f456d52",
    "title": "Smart Whiteboard",
    "description": "Smart Whiteboard offers cutting-edge technology to enhance your learning experience, combining functionality and ease of use.",
    "price": 892,
    "discountPercentage": 12.737482121959786,
    "stockQuantity": 55,
    "brand": "65a7e20102e12c44f59943db",
    "category": "65a7e24602e12c44f599442d",
    "thumbnail": "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a99e0c1a9223565917",
    "title": "Scientific Calculator Pro",
    "description": "Scientific Calculator Pro offers cutting-edge technology to enhance your learning experience, combining functionality and ease of use.",
    "price": 126,
    "discountPercentage": 19.128650785248226,
    "stockQuantity": 116,
    "brand": "65a7e20102e12c44f59943db",
    "category": "65a7e24602e12c44f599442d",
    "thumbnail": "https://cdn.dummyjson.com/product-images/10/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a98110715abe50c310",
    "title": "Desk Accessories Set",
    "description": "Desk Accessories Set is crafted with premium materials, ensuring reliability and convenience for all your academic needs.",
    "price": 52,
    "discountPercentage": 13.201194346780557,
    "stockQuantity": 63,
    "brand": "65a7e20102e12c44f59943dd",
    "category": "65a7e24602e12c44f599442f",
    "thumbnail": "https://cdn.dummyjson.com/product-images/11/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a97712cfef23a9fded",
    "title": "Biology Reference Book",
    "description": "Biology Reference Book is a comprehensive guide designed for students and enthusiasts, packed with clear explanations and real-world applications.",
    "price": 89,
    "discountPercentage": 24.77418105913674,
    "stockQuantity": 64,
    "brand": "65a7e20102e12c44f59943da",
    "category": "65a7e24602e12c44f599442c",
    "thumbnail": "https://cdn.dummyjson.com/product-images/12/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a9ea48a3e3d21930ef",
    "title": "Physics Study Guide",
    "description": "Physics Study Guide is a comprehensive guide designed for students and enthusiasts, packed with clear explanations and real-world applications.",
    "price": 66,
    "discountPercentage": 14.094226130468439,
    "stockQuantity": 56,
    "brand": "65a7e20102e12c44f59943da",
    "category": "65a7e24602e12c44f599442c",
    "thumbnail": "https://cdn.dummyjson.com/product-images/13/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a9313d5a0fd1d53b12",
    "title": "Audio Learning System",
    "description": "Audio Learning System offers cutting-edge technology to enhance your learning experience, combining functionality and ease of use.",
    "price": 124,
    "discountPercentage": 21.177595251071203,
    "stockQuantity": 91,
    "brand": "65a7e20102e12c44f59943db",
    "category": "65a7e24602e12c44f599442d",
    "thumbnail": "https://cdn.dummyjson.com/product-images/14/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a90fdad7c53b12c31a",
    "title": "Geometric Tools Set",
    "description": "Geometric Tools Set is crafted with premium materials, ensuring reliability and convenience for all your academic needs.",
    "price": 35,
    "discountPercentage": 5.952822723322457,
    "stockQuantity": 165,
    "brand": "65a7e20102e12c44f59943dd",
    "category": "65a7e24602e12c44f599442f",
    "thumbnail": "https://cdn.dummyjson.com/product-images/15/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a9b9964b454cca5fd4",
    "title": "Premium Fountain Pen",
    "description": "Premium Fountain Pen is crafted with premium materials, ensuring reliability and convenience for all your academic needs.",
    "price": 48,
    "discountPercentage": 24.917744692605247,
    "stockQuantity": 30,
    "brand": "65a7e20102e12c44f59943dd",
    "category": "65a7e24602e12c44f599442f",
    "thumbnail": "https://cdn.dummyjson.com/product-images/16/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a9a1d8cc2cb3701626",
    "title": "Premium Fountain Pen",
    "description": "Premium Fountain Pen is crafted with premium materials, ensuring reliability and convenience for all your academic needs.",
    "price": 58,
    "discountPercentage": 9.17316150948114,
    "stockQuantity": 47,
    "brand": "65a7e20102e12c44f59943dd",
    "category": "65a7e24602e12c44f599442f",
    "thumbnail": "https://cdn.dummyjson.com/product-images/17/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a97c390ec77f9468b3",
    "title": "Scientific Calculator Pro",
    "description": "Scientific Calculator Pro offers cutting-edge technology to enhance your learning experience, combining functionality and ease of use.",
    "price": 124,
    "discountPercentage": 20.59809389713893,
    "stockQuantity": 171,
    "brand": "65a7e20102e12c44f59943db",
    "category": "65a7e24602e12c44f599442d",
    "thumbnail": "https://cdn.dummyjson.com/product-images/18/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a9d42ddac0dbfdcd06",
    "title": "Digital Learning Tablet",
    "description": "Digital Learning Tablet offers cutting-edge technology to enhance your learning experience, combining functionality and ease of use.",
    "price": 302,
    "discountPercentage": 13.317653527032395,
    "stockQuantity": 85,
    "brand": "65a7e20102e12c44f59943db",
    "category": "65a7e24602e12c44f599442d",
    "thumbnail": "https://cdn.dummyjson.com/product-images/19/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a970797e56abca4a3b",
    "title": "Physics Study Guide",
    "description": "Physics Study Guide is a comprehensive guide designed for students and enthusiasts, packed with clear explanations and real-world applications.",
    "price": 76,
    "discountPercentage": 23.966663977373717,
    "stockQuantity": 173,
    "brand": "65a7e20102e12c44f59943da",
    "category": "65a7e24602e12c44f599442c",
    "thumbnail": "https://cdn.dummyjson.com/product-images/20/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a901da464377900293",
    "title": "Audio Learning System",
    "description": "Audio Learning System offers cutting-edge technology to enhance your learning experience, combining functionality and ease of use.",
    "price": 133,
    "discountPercentage": 16.29374884665352,
    "stockQuantity": 48,
    "brand": "65a7e20102e12c44f59943db",
    "category": "65a7e24602e12c44f599442d",
    "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a9399259b5ae2df415",
    "title": "Geometric Tools Set",
    "description": "Geometric Tools Set is crafted with premium materials, ensuring reliability and convenience for all your academic needs.",
    "price": 44,
    "discountPercentage": 23.810772977243193,
    "stockQuantity": 111,
    "brand": "65a7e20102e12c44f59943dd",
    "category": "65a7e24602e12c44f599442f",
    "thumbnail": "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a97b36553caedf79cf",
    "title": "Literature Anthology",
    "description": "Literature Anthology is a comprehensive guide designed for students and enthusiasts, packed with clear explanations and real-world applications.",
    "price": 43,
    "discountPercentage": 12.365249775332344,
    "stockQuantity": 10,
    "brand": "65a7e20102e12c44f59943da",
    "category": "65a7e24602e12c44f599442c",
    "thumbnail": "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a9ce9be44baee88543",
    "title": "Physics Study Guide",
    "description": "Physics Study Guide is a comprehensive guide designed for students and enthusiasts, packed with clear explanations and real-world applications.",
    "price": 70,
    "discountPercentage": 22.521865076435923,
    "stockQuantity": 44,
    "brand": "65a7e20102e12c44f59943da",
    "category": "65a7e24602e12c44f599442c",
    "thumbnail": "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a9aed89adb9e00220f",
    "title": "Literature Anthology",
    "description": "Literature Anthology is a comprehensive guide designed for students and enthusiasts, packed with clear explanations and real-world applications.",
    "price": 41,
    "discountPercentage": 21.78158768488149,
    "stockQuantity": 41,
    "brand": "65a7e20102e12c44f59943da",
    "category": "65a7e24602e12c44f599442c",
    "thumbnail": "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a9010f58d203b77d41",
    "title": "Chemistry Laboratory Manual",
    "description": "Chemistry Laboratory Manual is a comprehensive guide designed for students and enthusiasts, packed with clear explanations and real-world applications.",
    "price": 55,
    "discountPercentage": 15.247443695229155,
    "stockQuantity": 145,
    "brand": "65a7e20102e12c44f59943da",
    "category": "65a7e24602e12c44f599442c",
    "thumbnail": "https://cdn.dummyjson.com/product-images/6/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a908e591411a3483fd",
    "title": "Smart Whiteboard",
    "description": "Smart Whiteboard offers cutting-edge technology to enhance your learning experience, combining functionality and ease of use.",
    "price": 901,
    "discountPercentage": 8.52125839915329,
    "stockQuantity": 41,
    "brand": "65a7e20102e12c44f59943db",
    "category": "65a7e24602e12c44f599442d",
    "thumbnail": "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a98fa1318cf6480f3b",
    "title": "Organization Folder Kit",
    "description": "Organization Folder Kit is crafted with premium materials, ensuring reliability and convenience for all your academic needs.",
    "price": 28,
    "discountPercentage": 23.060105810005805,
    "stockQuantity": 118,
    "brand": "65a7e20102e12c44f59943dd",
    "category": "65a7e24602e12c44f599442f",
    "thumbnail": "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a93632499093be0464",
    "title": "Educational Robot Kit",
    "description": "Educational Robot Kit offers cutting-edge technology to enhance your learning experience, combining functionality and ease of use.",
    "price": 212,
    "discountPercentage": 9.64223869996447,
    "stockQuantity": 142,
    "brand": "65a7e20102e12c44f59943db",
    "category": "65a7e24602e12c44f599442d",
    "thumbnail": "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  },
  {
    "_id": "677233a9dbea157d3214cc84",
    "title": "Educational Robot Kit",
    "description": "Educational Robot Kit offers cutting-edge technology to enhance your learning experience, combining functionality and ease of use.",
    "price": 214,
    "discountPercentage": 23.690312287556093,
    "stockQuantity": 31,
    "brand": "65a7e20102e12c44f59943db",
    "category": "65a7e24602e12c44f599442d",
    "thumbnail": "https://cdn.dummyjson.com/product-images/10/thumbnail.jpg",
    "isDeleted": false,
    "updatedAt": "2024-12-30T05:46:17.154Z"
  }
];

console.log(products.length)
exports.seedProduct = async () => {
  try {
    await Product.insertMany(products);
    console.log("Product seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
