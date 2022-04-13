import { getAllUsersFilterByName } from './endpoints/getAllUsersFilterByName';
import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getAllUsersFilter } from "./endpoints/getAllUsersFilter";
import { getAllUsersFilterByType } from './endpoints/getAllUsersFilterByType';


/* app.get("/users", getAllUsers) */
// Ex1 a)
/* app.get("/users", getAllUsersFilterByName) */

//Ex1 b)
app.get("/users/:type", getAllUsersFilterByType)

//Ex2



