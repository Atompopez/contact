const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			delete : (id) =>{
				fetch("https://playground.4geeks.com/apis/fake/contact/"+id,{
					method: 'DELETE',
					headers: {'Content-Type': 'application/json',}
				})
			},
			modificar: (list) => {
				const store = getStore();
				setStore({ contacts: list });
			}
		}
	};
};

export default getState;
