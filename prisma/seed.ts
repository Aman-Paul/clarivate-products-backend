import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Seeding database...');

    // Define categories
    const categoryData = [
        { categoryName: 'Furniture', description: 'All types of furniture' },
        { categoryName: 'Electronics', description: 'Gadgets and devices' },
        { categoryName: 'Clothing', description: 'Apparel for men and women' },
        { categoryName: 'Books', description: 'Educational and fictional books' },
        { categoryName: 'Pet Supplies', description: 'Food, toys, and accessories for pets' },
        { categoryName: 'Sports & Outdoors', description: 'Equipment and gear for sports' },
        { categoryName: 'Home Appliances', description: 'Kitchen and home essentials' },
        { categoryName: 'Beauty & Personal Care', description: 'Cosmetics and skincare products' },
        { categoryName: 'Toys & Games', description: 'Fun games and playthings for kids' },
        { categoryName: 'Automotive', description: 'Car accessories and maintenance tools' },
    ];

    // Insert categories and get their IDs
    await prisma.category.createMany({ data: categoryData, skipDuplicates: true });
    const categories = await prisma.category.findMany(); // Fetch categories after inserting

    // Create 100 products distributed across the 10 categories
    const productData = [];
    for (let i = 1; i <= 100; i++) {
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        productData.push({
            productName: `Product ${i}`,
            description: `Description for Product ${i}`,
            price: (Math.random() * 100 + 10).toFixed(2), // Random price between 10 and 110
            stockQuantity: Math.floor(Math.random() * 500) + 10, // Random stock between 10 and 500
            categoryId: randomCategory.id,
        });
    }

    // Insert products
    await prisma.product.createMany({ data: productData, skipDuplicates: true });

    console.log('✅ Seeding completed with 10 categories and 100 products.');
}

main()
    .catch((error) => {
        console.error('Error seeding the database:', error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
