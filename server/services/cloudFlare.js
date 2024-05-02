const axios = require("axios");
const { envDefaults } = require("../config/config");

const uploadToCloudFlare = async (formData) => {
  const res = await axios
    .post(
      `https://api.cloudflare.com/client/v4/accounts/${envDefaults.cloudFlareAccountId}/images/v1`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${envDefaults.cloudFlareApiKey}`,
          "Content-Type": "multipart/form-data",
        },
      }
    )
    .then((response) => {
      if (response.data) {
        let result = response.data.result;
        return result.variants[0];
      }
    })
    .catch((error) => {
      return false;
    });

  return res;
};

module.exports = { uploadToCloudFlare };
