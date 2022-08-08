const router = require('express').Router();
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

// just a comment

router.get('/carts', async function(req, res, next)  {
    try {
        const carts = await prisma.cart.findMany({
            include: {
                watches: true
            }
        })
        res.json(carts);
    } catch (err) {
        console.error('Error while getting carts', err.message);
        next(err);
    }
})

router.get('/carts/:id', async function(req, res, next)  {
    try {
        const cart = await prisma.cart.findUnique({
            where: {
                id: Number(req.params.id)
            },
            include: {
                watches: true
            }
        })
        res.json(cart);
    } catch (err) {
        console.error('Error while getting cart', err.message);
        next(err);
    }
})

router.post('/carts', async function(req, res, next)  {
    try {
        const cart = await prisma.cart.create({
            data: req.body
        })
        res.json(cart);
    } catch (err) {
        console.error('Error while creating cart', err.message);
        next(err);
    }
})

router.patch('/carts/:id', async function(req, res, next)  {
    try {
        const cart = await prisma.cart.update({
            where: {
                id: Number(req.params.id)
            },
            data: req.body,
            include: {
            }
        })
        res.json(cart);
    } catch (err) {
        console.error('Error while updating cart', err.message);
        next(err);
    }
})

router.patch('/carts/purchase/:id', async function(req, res, next)  {
    try {
        // Get the cart that is being purchased
        const cart = await prisma.cart.findUnique({
            where: {
                id: Number(req.params.id),
            },
            include: {
                watches: {
                    where: {
                        isInCart: true
                    }
                }
            }
        })
        // For each CartWatch in the cart
        for (const watch of cart.watches) {
            console.log(watch)
            // Update the watch to be not in the cart
            const cartWatch = await prisma.cartWatch.update({
                where: {
                    id: watch.id
                },
                data: {
                    isInCart: false
                }
            })
            // Reduce stock by 1
            const updatedWatch = await prisma.watch.update({
                where: {
                    id: watch.watchId
                },
                data: {
                    stock: {
                        decrement: 1
                    }
                }
            });
        }
        res.json(cart);
    } catch (err) {
        console.error('Error while updating cart', err.message);
        next(err);
    }
})

router.delete('/carts/:id', async function(req, res, next)  {
    try {
        const deletedcart = await prisma.cart.delete({
            where: {
                id: Number(req.params.id)
            }
        })
        res.json(deletedcart);
    } catch (err) {
        console.error('Error while getting cart', err.message);
        next(err);
    }
})

module.exports = router;