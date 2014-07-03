/**
 * Created by Cristian Garcia on 7/1/2014.
 */


var n = 10000, i, a,
    MRamda = MaybeRamda (undefined),
    Mnew = Maybe (undefined),
    ApRamda = MaybeRamda (double),
    ApNew = Maybe (double),
    R = ramda;


function double (a) {return 2*a;}
function doubleMold (a) {return MaybeRamda (double (a));}
function doubleMnew (a) {return Maybe (double (a));}



console.time ("MapRamda");
i = -1;
while (++i < n) {
    a = MRamda.map (double);
}
console.timeEnd("MapRamda");
console.time ("MapNew");
i = -1;
while (++i < n) {
    a = Mnew.map (double);
}
console.timeEnd("MapNew");



console.time ("ApRamda");
i = -1;
while (++i < n) {
    a = MRamda.map (double);
}
console.timeEnd("ApRamda");
console.time ("ApNew");
i = -1;
while (++i < n) {
    a = Mnew.map (double);
}
console.timeEnd("ApNew");



console.time ("ChainRamda");
i = -1;
while (++i < n) {
    a = MRamda.chain (doubleMold);
}
console.timeEnd("ChainRamda");
console.time ("ChainNew");
i = -1;
while (++i < n) {
    a = Mnew.chain (doubleMnew);
}
console.timeEnd("ChainNew");

m1 = Maybe (2);
m2 = Maybe (3);
m1.of (R.add) .ap (m1) .ap (m2);