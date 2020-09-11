module.exports = (sequelize, DataTypes) => {
    const Waitlist = sequelize.define("waitlist", {
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
            },
    })
    Waitlist.associate = function(models){
        console.log(models)
        Waitlist.hasMany(models.vendor, {
            onDelete:"cascade"
        })
    }
    return Waitlist;
}