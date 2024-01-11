import axios from 'axios';

async function getAllCards() {
  try {
    const response = await axios.get(`/card`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
async function getCard(id) {
  try {
    const response = await axios.get(`/card/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function postCard(card) {
  try {
    const response = await axios.post(`/card`, card);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function putCard(id) {
  try {
    const response = await axios.put(`/card/${id}`, card);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function delCard(id) {
  try {
    const response = await axios.delete(`/card/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export { getAllCards, getCard, postCard, putCard, delCard };
