// const Clarifai = require('clarifai');

// const app = new Clarifai.App({
//   apiKey: "1dd71df244d743c9990efac5c8cdeb74"
// });

// const handleApiCall = (req, res) => {
// 	app.models
// 	.predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
// 	.then(data =>{
// 		res.json(data);
// 	})
// 	.catch(err => res.status(400).json('unable to get picture'));
// }

const handleImage = (req, res, db) => {
	const { id } = req.body;
	db.select('*').from('users')
	.where('id', '=', id)
	.increment('entries', 1)
	.returning('entries')
	.then(entries => {
		return res.json(entries[0].entries);
		console.log(entries[0].entries);
	})
	.catch(err => res.status(404).json('unable to get entries'));
}

module.exports = {
	handleImage: handleImage,
	// handleApiCall: handleApiCall
}