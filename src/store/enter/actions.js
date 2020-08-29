import axios from 'axios';


const actions ={
  async AskOhm(context, data) {
		const url = `/api/calculate/ohm`;
		console.log(data);
		await axios
			.post(url, data, {
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then(res => {
				console.log(res);
				context.commit('StoreOhmResult', res);
			})
			.catch(err => {
				//login fail, get object then throw err
				const errorData = err.response.data;
				throw new Error(errorData.message);
			});
	},
}


export { actions };
