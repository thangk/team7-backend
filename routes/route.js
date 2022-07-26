const router = require('express').Router();
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

router.get('/watches', async function(req, res, next)  {
    try {
        const watches = await prisma.watch.findMany({
            include: {
                carts: true,
            }
        })
        res.json(watches);
    } catch (err) {
        console.error('Error while getting watches', err.message);
        next(err);
    }
})

router.get('/watches/:id', async function(req, res, next)  {
    try {
        const watch = await prisma.watch.findUnique({
            where: {
                id: Number(req.params.id)
            },
            include: {
                carts: true,
            }
        })
        res.json(watch);
    } catch (err) {
        console.error('Error while getting watch', err.message);
        next(err);
    }
})

router.post('/watches', async function(req, res, next)  {
    try {
        const watch = await prisma.watch.create({
            data: req.body
        })
        res.json(watch);
    } catch (err) {
        console.error('Error while creating watch', err.message);
        next(err);
    }
})

router.patch('/watches/:id', async function(req, res, next)  {
    try {
        const watch = await prisma.watch.update({
            where: {
                id: Number(req.params.id)
            },
            data: req.body,
            include: {
                carts: true,
            }
        })
        res.json(watch);
    } catch (err) {
        console.error('Error while updating watch', err.message);
        next(err);
    }
})

router.delete('/watches/:id', async function(req, res, next)  {
    try {
        const deletedWatch = await prisma.watch.delete({
            where: {
                id: Number(req.params.id)
            }
        })
        res.json(deletedWatch);
    } catch (err) {
        console.error('Error while getting watch', err.message);
        next(err);
    }
})

module.exports = router;