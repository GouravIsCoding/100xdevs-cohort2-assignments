import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(
  userId: number,
  title: string,
  description: string
) {
  try {
    // await client.connect();
    const query =
      "INSERT INTO todos(user_id,title,description) VALUES($1,$2,$3) RETURNING *";
    const values = [userId, title, description];
    const result = await client.query(query, values);
    console.log(result);
    return result.rows[0];
  } catch (error) {
    throw error;
  } finally {
    // client.end();
  }
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
  try {
    // await client.connect();
    const query = "UPDATE todos SET done=TRUE WHERE id=$1 RETURNING *";
    const values = [todoId];
    const result = await client.query(query, values);
    return result.rows[0];
  } catch (error) {
    throw error;
  } finally {
    // client.end();
  }
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
  try {
    // await client.connect();
    const query = "SELECT * FROM todos WHERE user_id=$1";
    const values = [userId];
    const result = await client.query(query, values);
    if (result.rows.length > 0) return result.rows;
    return [];
  } catch (error) {
    throw error;
  } finally {
    // client.end();
  }
}
