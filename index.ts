import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


const newBook = await prisma.book.create({
    data: {
        title: "Gravity's Rainbow",
        author: "Thomas Pynchon",
        isbn: "0330242814",
        genres: "Fiction", 
        rented: true
    }
})


export default prisma