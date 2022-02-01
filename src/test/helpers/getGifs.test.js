import { getGift } from "../../helpers/getGifs"

describe('Pruebas con get gift en Fetch', () => {
    test('Debe de traer 10 elementos ', async() => {
        const gif = await getGift('one Punch')
        expect(gif.length).toBe(10);
    
    })
    test('Debe de traer 0 elementos ', async() => {
        const gif = await getGift('')
        expect(gif.length).toBe(0);
    
    })
    
})
