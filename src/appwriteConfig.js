import { Client,Account} from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('660ce8155f9ab266326c');
export const account = new Account(client);    

export default client    