module.exports = (sequelize, DataTypes) => {
    const Vendor = sequelize.define("vendor", {
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false
            },
            option1: {
                type: DataTypes.STRING,
                allowNull: false
            },
            option2: {
                type: DataTypes.STRING,
                allowNull: false
            },
            option3: {
                type: DataTypes.STRING,
                allowNull: false
            },
            option4: {
                type: DataTypes.STRING,
                allowNull: false
            },
            option5: {
                type: DataTypes.STRING,
                allowNull: false
            }
    })


    Vendor.associate = function(models){
        console.log(models)
        Vendor.belongsToMany(models.ticket, {
            through: 
              "reservation"
            ,
            foreignKey: {
                    name: "reservationNumber"
                },
        })
    }

    return Vendor;
}