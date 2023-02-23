//封装网络请求
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";
//向外导出
export default axios;
