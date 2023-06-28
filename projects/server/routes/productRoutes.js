const express = require("express");
const router = express.Router();
const { productController } = require("../controllers");
const upload = require("../middleware/multerProduct");

router.get("/latest", productController.getLatestProduct);
router.get("/filter", productController.getAllProductsByFilter);
// router.get("", productController.adminProduct);
router.put("/stock/:idProduct", productController.updateStock);
router.get('', productController.adminProduct)
router.put('/stock/:idProduct', productController.updateStock)
router.post('/unit-conversions', productController.UnitConversionRules)
router.get('/rules', productController.fetchRules)
router.post('/assign-rule/:idProduct', productController.setConversionRules)
router.put('/change-unit/:idProduct', productController.changeDefaultUnit)
router.delete('/remove-rule/:idProduct',productController.removeRule)
router.get("/:idProduct", productController.getProductById);
router.post("/", upload.single("file"), productController.createProduct);
router.put("/:idProduct", upload.single("file"), productController.updateProduct);
router.delete("/:idProduct", productController.deleteProduct);

module.exports = router;
