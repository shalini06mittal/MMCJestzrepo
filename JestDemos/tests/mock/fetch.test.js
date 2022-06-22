/**
 * @jest-environment jsdom
 */
const getUsers = require('../../src/fetch');
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
describe('Fetch API For Users Data',()=>{
    it('returns an array of users',async()=>{
        global.fetch = jest.fn().mockImplementation(()=>{
            const fetchResponse={
                ok:true,
                json:()=>Promise.resolve(expectedResponse)
            }
            return Promise.resolve(fetchResponse);
        });
        const alertMock = jest.spyOn(window,'alert').mockImplementation();
        const json = await getUsers();
        expect(json).toMatchObject(expectedResponse);
        expect(alertMock).toHaveBeenCalled();
        expect(window.fetch).toHaveBeenCalledWith("http://localhost:3000/users/");
        expect(window.fetch).toHaveBeenCalledTimes(1);
    })
})