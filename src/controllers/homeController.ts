import { Request, Response } from 'express';
import { Product } from '../models/Product';

//importando o arquivo mysql.ts
import { sequelize } from '../instances/mysql';
import { User } from '../models/User';
import {Op} from 'sequelize'

export const home = async (req: Request, res: Response)=>{

    //adicionando usuários ao banco
    const user = User.build({
        name:'Yaros-Chatoba',
        age:10
    })

    await user.save()
    
    /*try{
        await sequelize.authenticate()
        console.log("Conexão estabelecida!")
    }catch(error){
        console.log("Opa, deu ruim",error)
    }
    */

    //Puxar os usuários que estão no meu BD
    let users = await User.findAll({
        //attributes: {exclude: ['name']}
        //where: {name: 'adriano'}

        /*where: {
            name:{
                //[Op.gt]:20, //> 20 (GT greater than)
                //[Op.gte]:100, //> 100 (GT greater than or equal)
                //[Op.lt]:50, //< 50
                //[Op.lte]:80,//<= 80
                //[Op.between]:[40,100]
                //[Op.in]:
                //[Op.notIn]:
                [Op.like]:'%a'
            }
        } */
    })

    res.render('pages/home', {
    });
};