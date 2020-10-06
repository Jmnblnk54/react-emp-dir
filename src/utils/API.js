import axios from "axios";

const BASEURL = "https://cors-anywhere.herokuapp.com/https://randomuser.me/api?results=20";


// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function() {
    return axios.get(BASEURL);
  }
};
