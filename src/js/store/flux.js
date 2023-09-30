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
			},
			guardar : (data) => {
				fetch("https://playground.4geeks.com/apis/fake/contact", {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(data)
				})
			},
			update : (data,id) => {
				fetch("https://playground.4geeks.com/apis/fake/contact/"+id, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(data)
				})
			}
		}
	};
};

export default getState;
