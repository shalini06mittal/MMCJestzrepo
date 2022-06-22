const axios = require('axios');
const Users = require('../../src/users')

const expectedResponse = [
    {
        "id": 1,
        "first_name": "Robert",
        "last_name": "Schwartz",
        "email": "rob23@gmail.com"
    },
    {
        "id": 2,
        "first_name": "Lucy",
        "last_name": "Ballmer",
        "email": "lucyb56@gmail.com"
    },
    {
        "id": 3,
        "first_name": "Anna",
        "last_name": "Smith",
        "email": "annasmith23@gmail.com"
    }
]
jest.mock('axios');

describe('Users API',()=>{
    test('returns all users',()=>{
        const response = {data : expectedResponse};
        axios.get.mockImplementation(()=>Promise.resolve(response));
        //axios.get.mockResolvedValueOnce(response);
        Users.all().then(resp => expect(resp.data).toEqual(expectedResponse));
        expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/users');
    });
})