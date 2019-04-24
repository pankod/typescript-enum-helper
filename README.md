# enum helper npm package

You can use this enum-helper module to easier get the names and value in TypeScript.
<br/>
<div align="center">
  <sub>Created by <a href="https://www.pankod.com">Pankod</a></sub>
</div>

<br/>
## Getting Started

```
$ npm install typescript-enum-helper --save
```
<br/>

## Usage
```
import EnumHelper from '@pankod/typescript-enum-helper';
```

## API

Enum Data
```
enum Gods {
    Pan,Ares,Zeus,Hermes,Apollo,Uranus,Achelous,Atlas,Castor,Chaos,Hades,Heracles,Poseidon
}
```


| API | Description | Example Output |
| ------ | ------ | ------ | 
| **getKeys** | It should enum helper get keys array in enum |[0, 1, 2, 3, 4]|
| **getValues** | It should enum helper get values array in enum | ['Pan','Ares','Zeus','Hermes','Apollo','Uranus','Achelous','Atlas','Castor','Chaos','Hades','Heracles','Poseidon']
| **getName** |It should get value in enum with enum helper | Pan |

## Example in TypeScript

```
import { EnumHelper } from './Helper'
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


```
