module.exports = (sequelize, DataTypes) => {
    const Vendor = sequelize.define("vendor", {
        name: {
            type: DataTypes.STRING
        }
    })

    return Vendor;
}