module.exports = (sequelize, DataTypes) => {
    const Vendor = sequelize.define("vendor", {
        name: {
            type: DataTypes.STRING
        }
    })
    Vendor.associate = function(models){
        Vendor.belongsToMany(models.Ticketing, {
            foreignKey: {
                name: "reservationNumber"
            }
        })
    }
    return Vendor;
}