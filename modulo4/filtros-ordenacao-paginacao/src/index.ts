import { getUsersPag } from './endpoints/getUsersPag copy';
import { getOrderUsers } from './endpoints/getUsersOrder';
import { getAllUsersFilterByName } from './endpoints/getAllUsersFilterByName';
import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getAllUsersFinal } from "./endpoints/getAllUsersFinal";
import { getAllUsersFilterByType } from './endpoints/getAllUsersFilterByType';


/* app.get("/users", getAllUsers) */
// Ex1 a)
/* app.get("/users", getAllUsersFilterByName) */

//Ex1 b)
/* app.get("/users/:type", getAllUsersFilterByType) */

//Ex2
/* app.get("/users", getOrderUsers) */

//Ex3
/* app.get("/users", getUsersPag) */

//Ex4
app.get("/users/:type", getAllUsersFinal)