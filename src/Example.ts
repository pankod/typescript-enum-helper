import { EnumHelper } from './index'
import { Gods } from './Interfaces';
// enum Gods {
//     Pan,
//     Ares,
//     Zeus,
//     Hermes,
//     Apollo,
//     Uranus,
//     Achelous,
//     Atlas,
//     Castor,
//     Chaos,
//     Hades,
//     Heracles,
//     Poseidon
// }

// resultKeys will be equal to: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
const resultKeys = EnumHelper.getKeys(Gods);

// resultValues  will be equal to:[ 'Pan','Ares','Zeus','Hermes','Apollo','Uranus','Achelous','Atlas','Castor','Chaos','Hades','Heracles','Poseidon' ]
const resultValues = EnumHelper.getValues(Gods);

// resultName  will be equal to: Pan
const resultName = EnumHelper.getName(Gods, 0);
