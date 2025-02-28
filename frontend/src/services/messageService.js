import axios from "axios";

const API_URL = "http://localhost:5000/api/messages";

export async function sendMessage(senderId, receiverId, text) {
  return axios.post(API_URL, { senderId, receiverId, text });
}

export async function getMessages(senderId, receiverId) {
  return axios.get(`${API_URL}/${senderId}/${receiverId}`);
}
