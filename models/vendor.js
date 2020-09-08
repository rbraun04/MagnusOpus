module.exports = (sequelize, DataTypes) => {
    const Vendors = sequelize.define("vendor", {
        name: {
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
        }
    })

    Vendor.associate = function(models){
        Vendors.belongsToMany(models.Ticketing, {
            foreignKey: {
                name: "reservationNumber"
            }
        })
    }
    return Vendors;
}

