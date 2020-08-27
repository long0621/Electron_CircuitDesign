import axios from 'axios';


const actions ={
  //尚未設定基本api
  // async AskLogin(context, userData) {
	// 	const url = `/api/Auth/login`;
	// 	await axios
	// 		.post(url, userData, {
	// 			headers: {
	// 				'Content-Type': 'application/json'
	// 			}
	// 		})
	// 		.then(res => {
	// 			context.commit('StoreLoginInformation', res);
	// 		})
	// 		.catch(err => {
	// 			//login fail, get object then throw err
	// 			const errorData = err.response.data;
	// 			throw new Error(errorData.message);
	// 		});
	// },
}


export { actions };
