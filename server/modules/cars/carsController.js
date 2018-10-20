var carsModel = require('./carsModel.js');

/**
 * carsController.js
 *
 * @description :: Server-side logic for managing carss.
 */
module.exports = {

    /**
     * carsController.list()
     */
    list: function (req, res) {
        carsModel.find(function (err, carss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting cars.',
                    error: err
                });
            }
            return res.json(carss);
        });
    },

    /**
     * carsController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        carsModel.findOne({_id: id}, function (err, cars) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting cars.',
                    error: err
                });
            }
            if (!cars) {
                return res.status(404).json({
                    message: 'No such cars'
                });
            }
            return res.json(cars);
        });
    },

    /**
     * carsController.create()
     */
    create: function (req, res) {
        var cars = new carsModel({
			door : req.body.door,
			color : req.body.color,
			name : req.body.name,
			owner : req.body.owner

        });

        cars.save(function (err, cars) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating cars',
                    error: err
                });
            }
            return res.status(201).json(cars);
        });
    },

    /**
     * carsController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        carsModel.findOne({_id: id}, function (err, cars) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting cars',
                    error: err
                });
            }
            if (!cars) {
                return res.status(404).json({
                    message: 'No such cars'
                });
            }

            cars.door = req.body.door ? req.body.door : cars.door;
			cars.color = req.body.color ? req.body.color : cars.color;
			cars.name = req.body.name ? req.body.name : cars.name;
			cars.owner = req.body.owner ? req.body.owner : cars.owner;
			
            cars.save(function (err, cars) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating cars.',
                        error: err
                    });
                }

                return res.json(cars);
            });
        });
    },

    /**
     * carsController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        carsModel.findByIdAndRemove(id, function (err, cars) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the cars.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
