import axios from 'axios';

export const fetchDocs = () => axios.get("/api/document/get");
export const createDoc= (newDoc) => axios.post("/api/document/add", newDoc);
export const updateDoc = (id, updatedDoc) => axios.patch(`/api/document/edit/${id}`, updatedDoc);
export const deleteDoc = (id) => axios.delete(`/api/document/delete/${id}`);
