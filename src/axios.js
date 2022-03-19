import axios from "axios";
const config = {}
if (process.env.NODE_ENV === "development") {
} else {
}
export default axios.create(config);