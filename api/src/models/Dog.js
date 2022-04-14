const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id:{
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true, 
      defaultValue: DataTypes.UUIDV4
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false

    },
    heightMAX:{
      type: DataTypes.STRING,
      allowNull: false

    },
    heightMIN:{
      type: DataTypes.STRING,
      allowNull: false

    },
    weightMAX:{
      type: DataTypes.STRING,
      allowNull:false

    },
    weightMIN:{
      type: DataTypes.STRING,
      allowNull:false

    },
    life_spanMAX:{
      type:DataTypes.STRING,
    },
    life_spanMIN:{
      type:DataTypes.STRING,
    },
    createdInDb:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  },
  
  {
    timestamps: false
  }
  
  );
};
