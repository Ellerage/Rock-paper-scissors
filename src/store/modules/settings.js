export default {
	namespaced: true,
	state: {
		colorBG: 'white',
		arrColorBG: [
			{
				name: 'Белый',
				value: 'white'
			},
			{
				name: 'Серый',
				value: '#EEEEEE'
			},
			{
				name: 'Темно-серый',
				value: '#57606f'
			}
		]
	},
	getters: {
		colorBG(state){
			// Получение текующего цвета
			return state.colorBG;
		},
		arrColorBG(state){
			// Получение списка всех цветов
			return state.arrColorBG;
		}
	},
	mutations: {
		changeColorBG(state, payload){
			state.colorBG = payload;
			document.body.style.backgroundColor = payload;
			window.localStorage.setItem("BGColor", payload);
		}
	},
	actions: {
		changeColorBG(store, payload){
			store.commit('changeColorBG', payload);
		},
		resetHistory(store){ // Удаление истории игр из локального хранилища
			window.localStorage.removeItem("history");
			window.location.reload();
		}
	}
};