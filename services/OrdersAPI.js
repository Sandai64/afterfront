import { instance } from '../config/axios';

const getOrders = () => {
  return instance.get('/orders').then(r => r.data);
};

const getOrderProducts = order =>
  instance.get(`/orders/${order}`).then(r => r.data);

const getStatuts = () => instance.get('/statuts').then(r => r.data);

const setOrderStatut = (order, statut) =>
  instance.post(`/orders/${order}/${statut}`).then(r => r.data);

export default { getOrders, getOrderProducts, getStatuts, setOrderStatut };
