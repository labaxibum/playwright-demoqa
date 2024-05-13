const Ajv = require("ajv");
let ajv = new Ajv.default({ allErrors: true });;
var deleteBookSchema = {
    type: "object",
    required: ["userId", "isbn", "message"],
    properties: {
        userId: {
            type: "string",
        },
        isbn: {
            type: "string",
        },
        message: {
            type: "string",
        },
    },
};

var userSchema = {
    "type": "object",
    "properties": {
        "token": {
            "type": "string"
        },
        "expires": {
            "type": "string"
        },
        "status": {
            "type": "string"
        },
        "result": {
            "type": "string"
        }
    },
    "required": [
        "token",
        "expires",
        "status",
        "result"
    ]
};

var addBookJsonSchema = {
    type: "object",
    properties: {
        books: {
            type: "array",
            items: [
                {
                    type: "object",
                    properties: {
                        isbn: {
                            type: "string",
                        },
                    },
                    required: ["isbn"],
                },
            ],
            minItems: 1,
            additionalItems: false
        },
    },
    required: ["books"],
};
export class apiHelper {
    static async validationFunction(schemaStructure, responseMessage) {
        const validate = ajv.compile(schemaStructure);
        const valid = validate(responseMessage);
        if (!valid) console.log(validate.errors);
    }
    static validateTheAddBookSchema(responseMessage) {
        this.validationFunction(addBookJsonSchema, responseMessage);
    }
    static validateTheDeleteBookSchema(responseMessage) {
        this.validationFunction(deleteBookSchema, responseMessage);
    }

    static validateTheUserSchema(responseMessage) {
        this.validationFunction(userSchema, responseMessage);
    }
}
