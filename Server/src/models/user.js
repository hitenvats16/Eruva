import { prisma } from './index.js'

export const findActiveUserByEmail = (email) =>
    prisma.user.findFirst({
        where: {
            email,
            archived: false,
        },
    })

export const createUser = (data) =>
    prisma.user.create({
        data:{
            isEmailVerified: true,
            ...data,
            isEmailVerified: true
        },
    })

export const findActiveUserById = (id) =>
    prisma.user.findFirst({
        where: {
            id,
            archived: false,
        },
        include: {
            organisation: true,
        },
    })

export const updateUserById = (id, data) =>
    prisma.user.update({
        where: {
            id,
        },
        data,
    })
