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



// id INT NOT NULL AUTO_INCREMENT,
// name VARCHAR(30),
// description VARCHAR(250),
// option1 VARCHAR(150),
// option2 VARCHAR(150),
// option3 VARCHAR(150),
// option4 VARCHAR(150),
// option5 VARCHAR(150),
// PRIMARY KEY (id)

    Vendor.associate = function(models){
        Vendors.belongsToMany(models.Ticketing, {
            foreignKey: {
                name: "reservationNumber"
            }
        })
    }
    return Vendors;
}

