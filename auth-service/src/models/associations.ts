import { Sequelize } from "@sequelize/core";
import { User } from "./User.js";
import Profile from "./Profile.js";

export function initAssociations(sequelize: Sequelize) {
    // One-to-One relationship between User and Profile
    User.hasOne(Profile, { 
        foreignKey: "username", 
        sourceKey: "username",
        as: 'profile'
    });
    
    Profile.belongsTo(User, { 
        foreignKey: "username", 
        targetKey: "username",
        as: 'user'
    });
}