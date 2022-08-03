const router = require('express').Router();
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()


router.get('/login', async function(req, res, next)  {
    try {
        const customer = await prisma.customer.findFirstOrThrow({
            where: {
                username: req.query.username,
                password: req.query.password
            },
            include: {
                cart: {
                    include: {
                        watches: true
                    }
                }
            }
        })
        console.log(req.query)
        res.json(customer);
    } catch (err) {
        console.log(req.query)
        console.error('Error while logging in', err.message);
        next(err);
    }
})
router.get('/customers', async function(req, res, next)  {
    try {
        const customers = await prisma.customer.findMany({
            
        })
        res.json(customers);
    } catch (err) {
        console.error('Error while getting customers', err.message);
        next(err);
    }
})

router.get('/customers/:id', async function(req, res, next)  {
    try {
        const customer = await prisma.customer.findUnique({
            where: {
                id: Number(req.params.id)
            },
            include: {
                cart: {
                    include: {
                        watches: true
                    }
                }
            }
        })
        res.json(customer);
    } catch (err) {
        console.error('Error while getting customer', err.message);
        next(err);
    }
})

router.post('/customers', async function(req, res, next)  {
    try {
        const customer = await prisma.customer.create({
            data: req.body
        })
        const cart = await prisma.cart.create({
            data: {
                customerId: customer.id
            }
        })
        await prisma.customer.update({
            where: {
                id: customer.id
            },
            data: {
                cartId: cart.id
            }
        })
        customer.cartId = cart.id
        res.json(customer);
    } catch (err) {
        console.error('Error while creating customer', err.message);
        next(err);
    }
})

router.patch('/customers/:id', async function(req, res, next)  {
    try {
        const customer = await prisma.customer.update({
            where: {
                id: Number(req.params.id)
            },
            data: req.body,
            include: {
                
            }
        })
        res.json(customer);
    } catch (err) {
        console.error('Error while updating customer', err.message);
        next(err);
    }
})

router.delete('/customers/:id', async function(req, res, next)  {
    try {
        const deletedcustomer = await prisma.customer.delete({
            where: {
                id: Number(req.params.id)
            }
        })
        res.json(deletedcustomer);
    } catch (err) {
        console.error('Error while getting customer', err.message);
        next(err);
    }
})

module.exports = router;