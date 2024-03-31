const DATA = [
  {
    id: 1,
    name: 'Ahsan',
    "photos":imageFilenames[0],
    lastMessage: "I am a batsman",
    time: "10:00 AM"
  },
  {
    id: 2,
    name: 'Nadeem',
    "photos":imageFilenames[1],

    lastMessage: "I am a batsman",
    time: "10:00 AM"
  },
  {
    id: 1,
    name: 'Aman',
    "photos":imageFilenames[2],
    lastMessage: "I am a batsman",
    time: "10:00 AM"
  }
];

// Assuming your image filenames are known in advance (replace with your actual filenames)
const imageFilenames = ["IMG_6686.JPG", "IMG_6686.JPG", "IMG_6686.JPG"];

// Construct image paths based on a base directory (replace with your actual directory)
const imageBasePath = "./assets/";
const imagePaths = imageFilenames.map((filename) => imageBasePath + filename);

// Validate imagePaths length to match DATA length (optional but recommended)
if (imagePaths.length !== DATA.length) {
  console.error("Error: Image paths length does not match data length!");
  // Handle the error (e.g., throw an exception or provide a default image)
}

// Create a new array with data including image paths
const dataWithImages = DATA.map((dataItem, index) => ({
  ...dataItem,
  photos: imagePaths[index]
}));

console.log(dataWithImages);
