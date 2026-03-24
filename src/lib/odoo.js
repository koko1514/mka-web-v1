import Odoo from "odoo-xmlrpc";

const odoo = new Odoo({
  url: process.env.ODOO_URL,
  port: parseInt(process.env.ODOO_PORT),
  db: process.env.ODOO_DB,
  username: process.env.ODOO_USERNAME,
  password: process.env.ODOO_PASSWORD,
});

export const connectOdoo = () => {
  return new Promise((resolve, reject) => {
    odoo.connect(function (err) {
      if (err) {
        console.error("Gagal konek ke Odoo:", err);
        return reject(err);
      }
      console.log("Berhasil konek ke Odoo!");
      resolve(odoo);
    });
  });
};

export const executeOdoo = async (model, method, params) => {
  const odooInstance = await connectOdoo();
  return new Promise((resolve, reject) => {
    odooInstance.execute_kw(model, method, params, function (err, value) {
      if (err) {
        console.error(`Gagal mengeksekusi ${method} pada ${model}:`, err);
        return reject(err);
      }
      resolve(value);
    });
  });
};
