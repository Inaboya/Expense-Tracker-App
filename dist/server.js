"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./config/db");
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const transaction_1 = __importDefault(require("./routes/transaction"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//MongoDB Connection
(0, db_1.connectDB)();
//Route Middleware
app.use("/api/v1/transactions", transaction_1.default);
if (process.env.NODE_ENV === "development") {
    app.use((0, morgan_1.default)("dev"));
}
if (process.env.NODE_ENV === "production") {
    app.use(express_1.default.static("/client/build"));
    app.get("*", (req, res) => res.sendFile(path_1.default.resolve(__dirname, "client", "build", "index.html")));
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on ${process.env.NODE_ENV} mode on ${PORT}`);
});
//# sourceMappingURL=server.js.map