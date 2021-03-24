import API from "../api/Api";
import { SITESERVICE } from "../api/endpoints";

export async function listServices() {
  const api = new API();
  return api.get(SITESERVICE).then(
    (res) => {
      return res.data;
    },
    (error) => {
      throw error;
    }
  );
}
