const { Schema, model, models } = require("mongoose");

const orderSchema = new Schema({
    line_items: Object,
    name: String,
    city: String,
    email: String,
    postalCode: String,
    streetAddress: String,
    country: String,
    paid: {
        type: Boolean
    }
})

export const Order = models?.Order || model('Order', orderSchema)