const Store = require('./../modules/storeSchema.js');

// create a new Store
exports.createStore = async (req, res) => {
    try {
        const { name, code, address } = req.body;

        if (!name || !code) {
            return res.status(400).json({
                status: 'failed',
                message: 'Name and code are required.'
            });
        }

        const newStore = await Store.create({
            name,
            code,
            address
        });

        res.status(201).json({
            status: 'success',
            data: newStore
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message
        });
    }
};

// get all Stores
exports.getStores = async (req, res) => {
    try{
        const stores = await Store.find();
        res.status(200).json({
            status: "success",
            data: {
                stores
            }
        })
    }catch(err){
        res.status(404).json({
            status: "Failed",
            message: err.message
        })
    }
}

// updates a specific Store by its id
exports.updateStore = async (req, res) => {
    try{
        const updatedStore = await Store.findByIdAndUpdate(
            req.params.id,
            req.body
            );
        res.status(200).json({
            status: "success",
            data: updatedStore
        })
    }catch(err){
        res.status(400).json({
            status: 'failed',
            message: err.message
        })
    }
}


// deletes a specific Store by its id
exports.deleteStore = async (req, res) => {
    try{
        await Store.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: "deleted successful",
            data:null
        })
    }catch(err){
        res.status(404).json({
            status: "error",
            msg: err.message
        })
    }

}
