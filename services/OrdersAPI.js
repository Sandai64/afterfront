import {instance} from "../config/axios";

const getOrders = () => {
  return instance.get("/orders").then(r => r.data);
}

const getOrderProducts = (command) => instance.get(`/orders/${command}`).then(r => r.data);

export default { getOrders, getOrderProducts };
