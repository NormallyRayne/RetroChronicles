const db = require('./connection');
const { User, Product, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');

  const categories = await Category.insertMany([
    { name: 'Y2K' },
    { name: '80s' },
    { name: '90s' },
    { name: '70s' },
    { name: '60s' }
  ]);

  console.log('categories seeded');

  const products = await Product.insertMany([
    {
      name: 'Vintage Shoes',
      description:
        'Embrace a nostalgic fusion of retro futurism with these used Y2K-style shoes, featuring bold, futuristic designs reminiscent of the turn of the millennium.',
      image:'https://i.pinimg.com/originals/09/28/5e/09285e152fb5e03e8729d1890cf96932.jpg',
      category: categories[0]._id,
      price: 23.99,
      quantity: 500
    },
    {
      name: 'Jean Jacket',
      description:
        'Elevate your style with this vintage 80s jean jacket, worn to perfection and exuding a timeless cool with its faded denim, classic cuts, and authentic retro vibes',
      image:'https://i.pinimg.com/originals/c7/04/54/c70454699ed3aa9d4b71281325000e81.jpg',
      category: categories[0]._id,
      price: 30.99,
      quantity: 500
    },
    {
      name: 'Halter Top',
      category: categories[1]._id,
      description:
        'Step into the groovy vibes of the 70s with this used halter top, boasting a vintage allure with its bold prints, open-back design, and a touch of disco-era glamour.',
      image:'https://i.pinimg.com/originals/d2/6d/f2/d26df27adb4af857a69657a6023b84b8.jpg',
      price: 10.99,
      quantity: 20
    },
    {
      name: 'Hat',
      category: categories[1]._id,
      description:
        'Channel the timeless charm of the 1960s with this used paperboy hat, a vintage accessory that effortlessly adds a touch of retro-cool to any ensemble with its classic design and nostalgic appeal.',
      image:'https://i.pinimg.com/originals/6a/0b/7f/6a0b7f7f0a5b847acd625749653f529c.jpg',
      price: 5.99,
      quantity: 50
    },
    {
      name: 'Beaded Purse',
      category: categories[1]._id,
      description:
        'Elevate your accessory game with this vintage 1920s purse, a timeless piece that exudes the glamour of the Roaring Twenties with its art deco embellishments and chic sophistication.',
      image:'https://i.pinimg.com/originals/de/71/82/de71824bcd3817baa0bf77756f023cbd.jpg',
      price: 54.99,
      quantity: 100
    },
    {
      name: 'Knit Sweater',
      category: categories[2]._id,
      description:
        'Wrap yourself in cozy nostalgia with this used mens knit sweater, combining classic style and warmth in a timeless wardrobe essential that effortlessly transitions from casual outings to laid-back evenings',
      image:'https://i.pinimg.com/originals/33/95/86/3395863502471364a3f8f8f275015f8f.jpg',
      price: 79.99,
      quantity: 30
    },
    {
      name: 'Leather Jacket',
      category: categories[2]._id,
      description:
        'Embrace rugged sophistication with this used leather jacket for men, exuding timeless coolness and a hint of rebellion, as the well-worn patina tells a story of adventures past.',
      image:'https://i.pinimg.com/originals/59/e0/ab/59e0ab03bcbcf5932eb08bfed4a6f5cd.jpg',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Pocket Comb',
      category: categories[3]._id,
      description:
        'Elevate your grooming routine with this used vintage pocket comb for men, a compact and stylish accessory that harkens back to a bygone era of classic masculinity, perfect for on-the-go touch-ups with a touch of retro flair',
      image:'https://i.pinimg.com/originals/50/e7/37/50e737f7ec58d45e7b0f2c4e72d6a620.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Retro Poster',
      category: categories[4]._id,
      description: 'Transform your space with character and nostalgia through this used vintage poster for men, a captivating piece that not only adds a touch of retro charm but also tells a visual story from a bygone era.',
      image:'https://i.pinimg.com/originals/0f/c5/8b/0fc58b5fded3501dd8d86fd4ab55ab76.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Vintage Watch',
      category: categories[4]._id,
      description:
        'Adorn your wrist with timeless elegance and a touch of history with this used vintage watch for men, a meticulously crafted timepiece that not only tells the time but also narrates the story of an era gone by.',
      image: 'https://i.pinimg.com/originals/3a/8e/e3/3a8ee3661add82fb26267ddd88ee4a7f.jpg',
      price: 52.99,
      quantity: 1000
    },
    {
      name: 'Vintage Jeans',
      category: categories[4]._id,
      description:
        'Step into the authenticity of the past with these used vintage jeans for men, where every fade and fray tells a story, blending rugged style with a timeless silhouette for a fashion statement that transcends eras',
      image:'https://i.pinimg.com/originals/64/a1/10/64a11034b7d7662ed5cd970c2429c06d.jpg',
      price: 57.99,
      quantity: 100
    },
    {
      name: 'Vintage Button Down',
      category: categories[4]._id,
      description:
        'Elevate your wardrobe with this used vintage button-down for men, a classic garment that effortlessly combines timeless style and retro charm, perfect for making a sophisticated statement in any setting.',
      image:'https://i.pinimg.com/originals/45/5c/59/455c59d56d9b6f18381af51faa7c8f51.jpg',
      price: 29.99,
      quantity: 600
    }
  ]);

  console.log('products seeded');

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
