window.onload = init;

function init() {
    var arr;
    var arr2 = [];
    var rand2;
    var rand3;
    var myarr = [];
    var myinputs = [];
    var arr1 = [];
    var ans;
    row1 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    row2 = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    row3 = [18, 19, 20, 21, 22, 23, 24, 25, 26];
    row4 = [27, 28, 29, 30, 31, 32, 33, 34, 35];
    row5 = [36, 37, 38, 39, 40, 41, 42, 43, 44];
    row6 = [45, 46, 47, 48, 49, 50, 51, 52, 53];
    row7 = [54, 55, 56, 57, 58, 59, 60, 61, 62];
    row8 = [63, 64, 65, 66, 67, 68, 69, 70, 71];
    row9 = [72, 73, 74, 75, 76, 77, 78, 79, 80];
    col1 = [0, 9, 18, 27, 36, 45, 54, 63, 72];
    col2 = [1, 10, 19, 28, 37, 46, 55, 64, 73];
    col3 = [2, 11, 20, 29, 38, 47, 56, 65, 74];
    col4 = [3, 12, 21, 30, 39, 48, 57, 66, 75];
    col5 = [4, 13, 22, 31, 40, 49, 58, 67, 76];
    col6 = [5, 14, 23, 32, 41, 50, 59, 68, 77];
    col7 = [6, 15, 24, 33, 42, 51, 60, 69, 78];
    col8 = [7, 16, 25, 34, 43, 52, 61, 70, 79];
    col9 = [8, 17, 26, 35, 44, 53, 62, 71, 80];
    box1 = [0, 1, 2, 9, 10, 11, 18, 19, 20];
    box2 = [3, 4, 5, 12, 13, 14, 21, 22, 23];
    box3 = [6, 7, 8, 15, 16, 17, 24, 25, 26];
    box4 = [27, 28, 29, 36, 37, 38, 45, 46, 47];
    box5 = [30, 31, 32, 39, 40, 41, 48, 49, 50];
    box6 = [33, 34, 35, 42, 43, 44, 51, 52, 53];
    box7 = [54, 55, 56, 63, 64, 65, 72, 73, 74];
    box8 = [57, 58, 59, 66, 67, 68, 75, 76, 77];
    box9 = [60, 61, 62, 69, 70, 71, 78, 79, 80];
    document.getElementById('showAnswer').addEventListener('click', function() {
        if (ans) {
            for (var i = 0; i < 81; i++) {
                var oldvalue = myinputs[i].value;
                myinputs[i].value = myarr[i];
                if (myinputs[i].style.backgroundColor == "red" || myinputs[i].style.backgroundColor == "green" || myinputs[i].style.backgroundColor == "yellow") {
                    myinputs[i].style.backgroundColor = "lightblue";
                }
                if (oldvalue == myinputs[i].value && myinputs[i].style.backgroundColor != "white") {
                    myinputs[i].style.backgroundColor = "green";
                }

            }
            ans = false;
        }

    });
    document.getElementById('hard').addEventListener('click', function() {
        var rand = Math.floor(Math.random() * 2);
        if (rand == 0) {
            generateSudoku();
        } else {
            generateSudoku2();
        }
    });
    document.getElementById('easy').addEventListener('click', function() {
        var j = [];
        var rand = Math.floor(Math.random() * 2);
        if (rand == 0) {
            generateSudoku();
        } else {
            generateSudoku2();
        }
        for (var i = 0; i < 81; i++) {
            if (myinputs[i].value == '') {
                j.push(i);
            }
        }
        for (var i = 0; i < 20; i++) {
            var rand = Math.floor(Math.random() * j.length);
            if (j[rand] != undefined) {
                myinputs[j[rand]].value = myarr[j[rand]];
                myinputs[j[rand]].style.backgroundColor = "white";
                myinputs[j[rand]].disabled = true;
                j.splice(rand, 1);
            }



        }

    });
    document.getElementById('medium').addEventListener('click', function() {
        var j = [];
        var rand = Math.floor(Math.random() * 2);
        if (rand == 0) {
            generateSudoku();
        } else {
            generateSudoku2();
        }
        for (var i = 0; i < 81; i++) {
            if (myinputs[i].value == '') {
                j.push(i);
            }
        }
        for (var i = 0; i < 10; i++) {
            var rand = Math.floor(Math.random() * j.length);
            if (j[rand] != undefined) {
                myinputs[j[rand]].value = myarr[j[rand]];
                myinputs[j[rand]].style.backgroundColor = "white";
                myinputs[j[rand]].disabled = true;
                j.splice(rand, 1);
            }



        }

    });
    document.getElementById('one-step').addEventListener('click', function() {
        var j = [];
        for (var i = 0; i < 81; i++) {
            if (myinputs[i].value == '') {
                j.push(i);
            }
        }
        var rand = Math.floor(Math.random() * j.length);
        if (j[rand] != undefined) {
            myinputs[j[rand]].value = myarr[j[rand]];
            myinputs[j[rand]].style.backgroundColor = "white";
            myinputs[j[rand]].disabled = true;
            j.splice(rand, 1);
        }
    });
    $('input').keyup(function(e) {

        if (((event.key >= 1 && event.key <= 9) || $(this).val() == '')) {
            var indinput = $(this).index();
            var valinput = $(this).val();
            var a, b, c, d, e, f, g, h, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B;
            if (valinput == '') {
                $(this).css('background-color', 'lightblue');
            }
            if (row1.indexOf(indinput) != -1 && valinput != '') {
                a = 0;
                for (var i = 0; i < 9; i++) {
                    if (myinputs[row1[i]].value == valinput) {
                        a++;
                    }
                }
            }
            if (col1.indexOf(indinput) != -1 && valinput != '') {
                b = 0;
                for (var i = 0; i < 9; i++) {
                    if (myinputs[col1[i]].value == valinput) {
                        b++;
                    }
                }
            }
            if (box1.indexOf(indinput) != -1 && valinput != '') {
                c = 0;
                for (var i = 0; i < 9; i++) {
                    if (myinputs[box1[i]].value == valinput) {
                        c++;
                    }
                }
            }
            if (row2.indexOf(indinput) != -1 && valinput != '') {
                d = 0;
                for (var i = 0; i < 9; i++) {
                    if (myinputs[row2[i]].value == valinput) {
                        d++;
                    }
                }
            }
            if (row3.indexOf(indinput) != -1 && valinput != '') {
                e = 0;
                for (var i = 0; i < 9; i++) {
                    if (myinputs[row3[i]].value == valinput) {
                        e++;
                    }
                }
            }
            if (row4.indexOf(indinput) != -1 && valinput != '') {
                f = 0;
                for (var i = 0; i < 9; i++) {
                    if (myinputs[row4[i]].value == valinput) {
                        f++;
                    }
                }
            }
            if (row5.indexOf(indinput) != -1 && valinput != '') {
                g = 0;
                for (var i = 0; i < 9; i++) {
                    if (myinputs[row5[i]].value == valinput) {
                        g++;
                    }
                }
            }
            if (row6.indexOf(indinput) != -1 && valinput != '') {
                h = 0;
                for (var i = 0; i < 9; i++) {
                    if (myinputs[row6[i]].value == valinput) {
                        h++;
                    }
                }
            }
            if (row7.indexOf(indinput) != -1 && valinput != '') {
                j = 0;
                for (var i = 0; i < 9; i++) {
                    if (myinputs[row7[i]].value == valinput) {
                        j++;
                    }
                }
            }
            if (row8.indexOf(indinput) != -1 && valinput != '') {
                k = 0;
                for (var i = 0; i < 9; i++) {
                    if (myinputs[row8[i]].value == valinput) {
                        k++;
                    }
                }
            }
            if (row9.indexOf(indinput) != -1 && valinput != '') {
                l = 0;
                for (var i = 0; i < 9; i++) {
                    if (myinputs[row9[i]].value == valinput) {
                        l++;
                    }
                }
            }
            if (col2.indexOf(indinput) != -1 && valinput != '') {
                m = 0;
                for (var i = 0; i < 9; i++) {
                    if (myinputs[col2[i]].value == valinput) {
                        m++;
                    }
                }
            }
            if (col3.indexOf(indinput) != -1 && valinput != '') {
                n = 0;
                for (var i = 0; i < 9; i++) {
                    if (myinputs[col3[i]].value == valinput) {
                        n++;
                    }
                }
            }
            if (col4.indexOf(indinput) != -1 && valinput != '') {
                o = 0;
                for (var i = 0; i < 9; i++) {
                    if (myinputs[col4[i]].value == valinput) {
                        o++;
                    }
                }
            }
            if (col5.indexOf(indinput) != -1 && valinput != '') {
                p = 0;
                for (var i = 0; i < 9; i++) {
                    if (myinputs[col5[i]].value == valinput) {
                        p++;
                    }
                }
            }
            if (col6.indexOf(indinput) != -1 && valinput != '') {
                q = 0;
                for (var i = 0; i < 9; i++) {
                    if (myinputs[col6[i]].value == valinput) {
                        q++;
                    }
                }
            }
            if (col7.indexOf(indinput) != -1 && valinput != '') {
                r = 0;
                for (var i = 0; i < 9; i++) {
                    if (myinputs[col7[i]].value == valinput) {
                        r++;
                    }
                }
            }
            if (col8.indexOf(indinput) != -1 && valinput != '') {
                s = 0;
                for (var i = 0; i < 9; i++) {
                    if (myinputs[col8[i]].value == valinput) {
                        s++;
                    }
                }
            }
            if (col9.indexOf(indinput) != -1 && valinput != '') {
                t = 0;
                for (var i = 0; i < 9; i++) {
                    if (myinputs[col9[i]].value == valinput) {
                        t++;
                    }
                }
            }
            if (box2.indexOf(indinput) != -1 && valinput != '') {
                u = 0;
                for (var i = 0; i < 9; i++) {
                    if (myinputs[box2[i]].value == valinput) {
                        u++;
                    }
                }
            }
            if (box3.indexOf(indinput) != -1 && valinput != '') {
                v = 0;
                for (var i = 0; i < 9; i++) {
                    if (myinputs[box3[i]].value == valinput) {
                        v++;
                    }
                }
            }
            if (box4.indexOf(indinput) != -1 && valinput != '') {
                w = 0;
                for (var i = 0; i < 9; i++) {
                    if (myinputs[box4[i]].value == valinput) {
                        w++;
                    }
                }
            }
            if (box5.indexOf(indinput) != -1 && valinput != '') {
                x = 0;
                for (var i = 0; i < 9; i++) {
                    if (myinputs[box5[i]].value == valinput) {
                        x++;
                    }
                }
            }
            if (box6.indexOf(indinput) != -1 && valinput != '') {
                y = 0;
                for (var i = 0; i < 9; i++) {
                    if (myinputs[box6[i]].value == valinput) {
                        y++;
                    }
                }
            }
            if (box7.indexOf(indinput) != -1 && valinput != '') {
                z = 0;
                for (var i = 0; i < 9; i++) {
                    if (myinputs[box7[i]].value == valinput) {
                        z++;
                    }
                }
            }
            if (box8.indexOf(indinput) != -1 && valinput != '') {
                A = 0;
                for (var i = 0; i < 9; i++) {
                    if (myinputs[box8[i]].value == valinput) {
                        A++;
                    }
                }
            }
            if (box9.indexOf(indinput) != -1 && valinput != '') {
                B = 0;
                for (var i = 0; i < 9; i++) {
                    if (myinputs[box9[i]].value == valinput) {
                        B++;
                    }
                }
            }
            if ((a > 1 || b > 1 || c > 1 || d > 1 || e > 1 || f > 1 || g > 1 || h > 1 || j > 1 || k > 1 || l > 1 || m > 1 || n > 1 || o > 1 || p > 1 || q > 1 || r > 1 || s > 1 || t > 1 || u > 1 || v > 1 || w > 1 || x > 1 || y > 1 || z > 1 || A > 1 || B > 1) && valinput != '') {
                $(this).css('background-color', 'red');
            } else if (valinput != '') {
                $(this).css('background-color', 'green');
            }
            if ($(this).val().length >= 2) {
                $(this).css('background-color', 'yellow');
            }

            return true;
        } else {
            $(this).css('background-color', 'yellow');
            return false;
        }
    });

    function generateSudoku() {
        ans = true;
        var rand;
        arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
        arr1 = arr;
        myinputs = document.querySelectorAll('input');
        // for row : 1--------------------------------------------------
        for (var i = 0; i < 9; i++) {
            rand = Math.floor(Math.random() * (arr1.length));
            myinputs[i].value = arr1[rand];
            arr1.splice(rand, 1);
        }
        // for row : 2 -------------------------------------------------
        var rand1 = Math.floor(Math.random() * 2);
        if (rand1 == 0) {
            arr2.push(myinputs[3].value);
            arr2.push(myinputs[4].value);
            arr2.push(myinputs[5].value);
            for (var i = 9; i <= 11; i++) {
                rand2 = Math.floor(Math.random() * (arr2.length));
                myinputs[i].value = arr2[rand2];
                arr2.splice(rand2, 1);

            }
            arr2.push(myinputs[6].value, myinputs[7].value, myinputs[8].value);
            for (var i = 12; i <= 14; i++) {
                rand2 = Math.floor(Math.random() * (arr2.length));
                myinputs[i].value = arr2[rand2];
                arr2.splice(rand2, 1);

            }
            arr2.push(myinputs[0].value, myinputs[1].value, myinputs[2].value);
            for (var i = 15; i <= 17; i++) {
                rand2 = Math.floor(Math.random() * (arr2.length));
                myinputs[i].value = arr2[rand2];
                arr2.splice(rand2, 1);

            }
            arr2.push(myinputs[6].value, myinputs[7].value, myinputs[8].value);
            for (var i = 18; i <= 20; i++) {
                rand2 = Math.floor(Math.random() * (arr2.length));
                myinputs[i].value = arr2[rand2];
                arr2.splice(rand2, 1);

            }
            arr2.push(myinputs[0].value, myinputs[1].value, myinputs[2].value);
            for (var i = 21; i <= 23; i++) {
                rand2 = Math.floor(Math.random() * (arr2.length));
                myinputs[i].value = arr2[rand2];
                arr2.splice(rand2, 1);

            }
            arr2.push(myinputs[3].value, myinputs[4].value, myinputs[5].value);
            for (var i = 24; i <= 26; i++) {
                rand2 = Math.floor(Math.random() * (arr2.length));
                myinputs[i].value = arr2[rand2];
                arr2.splice(rand2, 1);

            }
        } else {
            arr2.push(myinputs[6].value);
            arr2.push(myinputs[7].value);
            arr2.push(myinputs[8].value);
            for (var i = 9; i <= 11; i++) {
                rand2 = Math.floor(Math.random() * (arr2.length));
                myinputs[i].value = arr2[rand2];
                arr2.splice(rand2, 1);

            }
            arr2.push(myinputs[0].value, myinputs[1].value, myinputs[2].value);
            for (var i = 12; i <= 14; i++) {
                rand2 = Math.floor(Math.random() * (arr2.length));
                myinputs[i].value = arr2[rand2];
                arr2.splice(rand2, 1);

            }
            arr2.push(myinputs[3].value, myinputs[4].value, myinputs[5].value);
            for (var i = 15; i <= 17; i++) {
                rand2 = Math.floor(Math.random() * (arr2.length));
                myinputs[i].value = arr2[rand2];
                arr2.splice(rand2, 1);

            }
            arr2.push(myinputs[3].value, myinputs[4].value, myinputs[5].value);
            for (var i = 18; i <= 20; i++) {
                rand2 = Math.floor(Math.random() * (arr2.length));
                myinputs[i].value = arr2[rand2];
                arr2.splice(rand2, 1);

            }
            arr2.push(myinputs[6].value, myinputs[7].value, myinputs[8].value);
            for (var i = 21; i <= 23; i++) {
                rand2 = Math.floor(Math.random() * (arr2.length));
                myinputs[i].value = arr2[rand2];
                arr2.splice(rand2, 1);

            }
            arr2.push(myinputs[0].value, myinputs[1].value, myinputs[2].value);
            for (var i = 24; i <= 26; i++) {
                rand2 = Math.floor(Math.random() * (arr2.length));
                myinputs[i].value = arr2[rand2];
                arr2.splice(rand2, 1);

            }
        }
        rand2 = Math.floor(Math.random() * 2);
        if (rand2 == 0) {
            myinputs[27].value = myinputs[1].value;
            myinputs[28].value = myinputs[2].value;
            myinputs[29].value = myinputs[0].value;
            myinputs[54].value = myinputs[2].value;
            myinputs[55].value = myinputs[0].value;
            myinputs[56].value = myinputs[1].value;


        } else {
            myinputs[27].value = myinputs[2].value;
            myinputs[28].value = myinputs[0].value;
            myinputs[29].value = myinputs[1].value;
            myinputs[54].value = myinputs[1].value;
            myinputs[55].value = myinputs[2].value;
            myinputs[56].value = myinputs[0].value;

        }
        rand2 = Math.floor(Math.random() * 2);
        if (rand2 == 0) {
            myinputs[30].value = myinputs[5].value;
            myinputs[31].value = myinputs[3].value;
            myinputs[32].value = myinputs[4].value;
            myinputs[57].value = myinputs[4].value;
            myinputs[58].value = myinputs[5].value;
            myinputs[59].value = myinputs[3].value;


        } else {
            myinputs[30].value = myinputs[4].value;
            myinputs[31].value = myinputs[5].value;
            myinputs[32].value = myinputs[3].value;
            myinputs[57].value = myinputs[5].value;
            myinputs[58].value = myinputs[3].value;
            myinputs[59].value = myinputs[4].value;

        }
        rand2 = Math.floor(Math.random() * 2);
        if (rand2 == 0) {
            myinputs[33].value = myinputs[8].value;
            myinputs[34].value = myinputs[6].value;
            myinputs[35].value = myinputs[7].value;
            myinputs[60].value = myinputs[7].value;
            myinputs[61].value = myinputs[8].value;
            myinputs[62].value = myinputs[6].value;


        } else {
            myinputs[33].value = myinputs[7].value;
            myinputs[34].value = myinputs[8].value;
            myinputs[35].value = myinputs[6].value;
            myinputs[60].value = myinputs[8].value;
            myinputs[61].value = myinputs[6].value;
            myinputs[62].value = myinputs[7].value;

        }
        rand2 = Math.floor(Math.random() * 2);
        if (rand2 == 0) {
            myinputs[36].value = myinputs[11].value;
            myinputs[37].value = myinputs[9].value;
            myinputs[38].value = myinputs[10].value;
            myinputs[63].value = myinputs[10].value;
            myinputs[64].value = myinputs[11].value;
            myinputs[65].value = myinputs[9].value;


        } else {
            myinputs[36].value = myinputs[10].value;
            myinputs[37].value = myinputs[11].value;
            myinputs[38].value = myinputs[9].value;
            myinputs[63].value = myinputs[11].value;
            myinputs[64].value = myinputs[9].value;
            myinputs[65].value = myinputs[10].value;

        }
        rand2 = Math.floor(Math.random() * 2);
        if (rand2 == 0) {
            myinputs[39].value = myinputs[14].value;
            myinputs[40].value = myinputs[12].value;
            myinputs[41].value = myinputs[13].value;
            myinputs[66].value = myinputs[13].value;
            myinputs[67].value = myinputs[14].value;
            myinputs[68].value = myinputs[12].value;


        } else {
            myinputs[39].value = myinputs[13].value;
            myinputs[40].value = myinputs[14].value;
            myinputs[41].value = myinputs[12].value;
            myinputs[66].value = myinputs[14].value;
            myinputs[67].value = myinputs[12].value;
            myinputs[68].value = myinputs[13].value;

        }
        rand2 = Math.floor(Math.random() * 2);
        if (rand2 == 0) {
            myinputs[42].value = myinputs[17].value;
            myinputs[43].value = myinputs[15].value;
            myinputs[44].value = myinputs[16].value;
            myinputs[69].value = myinputs[16].value;
            myinputs[70].value = myinputs[17].value;
            myinputs[71].value = myinputs[15].value;


        } else {
            myinputs[42].value = myinputs[16].value;
            myinputs[43].value = myinputs[17].value;
            myinputs[44].value = myinputs[15].value;
            myinputs[69].value = myinputs[17].value;
            myinputs[70].value = myinputs[15].value;
            myinputs[71].value = myinputs[16].value;

        }
        rand2 = Math.floor(Math.random() * 2);
        if (rand2 == 0) {
            myinputs[45].value = myinputs[20].value;
            myinputs[46].value = myinputs[18].value;
            myinputs[47].value = myinputs[19].value;
            myinputs[72].value = myinputs[19].value;
            myinputs[73].value = myinputs[20].value;
            myinputs[74].value = myinputs[18].value;


        } else {
            myinputs[45].value = myinputs[19].value;
            myinputs[46].value = myinputs[20].value;
            myinputs[47].value = myinputs[18].value;
            myinputs[72].value = myinputs[20].value;
            myinputs[73].value = myinputs[18].value;
            myinputs[74].value = myinputs[19].value;

        }


        rand2 = Math.floor(Math.random() * 2);
        if (rand2 == 0) {
            myinputs[48].value = myinputs[23].value;
            myinputs[49].value = myinputs[21].value;
            myinputs[50].value = myinputs[22].value;
            myinputs[75].value = myinputs[22].value;
            myinputs[76].value = myinputs[23].value;
            myinputs[77].value = myinputs[21].value;


        } else {
            myinputs[48].value = myinputs[22].value;
            myinputs[49].value = myinputs[23].value;
            myinputs[50].value = myinputs[21].value;
            myinputs[75].value = myinputs[23].value;
            myinputs[76].value = myinputs[21].value;
            myinputs[77].value = myinputs[22].value;

        }
        rand2 = Math.floor(Math.random() * 2);
        if (rand2 == 0) {
            myinputs[51].value = myinputs[26].value;
            myinputs[52].value = myinputs[24].value;
            myinputs[53].value = myinputs[25].value;
            myinputs[78].value = myinputs[25].value;
            myinputs[79].value = myinputs[26].value;
            myinputs[80].value = myinputs[24].value;


        } else {
            myinputs[51].value = myinputs[25].value;
            myinputs[52].value = myinputs[26].value;
            myinputs[53].value = myinputs[24].value;
            myinputs[78].value = myinputs[26].value;
            myinputs[79].value = myinputs[24].value;
            myinputs[80].value = myinputs[25].value;

        }
        myarr = [];
        for (var i = 0; i < myinputs.length; i++) {
            myarr.push(myinputs[i].value);
            myinputs[i].style.backgroundColor = "lightblue";
            myinputs[i].disabled = false;
        }
        for (var i = 0; i < 81; i++) {
            myinputs[i].value = '';
        }
        var j = [];
        for (var i = 0; i < 81; i++) {
            j.push(i);
        }
        for (var i = 0; i < 15; i++) {
            var rand = Math.floor(Math.random() * j.length);
            myinputs[j[rand]].value = myarr[j[rand]];
            myinputs[j[rand]].style.backgroundColor = "white";
            myinputs[j[rand]].disabled = true;
            j.splice(rand, 1);


        }

    }

    function generateSudoku2() {
        ans = true;
        var myarray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        myinputs = document.querySelectorAll('input');
        var temp = myarray;
        var temp2 = [];
        for (var i = 0; i < 9; i++) {
            var rand = Math.floor(Math.random() * temp.length);
            myinputs[i].value = temp[rand];
            var idx = temp.indexOf(temp[rand]);
            temp.splice(idx, 1);
        }
        for (var i = 3; i < 9; i++) {
            temp.push(myinputs[i].value);
        }
        for (var i = 9; i < 12; i++) {
            var rand = Math.floor(Math.random() * temp.length);
            myinputs[i].value = temp[rand];
            var idx = temp.indexOf(temp[rand]);
            temp.splice(idx, 1);
        }
        var count = 0;
        for (var i = 3; i < 6; i++) {
            if (temp.indexOf(myinputs[i].value) != -1) {
                count++;
                var idx = temp.indexOf(myinputs[i].value);
                temp2.push(myinputs[i].value);
                temp.splice(idx, 1);
            }
        }
        if (count == 0) {
            for (var i = 12; i < 15; i++) {
                var rand = Math.floor(Math.random() * temp.length);
                myinputs[i].value = temp[rand];
                var idx = temp.indexOf(temp[rand]);
                temp.splice(idx, 1);
            }
            for (var i = 0; i < 3; i++) {
                temp.push(myinputs[i].value);
            }
            for (var i = 15; i < 18; i++) {
                var rand = Math.floor(Math.random() * temp.length);
                myinputs[i].value = temp[rand];
                var idx = temp.indexOf(temp[rand]);
                temp.splice(idx, 1);
            }
        } else if (count == 1) {
            for (var i = 12; i < 14; i++) {
                var rand = Math.floor(Math.random() * temp.length);
                myinputs[i].value = temp[rand];
                var idx = temp.indexOf(temp[rand]);
                temp.splice(idx, 1);
            }
            myinputs[15].value = temp2[0];
            temp2.splice(0, 1);
            for (var i = 0; i < 3; i++) {
                temp.push(myinputs[i].value);
            }
            var rand = Math.floor(Math.random() * temp.length);
            myinputs[14].value = temp[rand];
            var idx = temp.indexOf(temp[rand]);
            temp.splice(idx, 1);
            for (var i = 16; i < 18; i++) {
                var rand = Math.floor(Math.random() * temp.length);
                myinputs[i].value = temp[rand];
                var idx = temp.indexOf(temp[rand]);
                temp.splice(idx, 1);
            }

        } else if (count == 2) {
            myinputs[12].value = temp[0];
            temp.splice(0, 1);
            for (var i = 15; i < 17; i++) {
                var rand = Math.floor(Math.random() * temp2.length);
                myinputs[i].value = temp2[rand];
                var idx = temp2.indexOf(temp2[rand]);
                temp2.splice(idx, 1);
            }
            for (var i = 0; i < 3; i++) {
                temp.push(myinputs[i].value);
            }
            for (var i = 13; i < 15; i++) {
                var rand = Math.floor(Math.random() * temp.length);
                myinputs[i].value = temp[rand];
                var idx = temp.indexOf(temp[rand]);
                temp.splice(idx, 1);
            }
            myinputs[17].value = temp[0];
            temp.splice(0, 1);

        } else {
            for (var i = 0; i < 3; i++) {
                temp.push(myinputs[i].value);
            }
            for (var i = 12; i < 15; i++) {
                var rand = Math.floor(Math.random() * temp.length);
                myinputs[i].value = temp[rand];
                var idx = temp.indexOf(temp[rand]);
                temp.splice(idx, 1);
            }
            for (var i = 3; i < 6; i++) {
                temp.push(myinputs[i].value);
            }
            for (var i = 15; i < 18; i++) {
                var rand = Math.floor(Math.random() * temp.length);
                myinputs[i].value = temp[rand];
                var idx = temp.indexOf(temp[rand]);
                temp.splice(idx, 1);
            }
        }
        newtemp = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
        temp.push(myinputs[0].value, myinputs[1].value, myinputs[2].value, myinputs[9].value, myinputs[10].value, myinputs[11].value);
        for (var i = 0; i < 9; i++) {
            if (temp.indexOf(newtemp[i]) == -1) {
                temp2.push(newtemp[i]);
            }
        }
        for (var i = 18; i < 21; i++) {
            var rand = Math.floor(Math.random() * temp2.length);
            myinputs[i].value = temp2[rand];
            var idx = temp2.indexOf(temp2[rand]);
            temp2.splice(idx, 1);
        }
        temp = [];
        temp.push(myinputs[3].value, myinputs[4].value, myinputs[5].value, myinputs[12].value, myinputs[13].value, myinputs[14].value);
        for (var i = 0; i < 9; i++) {
            if (temp.indexOf(newtemp[i]) == -1) {
                temp2.push(newtemp[i]);
            }
        }
        for (var i = 21; i < 24; i++) {
            var rand = Math.floor(Math.random() * temp2.length);
            myinputs[i].value = temp2[rand];
            var idx = temp2.indexOf(temp2[rand]);
            temp2.splice(idx, 1);
        }
        temp = [];
        temp.push(myinputs[6].value, myinputs[7].value, myinputs[8].value, myinputs[15].value, myinputs[16].value, myinputs[17].value);
        for (var i = 0; i < 9; i++) {
            if (temp.indexOf(newtemp[i]) == -1) {
                temp2.push(newtemp[i]);
            }
        }
        for (var i = 24; i < 27; i++) {
            var rand = Math.floor(Math.random() * temp2.length);
            myinputs[i].value = temp2[rand];
            var idx = temp2.indexOf(temp2[rand]);
            temp2.splice(idx, 1);
        }
        rand = Math.floor(Math.random() * 2);
        if (rand == 0) {
            myinputs[27].value = myinputs[1].value;
            myinputs[36].value = myinputs[10].value;
            myinputs[45].value = myinputs[19].value;
            myinputs[54].value = myinputs[2].value;
            myinputs[63].value = myinputs[11].value;
            myinputs[72].value = myinputs[20].value;
            myinputs[28].value = myinputs[2].value;
            myinputs[37].value = myinputs[11].value;
            myinputs[46].value = myinputs[20].value;
            myinputs[55].value = myinputs[0].value;
            myinputs[64].value = myinputs[9].value;
            myinputs[73].value = myinputs[18].value;
            myinputs[29].value = myinputs[0].value;
            myinputs[38].value = myinputs[9].value;
            myinputs[47].value = myinputs[18].value;
            myinputs[56].value = myinputs[1].value;
            myinputs[65].value = myinputs[10].value;
            myinputs[74].value = myinputs[19].value;
        } else {
            myinputs[27].value = myinputs[2].value;
            myinputs[36].value = myinputs[11].value;
            myinputs[45].value = myinputs[20].value;
            myinputs[54].value = myinputs[1].value;
            myinputs[63].value = myinputs[10].value;
            myinputs[72].value = myinputs[19].value;
            myinputs[28].value = myinputs[0].value;
            myinputs[37].value = myinputs[9].value;
            myinputs[46].value = myinputs[18].value;
            myinputs[55].value = myinputs[2].value;
            myinputs[64].value = myinputs[11].value;
            myinputs[73].value = myinputs[20].value;
            myinputs[29].value = myinputs[1].value;
            myinputs[38].value = myinputs[10].value;
            myinputs[47].value = myinputs[19].value;
            myinputs[56].value = myinputs[0].value;
            myinputs[65].value = myinputs[9].value;
            myinputs[74].value = myinputs[18].value;
        }
        rand = Math.floor(Math.random() * 2);
        if (rand == 0) {
            myinputs[30].value = myinputs[4].value;
            myinputs[39].value = myinputs[13].value;
            myinputs[48].value = myinputs[22].value;
            myinputs[57].value = myinputs[5].value;
            myinputs[66].value = myinputs[14].value;
            myinputs[75].value = myinputs[23].value;
            myinputs[31].value = myinputs[5].value;
            myinputs[40].value = myinputs[14].value;
            myinputs[49].value = myinputs[23].value;
            myinputs[58].value = myinputs[3].value;
            myinputs[67].value = myinputs[12].value;
            myinputs[76].value = myinputs[21].value;
            myinputs[32].value = myinputs[3].value;
            myinputs[41].value = myinputs[12].value;
            myinputs[50].value = myinputs[21].value;
            myinputs[59].value = myinputs[4].value;
            myinputs[68].value = myinputs[13].value;
            myinputs[77].value = myinputs[22].value;
        } else {
            myinputs[30].value = myinputs[5].value;
            myinputs[39].value = myinputs[14].value;
            myinputs[48].value = myinputs[23].value;
            myinputs[57].value = myinputs[4].value;
            myinputs[66].value = myinputs[13].value;
            myinputs[75].value = myinputs[22].value;
            myinputs[31].value = myinputs[3].value;
            myinputs[40].value = myinputs[12].value;
            myinputs[49].value = myinputs[21].value;
            myinputs[58].value = myinputs[5].value;
            myinputs[67].value = myinputs[14].value;
            myinputs[76].value = myinputs[23].value;
            myinputs[32].value = myinputs[4].value;
            myinputs[41].value = myinputs[13].value;
            myinputs[50].value = myinputs[22].value;
            myinputs[59].value = myinputs[3].value;
            myinputs[68].value = myinputs[12].value;
            myinputs[77].value = myinputs[21].value;
        }
        rand = Math.floor(Math.random() * 2);
        if (rand == 0) {
            myinputs[33].value = myinputs[7].value;
            myinputs[42].value = myinputs[16].value;
            myinputs[51].value = myinputs[25].value;
            myinputs[60].value = myinputs[8].value;
            myinputs[69].value = myinputs[17].value;
            myinputs[78].value = myinputs[26].value;
            myinputs[34].value = myinputs[8].value;
            myinputs[43].value = myinputs[17].value;
            myinputs[52].value = myinputs[26].value;
            myinputs[61].value = myinputs[6].value;
            myinputs[70].value = myinputs[15].value;
            myinputs[79].value = myinputs[24].value;
            myinputs[35].value = myinputs[6].value;
            myinputs[44].value = myinputs[15].value;
            myinputs[53].value = myinputs[24].value;
            myinputs[62].value = myinputs[7].value;
            myinputs[71].value = myinputs[16].value;
            myinputs[80].value = myinputs[25].value;
        } else {
            myinputs[33].value = myinputs[8].value;
            myinputs[42].value = myinputs[17].value;
            myinputs[51].value = myinputs[26].value;
            myinputs[60].value = myinputs[7].value;
            myinputs[69].value = myinputs[16].value;
            myinputs[78].value = myinputs[25].value;
            myinputs[34].value = myinputs[6].value;
            myinputs[43].value = myinputs[15].value;
            myinputs[52].value = myinputs[24].value;
            myinputs[61].value = myinputs[8].value;
            myinputs[70].value = myinputs[17].value;
            myinputs[79].value = myinputs[26].value;
            myinputs[35].value = myinputs[7].value;
            myinputs[44].value = myinputs[16].value;
            myinputs[53].value = myinputs[25].value;
            myinputs[62].value = myinputs[6].value;
            myinputs[71].value = myinputs[15].value;
            myinputs[80].value = myinputs[24].value;
        }
        myarr = [];
        for (var i = 0; i < myinputs.length; i++) {
            myarr.push(myinputs[i].value);
            myinputs[i].style.backgroundColor = "lightblue";
            myinputs[i].disabled = false;
        }
        for (var i = 0; i < 81; i++) {
            myinputs[i].value = '';
        }
        var j = [];
        for (var i = 0; i < 81; i++) {
            j.push(i);
        }
        for (var i = 0; i < 15; i++) {
            var rand = Math.floor(Math.random() * j.length);
            myinputs[j[rand]].value = myarr[j[rand]];
            myinputs[j[rand]].style.backgroundColor = "white";
            myinputs[j[rand]].disabled = true;
            j.splice(rand, 1);


        }


    }


    var rand = Math.floor(Math.random() * 2);
    if (rand == 0) {
        generateSudoku();
    } else {
        generateSudoku2();
    }
}