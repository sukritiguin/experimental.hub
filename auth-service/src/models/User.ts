import { DataTypes, Model } from "@sequelize/core";
import { UserAttributes } from "../types/user";
import sequelize from "../sequelize";

export class User extends Model<UserAttributes> {
    declare id: number;
    declare name: string;
    declare email: string;
    declare password: string;
    declare username: string;
    declare dateOfBirth: Date;
    declare readonly createdAt: Date;
    declare readonly updatedAt: Date;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        dateOfBirth: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'User'
    }
);