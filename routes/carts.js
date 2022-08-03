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
        const cartWatches = await prisma.cartWatch.updateMany({
            where: {
                cartId: Number(req.params.id),
            },
            data: {
                // @ts-ignore
                isInCart: false,
            }
        })
        res.json(cartWatches);
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