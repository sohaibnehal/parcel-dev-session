
import { fetchUser } from './services';

const log = console.log;
const table = console.table;

window.onload = async() => {
    try {
        let response = await fetchUser(1);
        table(response.data);
    } catch (e) {
        log(e);
    }
};
