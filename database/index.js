const { Sequelize, DataTypes } = require('sequelize');
const { get } = require('../routes');
// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('recipeApp', 'postgres', 'password!', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
  });

  const db_authenticate = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }
  db_authenticate()

  const user = sequelize.define(
    'user',
    {
      // Model attributes are defined here
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password_hint: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
     paranoid: true,
    },
  )

  const recipe = sequelize.define(
    'recipe',
    {
      // Model attributes are defined here
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
     date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        
      },
      prep_time: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      cook_time: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        
      },
      yield: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      
    },
  )
 
  const ingredient = sequelize.define(
    'ingredient',
    {
      // Model attributes are defined here
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        
      },
      
    },
  )
    const recipeInstruction = sequelize.define(
      'recipeInstruction',
      {
        // Model attributes are defined here
        description: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        instruction_steps: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        tips_for_success: {
          type: DataTypes.TEXT,
        },
        
      },
    )

  user.hasMany(recipe)
  recipe.belongsTo(user)
  recipe.hasMany(ingredient)
  ingredient.belongsTo(recipe)
  recipe.hasMany(recipeInstruction)
  recipeInstruction.belongsTo(recipe)
  sequelize.sync({alter: true})


  //creating a user in the database
//   const create_user =  () => {
//     const user = 
//     user.create({
//     firstName: 'Welben',
//     lastName: 'Danny',
//     email: 'danny@me.com',
//     password: 'bubblester',
//     userName: 'danny',
//     phone: '8901638361',
//     password_hint: 'secret'
//   }
// )
  
// console.log(user)
// }



// const update_user = async (id) =>  {
//     const user = await user.update(
//         {firstName: 'Joseph', userName: 'Jossy'}, 
//         {where: {id: id}} 
//     ) 
    
// }

// 

//Delete user from the database
//user.destroy({where: {id: 3}})

//Querying the database

const getAllUsers = async () => {
    const users = await user.findAll()
    console.log(users.map(user => user.toJSON()))

const get_one_user = async () => {
    const user = await user.findOne({
        where: {email: 'tten@avengers.com'},
    })
    console.log(user.toJSON())
}    
}
// create_user()
//update_user(6)
//getAllUsers()
get_one_user()

/**
 * Retrieves all users from the database and logs their JSON representation.
 *
 * @return {Promise<void>} A promise that resolves when the users have been retrieved and logged.
 */