module.exports = (sequelize, DataTypes) => {
    const Tickets = sequelize.define("tickets", {
            menuSelection: {
                type: DataTypes.STRING,
                allowNull: true
            },
            customerName: {
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
    })
    Tickets.associate = function(models){
        Tickets.hasMany(models.Vendors, {
            onDelete:"cascade"
        })
    }
    return Tickets;
}

