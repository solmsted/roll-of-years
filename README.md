# roll-of-years

> A comprehensive list of the names of the years

In the Forgotten Realms, a Netherese magic scholar named _Augathra the Mad_ gave
a name to each year from -700 DR to 1600 DR. This list of names became known as
the roll of years. Over time some of the original names were lost or forgotten.
A sage named _Alaundo the Seer_ made some changes and filled in the gaps using
the most significant event he had prophesied would occur that year.

## Usage

This module's default export is an object. The name of the year is keyed by the
Dalereckoning year number.

When using ECMAScript modules:

```JavaScript
import rollOfYears from 'roll-of-years';

console.log(rollOfYears[1502]);
```

When using CommonJS modules:

```JavaScript
const rollOfYears = require('roll-of-years').default;

console.log(rollOfYears[1502]);
```

## License

This module uses material from the ["Years by name"](
https://forgottenrealms.fandom.com/wiki/Category:Years_by_name) article on the
[Forgotten Realms Wiki](https://forgottenrealms.fandom.com/) at [Fandom](
https://www.fandom.com/) under the [Creative Commons Attribution-Share Alike
License](https://creativecommons.org/licenses/by-sa/3.0/).
