const router = require('express').Router();
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

router.get('/admin-login', async function(req, res, next)  {
    try {
        const admin = await prisma.admin.findUnique({
            where: {
                username: req.query.username,
                password: req.query.password
            }
        })
        res.json(admin);
    } catch (err) {
        console.error('Error while logging in', err.message);
        next(err);
    }
})

router.get('/admins', async function(req, res, next)  {
    try {
        const admins = await prisma.admin.findMany({
            include: {
            }
        })
        res.json(admins);
    } catch (err) {
        console.error('Error while getting admins', err.message);
        next(err);
    }
})

router.get('/admins/:id', async function(req, res, next)  {
    try {
        const admin = await prisma.admin.findUnique({
            where: {
                id: Number(req.params.id)
            },
        })
        res.json(admin);
    } catch (err) {
        console.error('Error while getting admin', err.message);
        next(err);
    }
})

router.post('/admins', async function(req, res, next)  {
    try {
        const admin = await prisma.admin.create({
            data: req.body
        })
        res.json(admin);
    } catch (err) {
        console.error('Error while creating admin', err.message);
        next(err);
    }
})

router.patch('/admins/:id', async function(req, res, next)  {
    try {
        const admin = await prisma.admin.update({
            where: {
                id: Number(req.params.id)
            },
            data: req.body,
        })
        res.json(admin);
    } catch (err) {
        console.error('Error while updating admin', err.message);
        next(err);
    }
})

router.delete('/admins/:id', async function(req, res, next)  {
    try {
        const deletedadmin = await prisma.admin.delete({
            where: {
                id: Number(req.params.id)
            }
        })
        res.json(deletedadmin);
    } catch (err) {
        console.error('Error while getting admin', err.message);
        next(err);
    }
})

module.exports = router;