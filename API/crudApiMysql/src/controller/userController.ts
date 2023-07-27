import { Request, Response } from "express";

async function listUsers(req: Request, res: Response) {
    res.send('listUsers');
}
async function createUser(req: Request, res: Response) {
    res.send('createUser');
}
async function editUser(req: Request, res: Response) {
    res.send(`editUser ${req.params.idUser}`);
}
async function deleteUser(req: Request, res: Response) {
    res.send(`deleteUser ${req.params.idUser}`);
}

export default {
    listUsers,
    createUser,
    editUser,
    deleteUser
}
