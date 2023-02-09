const { Schema, model } = require("mongoose");

const cooksSchema = new Schema(
  {
    "type": "object",
      "monday": {
        "type": "array",
        "items": [
          {
            "type": "string"
          },
        ]
      },
      "tuesday": {
        "type": "array",
        "items": [
          {
            "type": "string"
          },

        ]
      },
      "wednesday": {
        "type": "array",
        "items": [
          {
            "type": "string"
          },
        ]
      },
      "thursday": {
        "type": "array",
        "items": [
          {
            "type": "string"
          },
        ]
      },
      "friday": {
        "type": "array",
        "items": [
          {
            "type": "string"
          },
        ]
      }
  },
  {
    versionKey: false
  }
);

module.exports = model("Cooks", cooksSchema);
