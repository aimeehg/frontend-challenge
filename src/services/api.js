import axios from "axios";
import env from "../settings/env";

const BASE_URL = `${env.root}${env.businesses}`;

export const OFFERS = async page =>
    await axios.get(`${BASE_URL}?epp=15&p=${page}`);
