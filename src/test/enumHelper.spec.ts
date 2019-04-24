// Local Imports
import { EnumHelper } from '../Helper';
import { Gods } from '../Interfaces';
describe('Test Enum Helper Constructor', () => {

    it('should module exist', () => {
        expect(EnumHelper).toBeDefined();
    });

});

describe('EnumHelper actions test', () => {

    it('should enum helper get keys array in enum', () => {
        const result = EnumHelper.getKeys(Gods);
        expect(Array.isArray(result)).toBeTruthy();
    });

    it('should enum helper get values array in enum', () => {
        const result = EnumHelper.getValues(Gods);
        expect(Array.isArray(result)).toBeTruthy();
    });

    it('should get value in enum with enum helper', () => {
        const result = EnumHelper.getName(Gods, Gods.Pan);
        expect(result).toEqual('Pan');
    });

});
