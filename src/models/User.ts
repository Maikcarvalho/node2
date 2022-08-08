//Importar o sequelize com o model e o datatypes
import { Model, DataTypes } from 'sequelize'
//Importar a conexão com o BD
import {sequelize} from '../instances/mysql'

export interface UserInstance extends Model {
    id: number
    name: string
    age: number

}

export const User = sequelize.define<UserInstance>("User,",{

    id:{
        primaryKey:true,
        type:DataTypes.INTEGER
    },
    name:{
        type:DataTypes.STRING
    },
    age:{
        type:DataTypes.INTEGER,
        defaultValue: 18
    },
},{
    tableName:'users',
    timestamps:false
})