import sequelize from '../sequelize.js';
import { User } from '../models/User.js';
import Profile from '../models/Profile.js';
import { initAssociations } from '../models/associations.js';

// Initialize associations before running tests
initAssociations(sequelize);

async function testAssociation() {
    try {
        // Sync the database (this will create the tables if they don't exist)
        await sequelize.sync({ force: true });

        // Create a user
        const user = await User.create({
            name: 'Test User',
            email: 'test@example.com',
            password: 'TestPassword123!',
            username: 'testuser',
            dateOfBirth: new Date('1990-01-01')
        });

        // Create a profile for the user
        const profile = await Profile.create({
            username: user.username,  // This links the profile to the user
            college: 'Test College',
            school: 'Test School',
            degree: 'Test Degree'
        });

        // Test fetching user with profile
        const userWithProfile = await User.findOne({
            where: { username: 'testuser' },
            include: [{
                model: Profile,
                as: 'profile'
            }]
        });

        console.log('User with Profile:', JSON.stringify(userWithProfile, null, 2));

        // Test fetching profile with user
        const profileWithUser = await Profile.findOne({
            where: { username: 'testuser' },
            include: [{
                model: User,
                as: 'user'
            }]
        });

        console.log('Profile with User:', JSON.stringify(profileWithUser, null, 2));

        console.log('Association test completed successfully!');
    } catch (error) {
        console.error('Error testing associations:', error);
    } finally {
        await sequelize.close();
    }
}

// Run the test
testAssociation();
