import { prisma } from '../prisma.js'

const categories = [
    'Sports',
    'Music',
    'Art',
    'Technology',
    'Food',
    'Business',
    'Education',
    'Entertainment',
    'Health',
    'Other'
]

async function main() {
    console.log('Starting categories initialization...')

    for (const categoryName of categories) {
        await prisma.category.upsert({
            where: { name: categoryName },
            update: {},
            create: { name: categoryName }
        })
        console.log(`Created/Updated category: ${categoryName}`)
    }

    console.log('Categories initialization completed!')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    }) 