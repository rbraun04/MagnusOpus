module.exports = (sequelize, DataTypes) => {
    const Ticket = sequelize.define("ticket", {
            menuSelection: {
                type: DataTypes.STRING,
                allowNull: true
            },
            customerName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            customerPhoneNumber: {
                type: DataTypes.STRING,
                allowNull: false
            },
            customerEmail: {
                type: DataTypes.STRING,
                allowNull: false
            },
            customerlicenseID: {
                type: DataTypes.STRING,
                allowNull: false
            },
            carMake: {
                type: DataTypes.STRING,
                allowNull: false
            },
            carModel: {
                type: DataTypes.STRING,
                allowNull: false
            },
            reservationNumber: {
                type: DataTypes.STRING,
                allowNull: true
            }
    })
    Ticket.associate = function(models){
        console.log(models)
        Ticket.hasMany(models.vendor, {
            onDelete:"cascade"
        })
    }
    return Ticket;
}

