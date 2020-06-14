const express = require("express")
const router = express.Router();
const bootcamps = require("../controller/bootcamps")

router.route('/')
    .get(bootcamps.getBootcamps)
    .post(bootcamps.postBootcamp)

router.route('/:id')
    .get(bootcamps.getBootcamp)
    .put(bootcamps.putBootcamp)
    .delete(bootcamps.deleteBootcamp)

module.exports = router;