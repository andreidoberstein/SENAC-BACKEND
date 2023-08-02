import { Request, Response } from "express";
import db from '../config/database';

async function listUsers(req: Request, res: Response) {
    db.connection.query('SELECT * FROM clients', (err, results) => {
        res.send(results);
    });
}











async function createUser(req: Request, res: Response) {
    const querySql = 'INSERT INTO clients(DS_NAME, DS_UF) VALUES(?,?);';
    
    const params = Array(
        req.body.ds_name,
        req.body.ds_uf
    );

    db.connection.query(querySql, params, (err, results) => {
        if (err) {
            res.status(404).json({
                succes: false,
                message: "Cadastro não realizado!",
            })
        }
        res.json({
            success: true,
            message: "Cadastro realizado com sucesso!",
            createdId: results
        });
    });
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
