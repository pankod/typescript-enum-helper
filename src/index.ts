export class EnumHelper {

	/**
	 *
	 * @param Enum
	 * description get all keys in enum
	 * example output : [0,1,2,3,4...]
	 */
    static getKeys = (Enum): object => {
        const result = Object.keys(Enum).map(key => Enum[key]).filter(value => typeof value === 'number');

        return result;
    };

	/**
	 *
	 * @param Enum
	 * description get all values in enum
	 * example output : [a,b,c,d,e...]
	 */
    static getValues = (Enum): object => {
        const result = Object.keys(Enum).map(key => Enum[key]).filter(value => typeof value === 'string');

        return result;
    };

	/**
	 *
	 * @param Enum
	 * @param Value
	 * description get key value in enum
	 * example output : A
	 */
    static getName = (Enum, Value): string => Enum[Value];

}