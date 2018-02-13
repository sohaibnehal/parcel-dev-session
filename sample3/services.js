
module.exports = {

    fetchUser: async(id) => {
        let api = `/api/users/${id}`;

        return await(await fetch(api, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })).json();
    },

    helloWorld: () => {
        console.log('hello world');
    }


};
