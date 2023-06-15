const axios = require("axios");

axios.defaults.baseURL = "https://api.rajaongkir.com/starter";
axios.defaults.headers.common["key"] = "320acd50980f82992b48f72f61c2aff0";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

module.exports = {
  province: async (req, res) => {
    try {
      const province = await axios.get("/province");
      if (province.data.rajaongkir.status.code === 200) {
        return res.status(200).send({
          success: true,
          province: province.data.rajaongkir.results,
        });
      } else {
        return res
          .status(200)
          .send({ success: false, message: "Fail to Fetch Province" });
      }
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  city: async (req, res) => {
    try {
      const id = req.params.provId;
      const city = await axios.get(`/city?province=${id}`);
      if (city.data.rajaongkir.status.code === 200) {
        return res
          .status(200)
          .send({ success: true, city: city.data.rajaongkir.results });
      } else {
        return res
          .status(200)
          .send({ success: false, message: "Fail to Fetch City" });
      }
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};
