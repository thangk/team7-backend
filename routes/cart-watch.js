const router = require('express').Router();
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

// just a comment

router.get('/cart-watches', async function(req, res, next)  {
    try {
        const cartWatches = await prisma.cartWatch.findMany({
        })
        res.json(cartWatches);
    } catch (err) {
        console.error('Error while getting cartWatches', err.message);
        next(err);
    }
})

// updated by Kap, this change returns the list of watches by cartId which is equal to customerId
router.get('/cart-watches/:customerId', async function(req, res, next)  {
    try {
        const cartWatch = await prisma.cartWatch.findMany({
            where: {
                cartId: Number(req.params.customerId)
                
            }
        })
        res.json(cartWatch);
    } catch (err) {
        console.error('Error while getting cartWatch', err.message);
        next(err);
    }
})

router.post('/cart-watches', async function(req, res, next)  {
    try {
        const cartWatch = await prisma.cartWatch.create({
            data: req.body
        })
        res.json(cartWatch);
    } catch (err) {
        console.error('Error while creating cartWatch', err.message);
        next(err);
    }
})

router.patch('/cart-watches/:cartId', async function(req, res, next)  {
    try {
        const cartWatch = await prisma.cartWatch.update({
            where: {
                cartId: Number(req.params.cartId),
                watchId: Number(req.body.watchId),
            },
            data: req.body,
        })
        res.json(cartWatch);
    } catch (err) {
        console.error('Error while updating cartWatch', err.message);
        next(err);
    }
})


router.delete('/cart-watches/:id', async function(req, res, next)  {
    try {
        const deletedWatch = await prisma.cartWatch.delete({
            where: {
                id: Number(req.params.id)
            }
        })
        res.json(deletedWatch);
    } catch (err) {
        console.error('Error while getting cartWatch', err.message);
        next(err);
    }
})

router.delete('/cart-watches/', async function(req, res, next)  {
    try {
        let deletedWatches= {}
        if(req.body.deleteAll) {
            deletedWatches = await prisma.cartWatch.deleteMany({
                where: {
                    cartId: Number(req.body.cartId),
                    watchId: Number(req.body.watchId),
                }
            })
        } else {
            const watchToDelete = await prisma.cartWatch.findFirst({
                where: {
                    cartId: Number(req.body.cartId),
                    watchId: Number(req.body.watchId),
                }
            })
            deletedWatches = await prisma.cartWatch.delete({
                where: {
                    id: watchToDelete?.id,
                }
            })
        }
        res.json(deletedWatches);
    } catch (err) {
        console.error('Error while getting cartWatches', err.message);
        next(err);
    }
})


module.exports = router;