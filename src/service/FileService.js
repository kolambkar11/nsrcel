import axios from "axios";

const FILES_API_BASE_URL = "https://646312614dca1a661353d0ee.mockapi.io/api/Files";

class FileService {
  getFiles() {
    return axios.get(FILES_API_BASE_URL);
  }
}

export default new FileService();
