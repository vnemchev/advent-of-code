"use strict";
function rocketTyrrany(input) {
    var parsed = input.split('\n').map(Number);
    var currentSum = 0;
    var sum = 0;
    parsed.forEach(function (mass) {
        calcFuel(mass);
    });
    return sum;
    function calcFuel(fuelMass) {
        var fuelNeeded = Math.floor(fuelMass / 3 - 2);
        currentSum += fuelNeeded;
        var newFuelNeeded = Math.floor(fuelNeeded / 3 - 2);
        if (newFuelNeeded <= 0) {
            sum += currentSum;
            return (currentSum = 0);
        }
        else {
            calcFuel(fuelNeeded);
        }
    }
}
console.log(rocketTyrrany("147308\n51605\n71317\n110882\n92545\n126856\n104937\n92433\n107850\n119538\n82733\n52216\n105704\n123682\n105919\n136265\n100540\n84245\n72006\n111652\n85116\n85841\n71374\n144196\n125493\n113529\n64637\n87489\n138161\n120897\n53384\n83310\n126144\n120672\n107681\n101369\n77469\n141056\n140426\n114920\n124454\n130867\n64611\n104813\n138808\n114234\n148654\n59031\n91367\n83316\n106192\n127495\n139980\n119024\n149567\n57007\n61075\n65637\n75293\n61670\n104044\n77230\n80201\n137094\n99733\n50801\n68922\n148404\n79980\n62716\n67666\n72694\n81951\n108427\n111721\n55532\n94442\n88562\n101088\n111656\n111649\n92085\n91730\n114744\n59355\n55842\n100926\n146370\n147829\n62160\n91447\n115745\n141815\n106837\n68151\n89077\n60357\n89856\n75040\n139131"));
//# sourceMappingURL=rocket-tyranny.js.map