import flightModel from '../model/model.js'
export const createFlight = async (req, res) => {
    try {
        const data = req.body
        await flightModel.create(req.body);
        res.status(200).send({ status: true, message: "Successfully" })
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}
export const showFlight = async (req, res) => {
    try {
        const source = req.body.source;
        const destination = req.body.destination;
        const data = await flightModel.find({ source: source, destination: destination }).select({ _id: 0, flight: 1, price: 1 });
        if (data.length == 0) return res.status(404).send({ status: false, message: "Not found" })
        return res.status(200).send({ status: true, message: data })
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}