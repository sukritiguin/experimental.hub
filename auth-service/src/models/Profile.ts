import { DataTypes, Model } from "@sequelize/core"; 
import { ProfileAttributes } from "../types/profile";
import sequelize from "../sequelize";

class Profile extends Model<ProfileAttributes> {
    declare id: number;
    declare username: string;
    declare college: string;
    declare school: string;
    declare degree: string;
    declare readonly createdAt: Date;
    declare readonly updatedAt: Date;
}

Profile.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        college: {
            type: DataTypes.STRING,
            allowNull: false
        },
        school: {
            type: DataTypes.STRING,
            allowNull: false
        },
        degree: {
            type: DataTypes.STRING,     
            allowNull: false
        }
    },
    {
        sequelize,
        tableName: 'profiles',
        modelName: 'Profile',
        validate: {
            
        }
    }
);

export default Profile;