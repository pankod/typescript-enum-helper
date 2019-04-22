import { IGods } from '../Interfaces/index'
import Gods from '../index'

const godsApi = new Gods()

describe('Gods API', () => {
    test('should create a new god', () => {
        const godData: IGods = {
            name: 'Pan'
        }

        const god: IGods = godsApi.create("Pan")

        expect(god).toEqual(godData)
    })
})