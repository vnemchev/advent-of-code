"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
function main(input) {
    var e_1, _a, e_2, _b;
    var boxes = input.split('\n');
    var boxesWithDouble = [];
    var boxesWithTriple = [];
    try {
        for (var boxes_1 = __values(boxes), boxes_1_1 = boxes_1.next(); !boxes_1_1.done; boxes_1_1 = boxes_1.next()) {
            var box = boxes_1_1.value;
            var checkedChars = [];
            try {
                for (var box_1 = (e_2 = void 0, __values(box)), box_1_1 = box_1.next(); !box_1_1.done; box_1_1 = box_1.next()) {
                    var char = box_1_1.value;
                    if (checkedChars.includes(char))
                        continue;
                    checkedChars.push(char);
                    var pattern = new RegExp(char, 'g');
                    var matches = box.match(pattern);
                    var matchesL = matches === null || matches === void 0 ? void 0 : matches.length;
                    if (matchesL == 2 && !boxesWithDouble.includes(box))
                        boxesWithDouble.push(box);
                    if (matchesL == 3 && !boxesWithTriple.includes(box))
                        boxesWithTriple.push(box);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (box_1_1 && !box_1_1.done && (_b = box_1.return)) _b.call(box_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (boxes_1_1 && !boxes_1_1.done && (_a = boxes_1.return)) _a.call(boxes_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return boxesWithDouble.length * boxesWithTriple.length;
}
console.log(main("mgdsdwqulhrinkatfjoyzxcbvq\nmegsdwpulhrinkasfjdyzxcbvk\nmegsdwpulhmibkatfjoyzccbvq\nmegsdwtuohrinkatfjoyzecbvq\nmegsdwpulhdinkatfyoyzxcbvb\nmegszwpulhrirkatfjoyexcbvq\neegsdwpulhzinkatfjoyzxdbvq\nmegsdwpulhginkatfjoyqucbvq\nleqsdwpulhrinkatfeoyzxcbvq\nmegsdwpblhrandatfjoyzxcbvq\nmegrdwpudhrinvatfjoyzxcbvq\nmlgsdwpulhrinkatfuoyzxcbyq\nmensdwpunhrinsatfjoyzxcbvq\nmegsdwpnlhrinqatfjoyzxcbuq\nmegsdwpnlhrinkatfqoysxcbvq\nmegsdwpulhrinkjtfjoywxobvq\nmegsdwpclhbinkaffjoyzxcbvq\nmersdwpulhrinkattjoyzxcbdq\nmegsddpwohrinkatfjoyzxcbvq\nmejsdwpulhrinratfjoyzxcbvl\nmegsdwpujhrinkatfjkbzxcbvq\nmegsdwpujhrinkatfjoyircbvq\nmegsdwgulhrinkatojoyzxcbvm\nqegsdwpulhrinkatfjoyzxggvq\nmegsdwpflhrinkatfjsazxcbvq\nmegsdwpulhridkagfjoyzzcbvq\nmejsdwpulhriykatfjoyyxcbvq\nmeasdwpulhriakatfjoyzacbvq\nmebsdwpulhrinkatfjoyzxmyvq\nmegsdwpflnrinkatfjoyzxcbxq\nmegsdwpulhxinuatfjoytxcbvq\nmegsdwsflhrinkatfjoyzxcmvq\nmegsdwpuuhritkarfjoyzxcbvq\nmegsdwpulhrinkazfjoyexcjvq\nmegsdwpulhrifkatfjokzxcbvc\nmegsdwmulvrinkatfjoyzxcblq\nmeggdwpulhrfnkatfjoybxcbvq\nmegsdwptlhrindatyjoyzxcbvq\nmegsdwpulhrinkauqjoyzxibvq\nmegsdwddlhrifkatfjoyzxcbvq\nmegddwpulhrinkagfjoyzxcbva\nmessdupulhrinkatfjoyzxqbvq\nmegsdwpuahrinkatfjotzxchvq\nmegsewpulhrankathjoyzxcbvq\nmegsdwpulhrinkatfjoynqcbvv\nmegsdwpulhrifkatfjotzxcbtq\nmegsdjpulcrinkitfjoyzxcbvq\nfefsowpulhrinkatfjoyzxcbvq\nmegsdwpulapinkatfjoyzvcbvq\nmejsdwpularinkatfjonzxcbvq\nmegsxwpllrrinkatfjoyzxcbvq\nmegsdlpulxvinkatfjoyzxcbvq\nmegsdwpulhriekztfjoyzxxbvq\nmegspwpulhrinuatfjoyzxcgvq\nmegqdwpulhrinkatfjoyzujbvq\nmegsdtpuehrinkatfjoyzxtbvq\nmegsdwjulhrmnmatfjoyzxcbvq\nmegjdwpulhrinkztfjoyzpcbvq\nmegsdwpuljrinkawfjlyzxcbvq\nmewsdwpulhtinkatfjodzxcbvq\nmegsdwpulhrinkatfcoizxcmvq\nmeisdwpulhrinkatawoyzxcbvq\nmegshwpulhrinkatfjoyzxcbtz\nmegsdwpulhfinkatfjowzxcbvj\nmegodwpulhrcskatfjoyzxcbvq\nmegydxpulhrinkatfjofzxcbvq\nmegsdwpulhrinkatljoytxdbvq\nmwgsdwpulyrinkatfjoyzxvbvq\nmeesdwpulhrinkatfjcwzxcbvq\ncegsdwpwlhrinkatfioyzxcbvq\nmegsdwpulhrinkatfqhyxxcbvq\nmegsrrpulhrxnkatfjoyzxcbvq\nmegsdgpulhrinkatfjoypxcbnq\nxegsdwpulhrinkaxkjoyzxcbvq\nmngsdwpulhrenkatfjofzxcbvq\nmecsdwpulhrinkabfjoozxcbvq\npegsdkpulhrinkatfuoyzxcbvq\nmegpdwpughrinkatfjoyzxzbvq\nmxgrdwpulhrinyatfjoyzxcbvq\nmegsdwpulhpigkatfjoyzxcbfq\nmhgsdwpulhrinkagfjoxzxcbvq\nmegsdwpblhtinkatfjqyzxcbvq\nmegsawvulhrinkatfjoyzxcfvq\nmetsuwpulhrinkatfjowzxcbvq\nmexsdwpulhrinkatsjoyzxvbvq\nmegtdwpulhrinkatfjoizxcpvq\nmegidwpjlhrinkatfdoyzxcbvq\nmegsdwpuljrivkatfjoyqxcbvq\nmespdppulhrinkatfjoyzxcbvq\nmegsdcpulhminkatftoyzxcbvq\nmegsdwpulhriskatfjayzlcbvq\nmejsdwpulhrinkatfvoyzxibvq\nmegfdwputhriykatfjoyzxcbvq\nmegsdwparhrinkbtfjoyzxcbvq\nmtgsdwpulhmingatfjoyzxcbvq\nmegsdwjulhrinkatfjtyzxtbvq\nmegsvwpulhrinkatfjoyzecbvf\nmegsdwpulprinkatyqoyzxcbvq\nzegsdwpulhwinkatfjoyzxcfvq\nmegsdwiulhrinkatfjoyzxcjcq\naegsdwpulirinkatfjoyvxcbvq\nmepsdwculbrinkatfjoyzxcbvq\nmsgsdcpulhrinkctfjoyzxcbvq\nmegsdwpulhrinkatfjoozxfevq\nmegscwpulhrinkatmjoyzxcbsq\nmegsdwpulhrinkltfjoyzxtmvq\nmegsddpulhrixkatfjyyzxcbvq\nmegsdwpulhrinkctfjoqzhcbvq\nmegsbapblhrinkatfjoyzxcbvq\nmegsdwpulhrinkatfjoyyxgpvq\nmwpsdwpulhrinkutfjoyzxcbvq\nmegsdwpulhrinvnlfjoyzxcbvq\nmegsdwsulorinkakfjoyzxcbvq\nmbgsdwpulhrinkktfjoyzxcbvg\nmegddwpulhrindatfjoyzxcbvr\nmemsdwpulhrinkatqjoyzxcbvo\nmegsdwpulbrinkarfjoyzxcbxq\nmegsdwpulhrilkatfjoynxcgvq\nmxgsdzpulhrinkatfjoydxcbvq\nmegsawpulhrinkotfjoyzacbvq\nmeasdwpulhrinkctvjoyzxcbvq\nmedsdwpulhtinkaqfjoyzxcbvq\nmegsdwsulhrknkatfjoylxcbvq\nmegadwpulhrinkatfjkyzxcbvh\nmygsdwpulhrinkatfboyzxcavq\nmegsdwpulhrinkaufjxyzccbvq\nmtgsdwpulhrunkatfkoyzxcbvq\nmegsdwpulhrinkamfwryzxcbvq\nmeesdwpulhrgnkatnjoyzxcbvq\nmegddwpolhrinkatfjoyixcbvq\nmegsdwpulhrinsatfjoyzicwvq\nmmgsdwpulhrinkltfjoyzxcgvq\nmeisdwpulhhinkatfjoyzxubvq\nmegpdwpulhrinkatfroyzxcbkq\nmegszwpuhhrinkatfjoyzxcbzq\nmersdwpulhrikcatfjoyzxcbvq\nmjgsdwpulhrinratfjoyzxcbvl\nmegsdwnulkxinkatfjoyzxcbvq\nmegsdwpulhrinkatlaoyzxpbvq\nmegsdwpulhribkitfjjyzxcbvq\nmegsdwpzlhrinkalfjoyzkcbvq\nmegsdwpulhrinkutfjoyzxcdnq\nmfgpdwputhrinkatfjoyzxcbvq\noegshwpclhrinkatfjoyzxcbvq\nmegvdwxulhrinkatfjowzxcbvq\nmrgydwpulhrinkatfjoyzxcbvl\nmegsdwpuqhrinkaxfjoyzxcbfq\nmegsdwpughrinixtfjoyzxcbvq\nmegsdwpslxrinkatfjoyzxcbvl\nmegsdwpukhrinkatfjovzxnbvq\nmegsdwpulnrinkrtojoyzxcbvq\nmegsdwpuvhrinkatfjjyzxclvq\nvegrdwpulhrinzatfjoyzxcbvq\nmelsdwwulvrinkatfjoyzxcbvq\nmegsdwpulhrizkbtfjoyzjcbvq\nmegsdwpulhrinlatfjoyzkcbvr\nmegsdweulhrinkaofqoyzxcbvq\nmegsdcpulhrifkatfdoyzxcbvq\nnegsdwpulhainkztfjoyzxcbvq\nmegsdwpklhrinkttfjoyzxvbvq\nmegsdwpothrdnkatfjoyzxcbvq\nmegsdwpulvrinkatfaoyzxcbvr\nmewsdwpulhrinkatfooyzxtbvq\nmegtdwpulhrinkatfxoyzxcbvy\nzegsdwpulhrinkamljoyzxcbvq\nmkgodwpulhrcnkatfjoyzxcbvq\nmegsdepularinkatfjoyzxybvq\nsegsdwpulhrinkatfmoyzycbvq\nmbgsdwpulhrsnkztfjoyzxcbvq\nmegsdwpmlhrinkatfjxyzhcbvq\nmegsdwpulhrinkatfboyqxmbvq\nmegsdwpulhrinkadtpoyzxcbvq\nmegsdmpulhrjnkatfjoyzxwbvq\nmegsdwpulhrivkatfroywxcbvq\nmegsdwdulhrinkatpjwyzxcbvq\nmegsdwpylhrdrkatfjoyzxcbvq\nmegsdwpulhrvnkptfjoyzlcbvq\nmegsdwpuihridkatfjuyzxcbvq\nmegsdwpulhbiikatfjxyzxcbvq\nmeggdwpulurinkatfjoyaxcbvq\nmehsnwpulcrinkatfjoyzxcbvq\nmegsdwpulhrinkatfjoczdclvq\nmegsdwjulhrinkatfhkyzxcbvq\nmegsdwpulhrinoatfjoyzxcwvy\nmegpdwpelhrfnkatfjoyzxcbvq\nmegsjwpulhrwnkatfjdyzxcbvq\nmegsdwpulhrbniatfjoyzxcbpq\nmegsdwpulhrwnkatfjoydxcpvq\nmegsdwrulhrinkatfjvyixcbvq\nyegvdwpulhtinkatfjoyzxcbvq\nmeosdwpulhrinkatfjhyzxsbvq\nmjgsdwpulhrinkatfjoyyxcjvq\nmegsdwpulhrinkatfnoyzlmbvq\nmehsdfkulhrinkatfjoyzxcbvq\nmegsdwpuahrinkatfyoyzxcwvq\nmegsdwpulhyinkatfjobzkcbvq\nmegsdwpjlhrinkatfnoyzscbvq\nmegsdwiulhrinqatfjoyzxcavq\nmegsdwpulurinkatfjoykxcbmq\nmegsdwpmlhvinkatfjotzxcbvq\nmegswwpulhrinfatfjoytxcbvq\nmxgsdwpulhrrnkatfjoyhxcbvq\nmegubwpulhrinkaafjoyzxcbvq\nmegsdwpulhrdnsztfjoyzxcbvq\nmegsdwpulhronkgtfjhyzxcbvq\nmegsdwzulhfinratfjoyzxcbvq\nmegsdwpulhrinkrtfjqyixcbvq\nmegspwpulhrinkatfjoywxcavq\nmegmfjpulhrinkatfjoyzxcbvq\nlelsdwpulhrinsatfjoyzxcbvq\nmegsdwnultrinkatfjoyzxybvq\nmegsdwpulhdnnkatfjpyzxcbvq\nmegsdwpulhzinkatfjoyzhcpvq\nmegoddpulhrilkatfjoyzxcbvq\nmegsdvpulhrwnkatfjoyzxcbdq\nmegsdwpulhmikkatfjoyzxcbvr\nmeesdwpulhrinkaofjoazxcbvq\nmegndwhulhrinfatfjoyzxcbvq\nmegsdwpulhjihkatfjoyzxcbvb\njegsdwpulhrinkattjoszxcbvq\nmegsdwpulhrenkatfjodzxcbvp\nmefsdwpulhrinkatfjoyzxcczq\nmegsdwpulhrknkatfjovzxcbvb\nmegytwpulhrinkatfjoyzxcbvo\ncsgsdwpulhrinkatdjoyzxcbvq\nmegsbwpulhrinkazfjtyzxcbvq\nmrgsdwpulhjinkatfjoyzxcbvm\nmegsywzulhrinkatfjofzxcbvq\nmegxdwpulhrndkatfjoyzxcbvq\nmcgsdwpuphrixkatfjoyzxcbvq\nmegsdlpulxvinkatfvoyzxcbvq\nmegsdwpulhrinfatfjoyzicbvo\nmegwgwpulhrinpatfjoyzxcbvq\nmggsdwpulhrinkatfjtrzxcbvq\nmsgsdwpulirinkatfjoyzxcbaq\nmegsdwpulhrineatfeoyzxcbvl\nmegsdnpulhrinkatojoyzxcbvb\nmfgsdwpulhdinkatmjoyzxcbvq\nmegsdwpulhrinkawfjuyzxcbvg\nmegsdwpulhrincatfjoyzxcxvu\nmevsdwzplhrinkatfjoyzxcbvq\nmegskweulhfinkatfjoyzxcbvq\nmebsdvpulhrinkatfjoyzxcbkq\nmegddwiulhrinkatfioyzxcbvq\nmygsdwpulhqinkatfooyzxcbvq\nmegsdweulhrfnkatfjoybxcbvq\nmrgsdhpulmrinkatfjoyzxcbvq\nmegsdwkukhrinkatftoyzxcbvq\nmegsqwpulhrinfatfjoyzxebvq\nmegsdwpulhriskanfjoyzxctvq"));
//# sourceMappingURL=inventorymgmt.js.map