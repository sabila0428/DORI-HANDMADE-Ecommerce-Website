
import 'dotenv/config';
import mongoose from 'mongoose';
import connectDB from '../config/db.js';
import Product from '../modules/products/models/Product.js';

const products = [
  // FLOWERS & FLOWER BOUQUETS
  {
    name: 'Crochet Flower Bouquet 1',
    category: 'flowers',
    price: 499,
    image: 'https://res.cloudinary.com/qpp6ij8g/image/upload/v1793634009/WhatsApp_Image_2026-11-02_at_9.03.58_PM.jpg',
    description: 'Handmade crochet flower creation.',
    customizable: true
  },
  {
    name: 'Crochet Flower Bouquet 2',
    category: 'flowers',
    price: 549,
    image: 'https://res.cloudinary.com/qpp6ij8g/image/upload/v1793634115/WhatsApp_Image_2026-11-02_at_9.03.57_PM_1.jpg',
    description: 'Handmade crochet flower creation.',
    customizable: true
  },
  {
    name: 'Crochet Flower Bouquet 3',
    category: 'flowers',
    price: 599,
    image: 'https://res.cloudinary.com/qpp6ij8g/image/upload/v1793634103/WhatsApp_Image_2026-11-02_at_9.03.57_PM_2.jpg',
    description: 'Handmade crochet flower creation.',
    customizable: true
  },
  {
    name: 'Crochet Flower Bouquet 4',
    category: 'flowers',
    price: 499,
    image: 'https://res.cloudinary.com/qpp6ij8g/image/upload/v1793634009/WhatsApp_Image_2026-11-02_at_9.03.58_PM_1.jpg',
    description: 'Handmade crochet flower creation.',
    customizable: true
  },
  {
    name: 'Crochet Flower Bouquet 5',
    category: 'flowers',
    price: 549,
    image: 'https://res.cloudinary.com/qpp6ij8g/image/upload/v1793634007/WhatsApp_Image_2026-11-02_at_9.03.57_PM.jpg',
    description: 'Handmade crochet flower creation.',
    customizable: true
  },
  {
    name: 'Crochet Flower Bouquet 6',
    category: 'flowers',
    price: 599,
    image: 'https://res.cloudinary.com/qpp6ij8g/image/upload/v1793633872/WhatsApp_Image_2026-11-02_at_9.03.59_PM.jpg',
    description: 'Handmade crochet flower creation.',
    customizable: true
  },

  // KEYCHAINS
  {
    name: 'Crochet Keychain 1',
    category: 'keychains',
    price: 149,
    image: 'https://res.cloudinary.com/qpp6ij8g/image/upload/v1793635086/crochet_crochet_keychain_crochet_project.jpg',
    description: 'Cute handmade crochet keychain.',
    customizable: true
  },
  {
    name: 'Hello Kitty Crochet Keychain',
    category: 'keychains',
    price: 199,
    image: 'https://res.cloudinary.com/qpp6ij8g/image/upload/v1793635078/Cute_Crochet_Hello_Kitty_Bow_KeychainA_charming_handmade_crochet_cat_keychain_featuring_a_cute_white.jpg',
    description: 'Handmade character-inspired crochet keychain.',
    customizable: true
  },

  // PLUSHIES
  {
    name: 'Cute Crochet Plushie',
    category: 'plushies',
    price: 399,
    image: 'https://res.cloudinary.com/qpp6ij8g/image/upload/v1793634982/my_little_cutie.jpg',
    description: 'Soft handmade crochet plushie.',
    customizable: true
  },
  {
    name: 'Crochet Deer Plushie',
    category: 'plushies',
    price: 449,
    image: 'https://res.cloudinary.com/qpp6ij8g/image/upload/v1793634981/Crochet_Deer_Plushie.jpg',
    description: 'Handmade crochet deer plushie.',
    customizable: true
  },
  {
    name: 'Amigurumi Plushie',
    category: 'plushies',
    price: 399,
    image: 'https://res.cloudinary.com/qpp6ij8g/image/upload/v1793634979/Amigurumi__O_que_%C3%A9_Como_Fazer_e_88_Modelos.jpg',
    description: 'Cute handmade amigurumi plushie.',
    customizable: true
  },

  // LAMPS
  {
    name: 'Crochet Flower Lamp 1',
    category: 'lamps',
    price: 799,
    image: 'https://res.cloudinary.com/qpp6ij8g/image/upload/v1793634467/USA_Craft.jpg',
    description: 'Decorative handmade crochet lamp.',
    customizable: true
  },
  {
    name: 'Mushroom Night Light',
    category: 'lamps',
    price: 899,
    image: 'https://res.cloudinary.com/qpp6ij8g/image/upload/v1793634467/Mushroom_Night_Light_Pattern__Whimsical_Decor_with_Cozy_Ambience.jpg',
    description: 'Whimsical handmade night light.',
    customizable: true
  },
  {
    name: 'Crochet Daisy Lamp',
    category: 'lamps',
    price: 849,
    image: 'https://res.cloudinary.com/qpp6ij8g/image/upload/v1793634466/Geometric_White_Daisy_Crochet_Flower_Wreath_-_Wooden_Hexagon_Decor.jpg',
    description: 'Handmade decorative crochet piece.',
    customizable: true
  },

  // WOMEN'S ACCESSORIES
  {
    name: 'Crochet Hair Accessory 1',
    category: 'accessories',
    price: 149,
    image: 'https://res.cloudinary.com/qpp6ij8g/image/upload/v1793634891/1090715603528028186.jpg',
    description: 'Handmade crochet hair accessory.',
    customizable: true
  },
  {
    name: 'Crochet Hair Accessory 2',
    category: 'accessories',
    price: 179,
    image: 'https://res.cloudinary.com/qpp6ij8g/image/upload/v1793634893/DM_to_order_now_this_amazing_hair.jpg',
    description: 'Cute handmade crochet accessory.',
    customizable: true
  },
  {
    name: 'Crochet Hair Clip',
    category: 'accessories',
    price: 129,
    image: 'https://res.cloudinary.com/qpp6ij8g/image/upload/v1793634887/stylish_crochet_hair_clip.jpg',
    description: 'Stylish handmade crochet hair clip.',
    customizable: true
  },

  // HOME DECOR
  {
    name: 'Crochet Welcome Wall Hanging',
    category: 'home-decor',
    price: 499,
    image: 'https://res.cloudinary.com/qpp6ij8g/image/upload/v1793634737/Crochet_Welcome_Wall_Hanging_Pattern___Welcome_Door_Decor___Crochet_Home_Decor___DIY_Flower_Wall_Art___Handmade_Style_Project.jpg',
    description: 'Handmade crochet wall hanging.',
    customizable: true
  },
  {
    name: 'Crochet Home Decor 2',
    category: 'home-decor',
    price: 449,
    image: 'https://res.cloudinary.com/qpp6ij8g/image/upload/v1793634733/1097611740470475448.jpg',
    description: 'Decorative handmade crochet creation.',
    customizable: true
  },
  {
    name: 'Crochet Toran',
    category: 'home-decor',
    price: 599,
    image: 'https://res.cloudinary.com/qpp6ij8g/image/upload/v1793634734/136K_views_17K_reactions___Beautiful_Toran_Design_trendingreels_thaplosh_torandesign_crocheting_crochet___Creative_Sarita.jpg',
    description: 'Handmade crochet toran for home decor.',
    customizable: true
  },

  // CUSTOMIZABLE ITEMS
  {
    name: 'Crochet Floral Backpack',
    category: 'custom',
    price: 999,
    image: 'https://res.cloudinary.com/qpp6ij8g/image/upload/v1793634648/Premium_Handmade_Crochet_Floral_Backpack.jpg',
    description: 'Customizable handmade crochet floral backpack.',
    customizable: true
  },
  {
    name: 'Alphabet Crochet Keychain',
    category: 'custom',
    price: 199,
    image: 'https://res.cloudinary.com/qpp6ij8g/image/upload/v1793634604/Alphabetic_Keychain_Crochet_Charm___Aesthetic_Handmade_Gift.jpg',
    description: 'Personalized alphabet crochet keychain.',
    customizable: true
  },
  {
    name: 'Custom Crochet Gift',
    category: 'custom',
    price: 499,
    image: 'https://res.cloudinary.com/qpp6ij8g/image/upload/v1793634602/1125477763162793746.jpg',
    description: 'Handmade customizable crochet gift.',
    customizable: true
  }
];

const seedProducts = async () => {
  try {
    await connectDB();

    let inserted = 0;
    let alreadyPresent = 0;

    for (const product of products) {
      const result = await Product.updateOne(
        { image: product.image },
        { $setOnInsert: product },
        { upsert: true }
      );

      if (result.upsertedCount === 1) {
        inserted++;
      } else {
        alreadyPresent++;
      }
    }

    console.log(`Products inserted: ${inserted}`);
    console.log(`Already present: ${alreadyPresent}`);
    console.log('DORI product seeding completed!');
  } catch (error) {
    console.error('Product seeding failed:', error.message);
  } finally {
    await mongoose.connection.close();
  }
};

seedProducts();
