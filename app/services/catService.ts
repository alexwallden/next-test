import axios from "axios";

export const getCats = async () => {
    const response = await axios.get("/api/cats");
    return response.data.cats;
};
