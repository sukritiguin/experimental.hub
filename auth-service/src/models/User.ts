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
            unique: true,
            validate: {
                isEmail: {
                    msg: "Must be a valid email address"
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [6, 100],
                    msg: "Password must be at least 6 characters long"
                },
                isStrongPassword(value: string) {
                    if (!/[A-Z]/.test(value)) {
                        throw new Error('Password must contain at least one uppercase letter');
                    }
                    if (!/[a-z]/.test(value)) {
                        throw new Error('Password must contain at least one lowercase letter');
                    }
                    if (!/[0-9]/.test(value)) {
                        throw new Error('Password must contain at least one number');
                    }
                }
            }
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: {
                    args: [4, 30],
                    msg: "Username must be between 4 and 30 characters"
                },
                is: {
                    args: /^[a-zA-Z0-9_]+$/,
                    msg: "Username can only contain letters, numbers, and underscores"
                }
            }
        },
        dateOfBirth: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    },
    {
        sequelize,
        tableName: 'users',
        modelName: 'User',
        validate: {
            // Ensure username and email are different
            usernameNotEmail() {
                if (this.username === this.email) {
                    throw new Error('Username cannot be the same as email');
                }
                return true;
            },
            // Check age is valid
            
            // Ensure password doesn't contain username or email
            
        }
    }
);