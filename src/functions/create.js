import fs from 'node:fs/promises'
import { v4 as uuidv4 } from 'uuid';

const createAsync = async(user) => {
  try {
    const userToCreate = {
      id: uuidv4(),
      ... user
    }
    await fs.appendFile('data/users.json', JSON.stringify(userToCreate) + "\n");
    await fs.writeFile(`data/users/user_${userToCreate.id}.json`, JSON.stringify(userToCreate))
  } catch (err) {
    console.log(err);
  }
}


const args = process.argv.slice(2);

await createAsync({
  firstName: args[0],
  lastName: args[1],
  description: args[2]})