import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(
  username: string,
  password: string,
  name: string
) {
  try {
    // await client.connect();
    const query = "INSERT INTO users(username,password,name) VALUES($1,$2,$3)";
    const values = [username, password, name];
    const result = await client.query(query, values);
    return result;
  } catch (error) {
    throw error;
  } finally {
    // client.end();
  }
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
  try {
    // await client.connect();
    const query = "SELECT * FROM users WHERE id=$1";
    const values = [userId];
    const result = await client.query(query, values);
    if (result.rows.length > 0) return result.rows[0];
  } catch (error) {
    throw error;
  } finally {
    // client.end();
  }
}
