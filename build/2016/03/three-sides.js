"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
function main(input) {
    var validCount = 0;
    var _a = parseInput(input), triangles = _a.triangles, triangleCount = _a.triangleCount;
    for (var i = 0; i < triangleCount; i += 3) {
        var _b = __read(triangles.slice(i, i + 3), 3), a_1 = _b[0], b = _b[1], c = _b[2];
        var isValid_1 = checkIfValidTriangle(a_1, b, c);
        if (isValid_1)
            validCount++;
    }
    return validCount;
}
function parseInput(input) {
    var columns = [[], [], []];
    var pattern = /\S+/g;
    input.split('\n').forEach(function (r) {
        var _a;
        var _b = __read(((_a = r.match(pattern)) === null || _a === void 0 ? void 0 : _a.map(Number)) || [], 3), a = _b[0], b = _b[1], c = _b[2];
        columns[0].push(a);
        columns[1].push(b);
        columns[2].push(c);
    });
    var triangles = columns.flat();
    return { triangles: triangles, triangleCount: triangles.length };
}
function checkIfValidTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}
console.log(main("566  477  376\n575  488  365\n 50   18  156\n558  673  498\n133  112  510\n670  613   25\n 84  197  643\n910  265  611\n894  252  545\n581    3  598\n 98  742  574\n628  746  193\n129  677  265\n187  445  169\n288  242  128\n569  744  439\n685  748  471\n256   23  157\n218  343  491\n777  905  633\n778  867  840\n672  772  947\n500  763  420\n449  665  653\n 23  558  858\n745  407  904\n766  194  576\n 11  541  423\n179  690  274\n174  747  279\n741  538  336\n507  698  667\n689  920  467\n405  861   35\n575  631  992\n317  573  981\n817  536   44\n816  205  653\n 45  631  683\n509  300  418\n712  192  865\n666  133  859\n 32  331   54\n572  432  259\n552  456  267\n766  931  643\n902  840  557\n465  318  175\n491  863  329\n463  795  564\n589  213  805\n340  323  123\n602  812  499\n898  931  555\n899  835  341\n316  487  789\n677  790  797\n341  502  123\n502  196  136\n702  617   82\n939  581  362\n801  834  951\n464  941  843\n  7  756  971\n273  297  661\n270  620  387\n776   96   80\n891  125   92\n376  175  141\n435  247  949\n719  586  478\n578  662  801\n446  202  556\n596  336    5\n855  202  558\n541  314   17\n 43  295  959\n507  433  942\n380  721  579\n313  670  629\n301  341   59\n338  776  161\n202  291  844\n528  564  736\n411  765  465\n489   98  611\n301  817  959\n895  836  890\n249  313  267\n726  976  881\n300  601  657\n985   91  438\n925  596  905\n250  850  331\n104  714  258\n312  189  196\n 36   62  611\n218  756  600\n225  803  736\n765  250  259\n768  438  728\n268  613  578\n951  816  919\n706  923  495\n430  487  915\n416  964  623\n737  699  581\n836  981   90\n740  471  498\n 17  781  602\n732  527  191\n 57  126  235\n778  344  370\n822  398  366\n245  597  127\n407  658  902\n542  545  985\n786  663   93\n872  512  690\n897  151  655\n226  362  164\n257  629  168\n 94  280   86\n577  611   45\n648  756  953\n 89  556  924\n116  330  373\n730  297  713\n836  630  486\n431   10  177\n350   21  950\n442   34  831\n219  115  125\n259  111  836\n 56   13  825\n837  648  336\n414  314  670\n787  906  792\n232  526  550\n220  409  216\n383  241  720\n101  724    8\n108  695  885\n 23   33  894\n458  827  435\n489  664  675\n272  542  261\n 18  250  218\n896   60  659\n906  284  823\n179  668  925\n174  362  227\n211  589  911\n514  333  704\n575  716  896\n762  382  597\n344  783  294\n408  795  209\n 91  119  110\n717  616  307\n760  106  333\n374  563  514\n454   51  709\n564  499  158\n566  541  601\n901  327  137\n417  859  921\n726  627  828\n534  416  475\n221  533  310\n731  423  274\n534  636  902\n463  513  606\n921  148  829\n314  151  657\n454  238  935\n468  244  703\n253  124  615\n427  524  804\n194  545  380\n913  998  210\n203  797  141\n993  320  265\n208  144  488\n791  710  361\n953  637  413\n372  472  926\n686  216  677\n775  476  473\n683  224  524\n670  424  556\n286  642  660\n578  964  895\n715  938  675\n727   48  846\n386  538  362\n271  702  241\n620  537  487\n689  388  118\n223  315  599\n477  445  509\n369  787  300\n645  679  536\n613  461  511\n586  730  876\n597  586  541\n745  452  960\n577   77  581\n733  177  562\n923  191   64\n521  751  297\n422  780  709\n521  887  550\n808  681  829\n907  938  753\n507  307  991\n752  386   22\n684  270  155\n 91  234  151\n568  950  170\n651  954  210\n789   31  307\n550   71  560\n463  715  400\n491  765  600\n131  455  904\n592  453  555\n559  788  676\n391  484  363\n405  404  280\n 68  114  556\n307  518  632\n 49  549  907\n288  287  482\n729   36  395\n440  768  636\n838  772  889\n 99  231  794\n181   81  684\n252  253  843\n738  717  531\n125  311  536\n727  508  487\n992   76  234\n680  114  100\n501  165  292\n597  562  167\n223  887  429\n613  345  482\n209   45  787\n 98  175  821\n178  196  252\n345  127  459\n767  896  750\n601  965  522\n792  541  699\n989  350  109\n337  799  588\n276  531  244\n461  655  162\n413  284  340\n327   93  556\n431  873  989\n164  826  956\n279  486  578\n488  275  248\n672  462  539\n636  448   39\n116  504  619\n550  353  618\n803  506    5\n641  482  513\n190  973  509\n  4  105  745\n443  619  243\n440  519  754\n624   62  907\n644  231  907\n232  238  900\n866  749  665\n490  988  547\n815  482  135\n331  992  234\n252  812  623\n 95  661  698\n 15  378   91\n986  338  255\n979  205  218\n927   59  302\n161  231  250\n855  250  389\n588  356   40\n279   90  105\n707  273   77\n846  311  842\n870  305  833\n 77  477  346\n638  496  395\n642  374  864\n 73  526  717\n851  399  892\n873  444  889\n988  133  217\n950  702  591\n989  338  278\n307  628  794\n815  568  390\n974  725  622\n463  296  984\n605  409  526\n665  554  473\n106  852  381\n874  597  620\n481  609  245\n604   18  655\n702  611  814\n711  341  254\n130  458  865\n677  689  278\n926  675  223\n363   15  154\n189  785  793\n189  556  925\n 92  332  617\n  1  884  831\n176   37  482\n174  856  362\n432  978  371\n957  662  493\n749  873  714\n259  938  328\n692  837  649\n721  949  456\n488  304  194\n270  776  448\n446  879  257\n647  705  462\n720  305   25\n230  489  454\n920  303  582\n325   20  478\n970  303  168\n628   29  916\n398  209  489\n248  194  426\n426  276  899\n 14  274  981\n430   12  799\n229  235  745\n268  663  528\n283  439  906\n542  983  253\n214  938  241\n575  123  228\n704  628  326\n567  678  468\n439  984  300\n580  228  520\n229  668  370\n512  701  624\n267  912  271\n666  839  776\n804  362  559\n400  565  127\n418  349  450\n136  671  460\n302  515  931\n185  764  911\n441  574  331\n902  856  448\n123  934  288\n890  143  683\n307  470  748\n339  169  127\n114  339  834\n789  639  631\n676   82  453\n247  563  394\n436  655  703\n352  906  631\n277  367  327\n585  757  427\n545  710  988\n153  705  689\n 98  300  882\n140  491  135\n193  220  911\n371  739  602\n538  419  864\n280  786  352\n795  750  697\n808  341   79\n361  606  668\n 57  277  452\n524  267  976\n525   45  762\n462  885  782\n 90  837  156\n510  394  826\n617   23  812\n443  755  483\n255  756  866\n931  404  762\n184  496  236\n841  792  640\n932  259  869\n893  697  951\n 37  451  493\n939  592  146\n789  104   25\n477  617  150\n427  506   86\n723  243  717\n795  705  638\n908  506  556\n741  755  408\n608  852  240\n613  717  393\n392   59  448\n877  724  100\n 61  141   24\n101  257  130\n139  313  147\n999  130  568\n 82  256  539\n941  183  193\n279  793  217\n628  347  824\n503  506  905\n646  629  909\n785  518  510\n510  199  701\n413  201  703\n399  548  247\n 11  396  606\n250  981  822\n314  758  810\n513  476  139\n830  232   74\n448  693  690\n503  556  646\n604  448  579\n 21  441  367\n603  155  428\n589  655   64\n524  726  849\n262  556  808\n693   19  969\n102  306   91\n773  287  939\n 49    2  177\n937   54  697\n967   51  745\n388  262  356\n193  636  387\n554  537  478\n510  689  720\n693  670  665\n905   32  730\n516  420  525\n109  627  935\n421  282  693\n504  374  435\n241  619  662\n277  809  333\n319   43  766\n787  803  267\n941  828  722\n710  489   10\n654  395  148\n 95  733  154\n270  163  706\n247  564  771\n269  635  204\n560  604  137\n379  164   72\n282  557  149\n871  461  499\n140  475  289\n816   12  533\n974  361  166\n769  545  848\n543  493  875\n475  192  926\n342  564  976\n501  448  782\n 94  172   75\n275  856  267\n215  853  210\n 41  496  331\n829  583  434\n818  306  478\n660  431  552\n509  716  355\n404  812  211\n549   63  271\n422  642  655\n397  590  389\n698  235  288\n319   95  603\n810  218  336\n709  590   89\n749  734  884\n118  896  862\n550  398  700\n505  207  165\n449  339  778\n664  929  821\n724  926  630\n 89   21  391\n698  176  786\n718  479  938\n391  577  266\n634  178   29\n 56  373  972\n687  259  969\n 98  480  250\n951  134  237\n939  491   15\n899  303  834\n252  416  295\n887  537  926\n496  232  609\n130  534  575\n519  436  934\n639  648   29\n625  127  541\n291  544  511\n744  570  404\n430  772  439\n381  304  231\n525  527  785\n137  802  499\n542  632  966\n637  482   42\n207  643  532\n527  816  501\n194  982  271\n862  943  367\n846  217  324\n872  894  184\n911  776  718\n939  849  594\n745  354  472\n838  305  284\n744  157  759\n436  263  650\n605  326  348\n319  530  463\n639  358  479\n675  826  732\n609  682  912\n 97  714  874\n848  330  858\n874  646   24\n508  518  881\n567  481  576\n431  561  603\n934  715  700\n833  311  198\n323  661  724\n997  162  319\n 93  395  412\n977  497  232\n858  448  225\n900  316  259\n107  458  401\n397  723  817\n720  328   17\n346  631  802\n824  567  852\n810  234  269\n251  784  926\n490  316  317\n637  291  350\n593  583  602\n450  116  310\n907  210  231\n904  264  396\n612  221  267\n144  156  136\n683  248  293\n 64  786  842\n 52  606  511\n 26  192  927\n830  422  399\n956  349  575\n254  130  660\n431  515  161\n961  522  198\n995  873   43\n967  855  268\n487  898  564\n595  378  636\n707  203  268\n710  226  775\n277  120  551\n675  631  758\n203  160  294\n873  667  637\n279  597  765\n 26  667  338\n305  963  550\n163  858  901\n328  832  537\n204   25  494\n601  307  594\n 71  405  613\n642  691  258\n341  439  293\n 93  470  627\n361   30  430\n942   70  305\n831  963  304\n368  925   25\n115   82  139\n 53  185  545\n160  247  536\n462  260  666\n296  696   84\n465  683  683\n591  228  220\n743  744  432\n165  758  559\n651  933   87\n872   37  514\n340  970  512\n576  654  416\n 27  383  888\n567  840  586\n722  822  425\n657  872  880\n 91  453  574\n 28  970  437\n955  274  342\n933  753  172\n582  836  289\n642  966  727\n240  298  925\n253  241  795\n115  374   68\n354  162  821\n283  587  328\n627  566  650\n712  159  846\n365  973  654\n848  281   89\n901  900  568\n211  583  905\n296  480  895\n433  337   45\n229  741  115\n249  675  433\n179  507  470\n796  121   16\n963  523  101\n469  485  112\n343  846    7\n391  733  732\n 89  419  735\n571  797   25\n785  740  519\n436  198  533\n 96  387  856\n250  391  421\n215   15  842\n389  128  120\n323  673  729\n 87  583  624\n807  454  314\n970  227  247\n652  230  405\n391  534  677\n993  253  880\n747  688  284\n492  932  421\n290  800  344\n696  151  586\n535   61  371\n493  455  676\n138  417  892\n851  568  234\n480  639  309\n903  829  404\n662   85  687\n703  112  607\n410  151  995\n275  465  774\n 97  579  152\n301  516  913\n960  436  672\n870  230  800\n151  263  674\n 97  515  754\n763   67  705\n720  516  398\n817  696  171\n770   89  606\n655  660  736\n536  236  421\n713  104  578\n607  296  729\n432  222  852\n626  751  769\n529  954  670\n927   18   64\n559  840  376\n592  819  312\n423  489  842\n766   14  657\n350  498  198\n777  199  736\n767  639  924\n 17  684  692\n652  739  958\n735  874  486\n175  308  988\n625  615  601\n125  235  645\n752  791   50\n263  568  505\n475  307  580\n241  679  757\n 89  812  852\n133  824  507\n 94  396  868\n285  756  877\n424  811  336\n587  202  550\n623  402  145\n169  730  142\n652  649   22\n 42  181   68\n160   20  161\n132  166  179\n566  277  716\n521  381  640\n168  212  123\n489  333  741\n 62  328   71\n506   16  721\n360  388  194\n516  412  767\n713  686  964\n711  765  514\n959  285  600\n759  610  862\n715  308  357\n348   41   10\n731  306  360\n902  727  296\n867  770  187\n 63  794  254\n196  410  505\n693  527  570\n725  386  119\n322  796   62\n480  514   92\n514  825   38\n346  422  647\n210  455  853\n142   40  340\n298  382  190\n433  867  205\n346  489  315\n860  258  369\n845  976  997\n114  974  851\n168  441  671\n868  467  717\n824   26  616\n911  581  779\n853  127   81\n640  681  776\n926  331  747\n576  681  846\n626  673  515\n361  462  553\n188  968  946\n512  933  571\n357  238  647\n698  738  668\n786  602  599\n946  216  264\n700  485  646\n553  382  781\n180  127  629\n637  622  628\n798  504  116\n337   59  665\n701  287  318\n389  251  716\n570  551  491\n256  889  465\n665  720  734\n630  801  550\n637  699  547\n319  277  130\n807  803  576\n231  314  966\n944  813  672\n510  539  729\n339  673  746\n829  616   34\n320  151   16\n318  128  482\n  4  146  473\n226  777  102\n207  731  253\n139  162  344\n134  404  641\n564  974  592\n569  771  878\n570  646  794\n589  126  159\n507  754  908\n832  358  827\n572  251  974\n922  454  938\n964  819   26\n963  150  603\n 50  916  630\n578   63  306\n333  897  826\n716  886  733\n 93  726  208\n876  729  569\n876    3  755\n271  294  734\n886  677  723\n643  688  273\n896  404  627\n991  524  399\n155  165  685\n195  634  821\n650  277  711\n459  697  131\n436  855  749\n196   97  765\n529  765  313\n781  986   44\n966  768  340\n218  706  304\n489  179  646\n 61  267  435\n466  364  718\n392  149  666\n467  152  791\n180  286  624\n151  170  372\n870  267  612\n897  107  768\n  2  487  286\n902  669  833\n902  742  635\n397  258  175\n742   95  866\n957  213  717\n723  555  749\n528  527   14\n203   83  762\n247  428   68\n656  153  208\n644  496  268\n 14  641   16\n515  670  176\n523   58  192\n424  617   72\n766  588  999\n653  202  943\n219  567  386\n177  799  633\n229  499  572\n579  445  767\n365  247  682\n771  518  125\n310  151  329\n849  782  365\n613  769  364\n479  495  603\n551  260  105\n717  326  650\n476   48  883\n537  368  839\n136  321  105\n370  683  482\n396  576  186\n 58  549  594\n 37  532  381\n940  248  161\n915  546  228\n629  860   96\n672  121  741\n283  932  834\n162  737  544\n 66  967  333\n199  916  591\n880  571  265\n953  573  132\n224   51  196\n562  494  245\n853   94  317\n550  519   80\n349  741  972\n814  201  949\n464  779  408\n 32  790  544\n263  785  261\n260   19  562\n592  362  648\n661  292  897\n247  222  349\n947  306   89\n126  329  366\n857  466  329\n594  744  791\n546  202  429\n526  619  501\n 54  693  748\n138  682  753\n182  283   74\n613  333  444\n  9  403  359\n618  160  457\n312  162  510\n536  506  191\n309  375  567\n 72  548  736\n678  983   50\n638  990  699\n263  204  770\n362   13  268\n603  214  866\n564  522   46\n864  918  863\n307  863  842\n364  940  152\n827  403  778\n960  825  792\n 13  811  777\n890  912  391\n880  384  443\n735  649  473\n937  443  635\n702  768  256\n604  809  720\n407   56  908\n422  823  198\n376  523  140\n906  236  927\n851  473  978\n449  835  308\n800  156  332\n384  969   62\n282  338  353\n868  472  884\n681  749  966\n744  430  279\n137  425    4\n631  184  285\n781  850  209\n450  376  696\n698  833  851\n307  749  415\n952  124  766\n842  847  658\n 95   49  635\n578  934  703\n491  903  253\n721  679   85\n801  363  502\n501  622  421\n657   98  602\n745  979  905\n925  884  326\n 88  601  144\n379  699  426\n319  379  293\n564  328  773\n579  716  455\n331  478  990\n789  304  216\n387  466  567\n942  206  417\n840  321   46\n128  457  227\n819  597  243\n666  160  978\n226  513   80\n454  502  927\n860  578  640\n983  130  721\n263  540  201\n591  692  499\n569  939  531\n 87  814  872\n753  650  280\n265  715  441\n988  141  611\n746  238  590\n789  735  639\n147  552  139\n 37  954  595\n342  411  696\n330  629  474\n314  736  149\n596  684   86\n772  248  136\n442  384  616\n563  153  418\n498  299  818\n408  375  746\n446  394  745\n177   17  534\n257  630  592\n619  878  657\n612  711  637\n594  980  637\n399   57  594\n829  952  547\n286  730  148\n828  225  934\n671  639  963\n249  393  818\n343  531  687\n229  775  270\n987   44  875\n896  666  346\n936  638  753\n299  838  549\n824  735   59\n766  277  572\n582  151  777\n610  144  505\n120   76  902\n300  882  441\n677  435  161\n631  843  567\n 62  401  375\n263  744  375\n310  463  141\n108  479  719\n484  266   17\n382  247  712\n158  558  705\n 48  479  686\n209  339  958\n 20  212  453\n858  254  120\n872  430  344\n801  700  786\n991  700  911\n644  213  692\n911  149  433\n752  795  344\n762  862  332\n764   35  500\n391  639  489\n809  601  497\n148  874   83\n552    4  126\n524  880  195\n530  430  179\n497  345  219\n810  694   47\n995  128  999\n 73  149  917\n978  234  146\n394  735   35\n483  478  236\n293  707  271\n614  458  753\n 44  531  638\n599  893  188\n729  731  863\n693  915  859\n192  205   17\n999  119  541\n943  262  318\n123  305  514\n339  536  246\n585  228  300\n904  330  325\n127  806   45\n366  429  536\n480  801  555\n656  977  669\n611  969    5\n659  123  671\n644  292  524\n557  143  298\n383  202  824\n306  144   97\n427  541   20\n735  490  109\n 14  379  582\n418  367  756\n406  740  823\n832  461  125\n 36  692  764\n830  497  768\n632  572   31\n996  607  705\n400  451  712\n586  598  235\n806  364  406\n409  841  606\n971  282  437\n162  208  944\n957  174  591\n567  110  844\n412  211  378\n181  113  637\n145  600  443\n359  588  426\n335  707  255\n345  476  975\n864  521  972\n832   78    5\n556  541  905\n389  712  588\n848  412  813\n833  121  316\n744  743  472\n872  837  421\n185  793  219\n995  168   61\n901  837  158\n693  955  245\n232  634  550\n725  502  451\n526  966  477\n589  607  682\n901  366  247\n815  769  769\n828  627  947\n121  664  262\n708  863    3\n522  968  186\n429  808  186\n378  162  364\n398  361   86\n194  235  285\n657  176  376\n526  787  136\n170  696  290\n513  117  970\n617  797  235\n603  889  900\n706  142  594\n291  321   96\n746  388  668\n764  762  718\n567  821  703\n968  421  883\n926  456  320\n952  963  262\n489  785  540\n446  933  970\n361  607  136\n230  682  987\n 27  153  528\n437    3  502\n430  153   51\n349  206  892\n162  683  862\n366  878  244\n976  258  195\n827   80  381\n476  246  569\n881  123  222\n724  342  409\n565  421  511\n703  402  344\n704  549  486\n 16  311  414\n198  894   65\n904  475   93\n967  688   43\n246   96  527\n195  327  220\n134  355  395\n222  416  988\n541  343   90\n708  109  900\n245  574  287\n979  617  284\n804  889  130\n174  798  507\n 66  623  519\n142  276  146\n308  772  509\n 28  773   82\n319    8  524\n507  952  927\n471  867  924\n 64  535  874\n959  165  236\n475   98  117\n961  201  293\n397  757  621\n311  287  215\n492  602  425\n111   56  243\n606   69  927\n692   41  875\n523  927  982\n410  810  947\n188  120  120\n543  569   92\n838  442  414\n595  789  505\n 16  896  639\n642  843  845\n644  116  938\n 26  347  466\n376  664  681\n404  946  571\n766  195  436\n427  134  509\n336   85  163\n575  689  670\n598  236  705\n 53  498   76\n977   35   38\n674   41  911\n572   37  901\n118  714  700\n499  958  771\n477  841   86\n633  877  670\n776  873  625\n260   88   85\n281  816  296\n568  966  670\n653  267  684\n245   23  935\n316  235  462\n 99  246  739\n278  652  240\n367  542  525\n150  246  563\n422  937  236\n 57  994  430\n472  188  202\n636  778  684\n756  912  605\n461  769  534\n646  508   56\n963  305  767\n618  686  769\n684  750    1\n567  173  333\n896  805  330\n821  987  638\n805  127  644\n 74  899   12\n444  434  269\n449  147  181\n 35  542  321\n320  105  163\n815  289  546\n537  208  691\n754  345   54\n116  804  780\n694  512  744\n941  423  795\n936  147  702\n  8  327  865\n 42  141  761\n189  658  273\n214  545  668\n259  219  322\n455  782  551\n512  646  526\n127  710  932\n169  615  729\n 55  482  381\n571   98  930\n362  721  296\n645  684  804\n701  257  529\n731  711  683\n225  575  423\n918   23  492\n917  271  217\n  5  293  537\n733  595  105\n741  433  932\n 31  259  920\n303  691  396\n363  580  863\n427  474  576\n703  175  246\n529  280  209\n641  412  319\n530  890  726\n382  779  433\n284  147  323\n860  703  766\n292  427  768\n606  666  736\n638  384  264\n 97  398  574\n564  627  455\n678  442  618\n432   28  687\n343  466  101\n304  594    5\n402   43  474\n498  552  476\n243  113  538\n938  102  498\n829   44  470\n208  449  197\n352  286  425\n503  600  241\n531  209  490\n615  758  363\n518  783  258\n886  636  579\n386  960  821\n678  547  784\n481  843  238\n476  256    6\n  2  973  233\n331  144  822\n410  545  872\n558  546   49\n  1  388  106\n384  557  457\n387  699  460\n592  809  571\n388  942  111\n651  756  647\n860  518  794\n722  894  731\n324  881  256\n429  197  383\n226  239  685\n489   51  339\n746  402  745\n756  608  434\n220  452  629\n773  631  798\n296  137  537\n942  704  260\n820  565  673\n745  666  110\n411  406  721\n 44  522  531\n777  394  494\n807  835   66\n 36  362   38\n113  290  975\n141  124  953\n 38  663   51\n507  677  316\n514  115  360\n956  194  865\n642  677  111\n682  868  889\n173  507  339\n270  546  318\n279  115  177\n803  915  913\n139  107  187\n925  995  943\n467  471  233\n433  321  977\n689  358  961\n544  479  788\n450  403  438\n868  155  740\n583  251  384\n163  220  215\n732   43  519\n253  323  234\n481  314  873\n298  284  975\n574  480  690\n357  181   86\n292  627  695\n817  908  950\n302  137  865\n553  991  507\n660  645  933\n752  819  831\n437  189  346\n144  283  738\n108  491  429\n 91  209  688\n289   24  138\n676  604   82\n670  585  204\n 78  439  403\n 81  674  548\n 65  476  475\n904  502  542\n873  723  506\n909  628  337\n918  227  277\n929  208  324\n255  125  477\n415   30  618\n981   24  546\n588   38  694\n876  102  663\n628  262  927\n419  277  964\n160  523  632\n424  250  582\n452  773   68\n466  162  225\n913   64  463\n486   95  612\n350  264  427\n723  184  872\n868  376  701\n441  318  509\n506  286   58\n528  448  513\n166  533   92\n169  552  414\n298   85  320\n663  883  192\n664  572  433\n 12  738  538\n330  943   94\n398  814  754\n273  195  682\n980  461  544\n282  558  554\n788  117  660\n336  326  337\n465  184  829\n352  180  988\n130  707  122\n854  295  141\n943  444  176\n 14    4  473\n514   11  603\n525   10  892\n 22  700  427\n400  673  470\n411  288  583\n448  431  582\n466  752  501\n722  530  104\n509  673  464\n727  112  677\n567  614  716\n677    9  561\n620  976  603\n324  965   87\n215  738  844\n206  128  637\n 91  727  427\n625  343  624\n639  770  757\n859  691  710\n278  140  634\n405  798  561\n356  903   78\n 54  748  890\n858  870  310\n821  723  983\n385  489  431\n776  261  962\n834  527  752\n798  945  282\n802  788  288\n 73  899  228\n689  667   74\n995  691  603\n656  320  652\n841   63   62\n176  797   83\n736  788   20\n558  775  454\n275  858  544\n792  353   95\n494  939  694\n126  964  408\n388   65  952\n229  368  992\n408  180  481\n618  347  793\n860    4  641\n 49  296  895\n901  294  563\n 24  434  159\n368  911  593\n380  864  492\n637  378  275\n614  383  295\n246  326  514\n373  617  382\n409  214  294\n263  802  419\n820  909  683\n136  452  290\n860  558  491\n789  235  334\n116  508   41\n721  691  303\n 14  176   77\n217  281  289\n231  337  237\n348  400  206\n382  317  684\n 33  187  667\n467  434   77\n534  588  846\n905  483  871\n810  422   10\n724  260  181\n155  259  189\n223  860  544\n271  706  576\n109  431  554\n904  486  465\n 65  317  535\n837  365  126\n496  700  349\n642  252  496\n750  706  505\n956  978  875\n845  953   89\n138  259  805\n787  793  322\n 59  739  128\n790  957  389\n126  232  160\n391  807  909\n454  814  762\n532  358  272\n 81  718  554\n482  413  655\n185  141  894\n734   96  739\n583  204  372\n587  314  772\n402  496  292\n798  187  543\n516  824  922\n409  146  140\n408  922  840\n 50  373  244\n355  476  321\n365  181  219\n601  842  642\n426  426  889\n482  828  584\n589  698  588\n835   97  287\n759  769  768\n858  520  481\n947  517  219\n266  101  400\n110   65  448\n920  310  431\n926  318   23\n388  698  374\n 45  753  406\n421   68  374\n203  268  623\n345  586  611\n344  678   32\n542  830  187\n487  916  456\n211  905  567\n760   36  585\n327  380  425\n793  405  604\n432  630  267\n804  307  366\n678  716  108\n437  316   22\n441  214  160\n329  364  149\n726   82   76\n896  857  361\n298  796  294\n652  406  409\n855  123  704\n430  461  744\n909  130   88\n847  910  968\n499  898  952\n662  458   83\n335  589  395\n863  481  361\n829  217  305\n822  306  635\n664  212  610\n271  203  675\n 95  409  236\n337  408  517\n749  357  294\n646  214  322\n457  181  157\n649  391   73\n756  258   84\n201  312   11\n660   14  560\n128  491   96\n676  507  570\n302  944   54\n 25   48  296\n313  916  351\n932  496  355\n437  198  217\n826  627  370\n312  259  193\n293  718  654\n142  459  647\n233  336   90\n 81  360  232\n168   23  144\n442  523  662\n151  952  260\n444  963  489\n302  934  249\n687  523  698\n672  494  462\n461  198  649\n540  410  269\n539  515  839\n 76  494   81\n514  571  496\n438  216  557\n279  215  690\n581  362  667\n318  229   53\n427  590   52\n510   61  485\n168  596  451\n960   61  155\n475   32  291\n933   57  182\n458  702  818\n740   29  821\n896  716  738\n842  614  701\n398  466  502\n739  612  737\n297  349  887\n262  303  886\n404  302  428\n668  758  600\n674  815  379\n 44  395  225\n673  341  476\n516  403  384\n392  168  134\n907  562  511\n555  406  413\n818  737  773\n745  588  545\n323   27  639\n555  571  802\n326  712  513\n729  310  664\n810  468  804\n509   79  438\n418  680  403\n314  600  470\n186  678   12\n302  381  921\n380  946  932\n104  725  596\n113  950  471\n 11  478  291\n520  535  519\n574  113  668\n862  541  617\n606  173  314\n960  141  857\n837  154  926\n933  161  137\n255   86  277\n794  117  308\n664  305  588\n321  329  554\n961   22  181\n433  604  132\n655  546  431\n553  187  373\n797  526  674\n563  122  203\n352  613  626\n780  196  549\n253  191  547\n746   15  412\n193  523  391\n281  537  657\n 90   99  658\n892  737  646\n503  717  663\n693  205   50\n700  409  662\n465  896   15\n865  901  661\n508  664  192\n770   36  898\n980  638  809\n301  307  626\n724  803  839\n851  514  256\n521  225  170\n678  217  789\n735  289  904\n501  745  719\n896  434  575\n819  850  977\n607  691  590\n 28  840  476\n623  647  167\n890  740  708\n465  674  219\n753  127  674\n370  149  657\n189  802  476\n455  734  376\n 37  988  149\n947  966  168\n921   20  311\n798  911  338\n768  467  681\n102  554  488\n747  178  608\n747  507  690\n372  490  197\n 22  974  389\n717  173  396\n734  881  363\n560  889  821\n721   54  963\n164  836  833\n135  687  910\n204  995  188\n188  623  865\n877  495  264\n335  316  399\n593  234  300\n655  418  169\n471  551   86\n444  381  226\n820  461  304\n 38   90  334\n845  471   47\n449  124  218\n694  134  547\n270   31  551\n434  195  750\n774  171  789\n877   92  222\n843  153  340\n758  184  326\n252  239  372\n651  915  540\n740  369   10\n828  998  547\n814  903  348\n491  364  548\n549  612  267\n429  170  705\n978  231  210\n917  339  866\n432  133  494\n983  409  450\n567  465  246\n744  885  684\n717  876  790\n183   11  138\n984  740  311\n686  528  843\n757  343  712\n 31  752  940\n 17  254  106\n 11  956  974\n495  572  789\n440  496  763\n183  254   25\n152  559  980\n146  573  585\n200  456  938\n371  716  716\n228  742  679\n205  167  988\n 81  223  806\n509  421  192\n544  485  828\n112  205  502\n 45  133  555\n155  134  784\n179  196  625\n 81   18  589\n165  187  754\n 63  341  774\n197  266  913\n229  306  680\n509  317  787\n976  260  535\n661  228  518\n289  398  700\n173  398  645\n170  370  283\n574  346  446\n422  511   42\n275  305  482\n118  698  869\n338  616  897\n334  520  229\n461  570  136\n 84  336  245\n531  242  157\n646  786  356\n372  841  124\n701   67  294\n481  880  626\n155  951  361\n365  273  946\n555  163   93\n163   11  515\n582  168  495\n128  732  752\n489  685  558\n529  788  341\n820  489   73\n941  118  684\n188  545  680\n 64  923  188\n639  859  445\n656  985  606\n769  169    9\n931  310  472\n205  177  472\n702   72   27\n490  977  472\n914  972  495\n837  417  333\n437  505  440\n947  881  490\n379  998  906\n371  789  763\n604  804  200\n250  622  969\n778  445  924\n844  925   78\n346  843  440\n409  228  396\n 73  902  717\n759   75  511\n720  172  435\n427  155  938\n 75  920  213\n 49  895  187\n122   33  211\n216  875  709\n169  644  534\n 47  243  546\n942  591  200\n874  790  870\n667  478  797\n475  900  250\n 92  442  709\n386  505  856\n 70  747  595\n390  854  740\n333  267  730\n576  421  336\n872  428  352\n884  676   20\n119  686    6\n126  171  145\n  6  548  140\n296  406  627\n276  546  653\n329  232  356\n811  203  648\n757  762  656\n117  717   71\n718   17  608\n965  859  794\n707  870  536\n251  549  245\n259  814  314\n498  510  247\n885  287  649\n339  312  690\n839  518  589\n691  875  327\n549  852  692\n421  764  399\n841  938  617\n683   73  682\n838  903  513\n155  700  266\n529  492  436\n501  209  572\n177  405  185\n 70  407   98\n183  151  184\n144    4  719\n387  261  642\n391  259  283\n336  371  946\n902  810  751\n714  509  251\n124  194  440\n928  357  256\n921  241  599\n725  694  141\n219  281  864\n650  757  979\n515  678  735\n553  766  397\n771  749  360\n273  414  543\n 92  185  692\n365  480  246\n153  416  246\n527  431  831\n387  385  991\n610  849   42\n761  473  507\n268  863  467\n797  777  614\n567  810  153\n384   43  459\n656   78   14\n884  328   89\n565  340   99\n315  431  403\n169  687  408\n451  365    7\n706  807  561\n324  769  821\n645  257  467\n 90  654  617\n230  859  466\n309  363  691\n903  656  499\n165  880  548\n966  474   64\n640  851  817\n585  967  754\n340  699  880\n253  575   32\n783  349  971\n748  532  972\n132  312  789\n673  254  152\n769   90  643\n485  483    3\n228  254  423\n281  282  418\n279  536  891\n566  876  988\n753  959  569\n629  379  773\n194  468  866\n690  307  128\n813  568  374\n798  387  873\n980  363  555\n337  750  620\n565  783  190\n780   32  746\n716  222  594\n319   50  443\n498  212  408\n106  552   95\n 96  465  866\n143  216  903\n570  209  371\n 73  136  163\n579  290  400\n836  640  252\n190   81  864\n684  657  892\n405  876  982\n722  499  926\n567  764   62\n383  573  458\n111  337  947\n381  366  568\n883  323  560\n942  136  297\n103  324  576"));
//# sourceMappingURL=three-sides.js.map