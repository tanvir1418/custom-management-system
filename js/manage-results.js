// MANAGE RESULTS list item start

// const sub_ul_list_11 = document.querySelector(".sub-ul-list-11");
// const sub_ul_list_22 = document.querySelector(".sub-ul-list-22");
// const sub_ul_list_33 = document.querySelector(".sub-ul-list-33");
const left_list_404 = document.querySelector(".left-list-404");

// Added by ASHIQ
const listItemData404 = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
    "Item 11",
    "Item 12",
    "Item 13",
    "Item 14",
    "Item 15",
    "Item 16",
    "Item 17",
    "Item 18",
    "Item 19",
    "Item 20",
    "Item 21",
    "Item 22",
    "Item 23",
    "Item 24",
    "Item 25",
    "Item 26",
    "Item 27",
    "Item 28",
    "Item 29",
];
(function listDataMan404() {
    let htmllist = "", htmlDataModal = "";
    listItemData404.forEach((item, index) => {
        htmllist += `<li class="list-item-404-${index + 1}">
        <p>${item}</p>
        <div class="tik-box display-none">
            <i class="fas fa-check"></i>
        </div>
        <div class="arrow-404 arrow-404-background-color-1">
            <i class="fas fa-caret-right arrow-404-i-color-1"></i>
        </div>
        </li>`;
        /* Update this function By Ashiq */
        let list_data1 = "",
            list_data2 = "",
            list_data3 = "",
            length = 60;
        for (let i = 1; i <= length; i++) {
            let elementHtml = `<li class="result-list-${index + 1}-${i}">
            <p>Level ${index + 1} - Item ${i}</p>
            <div class="sublist-check-box-404">
                <i class="fas fa-check"></i>
            </div>
            <div class="sublist-cancel-box-404" data-toggle="modal" data-target="#deletlistopt2">
                <i class="fas fa-times"></i>
            </div>
            </li>`;
            if (length < 61) {
                if (i <= 20) {
                    list_data1 += elementHtml;
                } else if (i >= 21 && i <= 40) {
                    list_data2 += elementHtml;
                } else {
                    list_data3 += elementHtml;
                }
            } else {
                let divide = Math.floor(length / 3);
                let len = divide + (length % 3);
                if (i <= len) {
                    list_data1 += elementHtml;
                } else if (i > len && i <= len + divide) {
                    list_data2 += elementHtml;
                } else {
                    list_data3 += elementHtml;
                }
            }
        }
        htmlDataModal +=
            `<ul class="right-list-404 right-list-4041" style=" display: none" id="sub-ul-list-1-${index + 1}">
        ${list_data1}
        </ul>
        <ul class="right-list-404 right-list-4042" style=" display: none" id="sub-ul-list-2-${index + 1}">
            ${list_data2}
        </ul>
        <ul class="right-list-404 right-list-4043" style=" display: none" id="sub-ul-list-3-${index + 1}">
            ${list_data3}
        </ul>`;
    });
    left_list_404.innerHTML = htmllist;
    document.querySelector("#div-sub-ul-li-list").innerHTML = htmlDataModal;
    /* Update End By Ashiq */
})();
/* New Function Start */
let sub_ul_list_id1_old = "",
    sub_ul_list_id2_old = "",
    sub_ul_list_id3_old = "";

function item_li_click_handle(listClassName) {
    let level_no = listClassName.match(/\d+/g)[1];
    if (level_no != null) {
        const sub_ul_list_id1 = "#sub-ul-list-1-" + level_no,
            sub_ul_list_id2 = "#sub-ul-list-2-" + level_no,
            sub_ul_list_id3 = "#sub-ul-list-3-" + level_no;
        if (sub_ul_list_id1 !== sub_ul_list_id1_old) {
            $(sub_ul_list_id1_old).toggle();
            $(sub_ul_list_id1).toggle();
            sub_ul_list_id1_old = sub_ul_list_id1;
        } else {
            $(sub_ul_list_id1_old).toggle();
            sub_ul_list_id1_old = "";
        }

        if (sub_ul_list_id2 !== sub_ul_list_id2_old) {
            $(sub_ul_list_id2_old).toggle();
            $(sub_ul_list_id2).toggle();
            sub_ul_list_id2_old = sub_ul_list_id2;
        } else {
            $(sub_ul_list_id2_old).toggle();
            sub_ul_list_id2_old = "";
        }

        if (sub_ul_list_id3 !== sub_ul_list_id3_old) {
            $(sub_ul_list_id3_old).toggle();
            $(sub_ul_list_id3).toggle();
            sub_ul_list_id3_old = sub_ul_list_id3;
        } else {
            $(sub_ul_list_id3_old).toggle();
            sub_ul_list_id3_old = "";
        }
    }
}
/* New Function End */
var left_list_data = "";
(function resultLeftListControl() {
    let oldTarget = "";
    left_list_404.addEventListener("click", function (e) {
        let target = e.target;
        const elementName = ["DIV", "P"];
        if (elementName.includes(target.tagName)) {
            target = target.parentNode;
        } else if (target.tagName === "I") {
            target = target.parentNode.parentNode;
        }

        if (oldTarget != "" && oldTarget !== target) {
            $(oldTarget).removeClass("highlight_404");
            $(oldTarget).children(".tik-box").removeClass("display-block");
            $(oldTarget).children(".tik-box").addClass("display-none");
            $(oldTarget).children(".arrow-404").removeClass("arrow-404-background-color-2");
            $(oldTarget).children(".arrow-404").addClass("arrow-404-background-color-1");
            $(oldTarget).children(".arrow-404").children(".fa-caret-right").removeClass("arrow-404-i-color-2");
            $(oldTarget).children(".arrow-404").children(".fa-caret-right").addClass("arrow-404-i-color-1");
        }
        $(target).toggleClass("highlight_404");
        $(target).children(".tik-box").toggleClass("display-none display-block");
        $(target).children(".arrow-404").toggleClass("arrow-404-background-color-1 arrow-404-background-color-2");
        $(target).children(".arrow-404").children(".fa-caret-right").toggleClass("arrow-404-i-color-1 arrow-404-i-color-2");
        oldTarget = target;

        left_list_data = target.childNodes[1].innerHTML;
        item_li_click_handle(target.classList[0]);
    });
})();

const list_left_item_1 = document.querySelector(".list-item-404-1");
// End here by ASHIQ


const tik_box = document.querySelector(".tik-box");
const sublist_check_box_404 = document.querySelector(".right-list-404 .sublist-check-box-404");
const sublist_cancel_box_404 = document.querySelector(".right-list-404 .sublist-cancel-box-404");
// const result_list_1 = document.querySelector(".result-list-1");
const arrow_404 = document.querySelector(".left-list-404 li .arrow-404");
const arrow_icon = document.querySelector(".left-list-404 li .arrow-404 i");

// sub_ul_list_11.style.display = "none";
// sub_ul_list_22.style.display = "none";
// sub_ul_list_33.style.display = "none";

// $(list_left_item_1).click(function () {

//     $(sub_ul_list_11).toggle();
//     sub_ul_list_11.style.marginLeft = "300px";

//     $(sub_ul_list_22).toggle();
//     sub_ul_list_22.style.marginLeft = "580px";

//     $(sub_ul_list_33).toggle();
//     sub_ul_list_33.style.marginLeft = "860px";

// });

// result_list_1.onclick = () => {
//     sublist_cancel_box_404.style.display = "none";
//     sublist_check_box_404.style.display = "block";
//     $(sublist_cancel_box_404).toggle();
//     $(sublist_check_box_404).toggle();
// };


/* ================ Scroll Down START ============== */
$(document).ready(function () {
    $(".results-scroll-down").click(function () {
        const table_scroll_404 = document.querySelector(".table-scroll-404");
        $(".table-scroll-404").animate({
            scrollTop: table_scroll_404.scrollTop + 100,
        },
            250
        );
    });
});

/* ================ Scroll Down END ============== */

// MANAGE RESULTS list item end

// ====== LIST ITEM TO CHART PAGE START ============

const select_table = document.querySelector(".select-item-table");
const chartPage = document.querySelector("#chartPage");
chartPage.style.display = "none";
chartPage.style.opacity = "0";

$("#div-sub-ul-li-list").click(function (e) {
    let target = e.target;
    if (target.tagName === "DIV") {
        if (target.className === "sublist-cancel-box-404") {
            deleteManageModal(target.parentNode.classList[0]);
            return;
        }
        target = target.parentNode;
    } else if (target.tagName === "P") {
        target = target.parentNode;
    } else if (target.tagName === "I") {
        target = target.parentNode;
        if (target.className === "sublist-cancel-box-404") {
            deleteManageModal(target.parentNode.classList[0]);
            return;
        }
        else target = target.parentNode;
    } else if (target.tagName !== "LI") return;

    let dataList = target.childNodes[1].innerHTML;
    document.querySelector("#chartPage .chart-title .left-item").innerHTML = left_list_data;
    document.querySelector("#chartPage .chart-title .right-item").innerHTML = dataList;
    document.getElementById("firstOpen").click();
    gotoChartPage();
});

function deleteManageModal(className) {
    let mng_opt2_delete = document.querySelector("#mng-opt2-delete");
    mng_opt2_delete.addEventListener("click", function () {
        let delObj = document.querySelector(`.${className}`);
        delObj.remove();
    });
}
// ----------- ASHIQ -------------- 
function calAngle(obj) {
    let matrix = getComputedStyle(obj).getPropertyValue("transform");
    let values = matrix.split("(")[1].split(")")[0].split(",");
    let angle = Math.round(Math.atan2(values[1], values[0]) * (180 / Math.PI));
    return angle;
}

function gotoChartPage() {
    select_table.style.display = "none";
    chartPage.style.display = "block";
    chartPage.style.opacity = "1";
    let interval = 50;

    /*============----------ASHIQ----------=============*/
    let meter1_input = 34;
    let obj1 = document.getElementById("scorer-meter-1");
    obj1.classList.add("scorer-1-tick-animation");
    let p_element1 = document.getElementById("value-of-scorer-meter-1");
    let intervalId1 = window.setInterval(function () {
        try {
            let angle = calAngle(obj1);
            let percent = parseFloat(angle / 1.8).toFixed(2);
            p_element1.innerHTML = `${percent}%`;
            if (percent >= meter1_input) {
                obj1.classList.remove("scorer-1-tick-animation");
                obj1.style.transformOrigin = "right center";
                obj1.style.transform = `rotate(${angle}deg)`;
                p_element1.innerHTML = `${meter1_input}%`;
                clearInterval(intervalId1);
            }
        } catch (err) {
            clearInterval(intervalId1);
        }
    }, interval);

    let meter2_input = 55;
    let obj2 = document.getElementById("scorer-meter-2");
    obj2.classList.add("scorer-1-tick-animation");
    let p_element2 = document.getElementById("value-of-scorer-meter-2");
    let intervalId2 = window.setInterval(function () {
        try {
            let angle = calAngle(obj2);
            let percent = parseFloat(angle / 1.8).toFixed(2);
            p_element2.innerHTML = `${percent}%`;
            if (percent >= meter2_input) {
                obj2.classList.remove("scorer-1-tick-animation");
                obj2.style.transformOrigin = "right center";
                obj2.style.transform = `rotate(${angle}deg)`;
                p_element2.innerHTML = `${meter2_input}%`;
                clearInterval(intervalId2);
            }
        } catch (err) {
            clearInterval(intervalId2);
        }
    }, interval);

    let meter3_input = 73;
    let obj3 = document.getElementById("scorer-meter-3");
    obj3.classList.add("scorer-1-tick-animation");
    let p_element3 = document.getElementById("value-of-scorer-meter-3");
    let intervalId3 = window.setInterval(function () {
        try {
            let angle = calAngle(obj3);
            let percent = parseFloat(angle / 1.8).toFixed(2);
            p_element3.innerHTML = `${percent}%`;
            if (percent >= meter3_input) {
                obj3.classList.remove("scorer-1-tick-animation");
                obj3.style.transformOrigin = "right center";
                obj3.style.transform = `rotate(${angle}deg)`;
                p_element3.innerHTML = `${meter3_input}%`;
                clearInterval(intervalId3);
            }
        } catch (err) {
            clearInterval(intervalId3);
        }
    }, interval);
    /* --------- END ----------- */
};
// ====== LIST ITEM TO CHART PAGE END ============

// ======= TABS START ======

function openPage(pageName, elmnt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
}

document.getElementById("defaultOpen").click();

$("#defaultOpen").addClass("active-tab-81");
$(".tablink").click(function () {

    $(".tablink").removeClass("active-tab-81");
    $(this).addClass("active-tab-81");
})

// ======= TABS END ======

// ======= INNER TABS START ======

function openPage(innerpageName, elmnt) {
    var j, inner_tabcontent, inner_tablinks;
    inner_tabcontent = document.getElementsByClassName("inner-tabcontent");
    for (j = 0; j < inner_tabcontent.length; j++) {
        inner_tabcontent[j].style.display = "none";
    }
    inner_tablinks = document.getElementsByClassName("inner-tablink");
    for (j = 0; j < inner_tablinks.length; j++) {
        inner_tablinks[j].style.backgroundColor = "";
    }
    document.getElementById(innerpageName).style.display = "block";

}

$("#firstOpen").addClass("inner-active-tab-81");
$(".inner-tablink").click(function () {

    $(".inner-tablink").removeClass("inner-active-tab-81");
    $(this).addClass("inner-active-tab-81");
})

// ======= INNER TABS END ======

// ============== DISPLAY 2 SPEEDOMETER START ====================
function gotoChartPage2() {
    $(".progressmeter").each(function () {
        let $bar = $(this).find(".bar");
        let $val = $(this).find(".progress-value");
        let perc = parseInt($val.text());
        $({
            p: 0
        }).animate({
            p: perc
        }, {
            duration: 3000,
            easing: "swing",
            step: function (p) {
                $bar.css({
                    transform: "rotate(" + (45.00 + (p * 1.8)) + "deg)", // 100%=180° so: ° = % * 1.8
                    // 45 is to add the needed rotation to have the green borders at the bottom
                });
                $val.text(p | 0);
            }
        });
    });
}

// ============== DISPLAY 2 SPEEDOMETER END ====================

// ================ DISPLAY 3 CHART PAGE START ================

// ================ DISPLAY 3 CHART PAGE END ================


// ================ DISPLAY 4 TABLE DATA START ================
var array = [
    ["2019", "100%", "-58.63%", "15.14%", "54.1%", "-76.32%", "24.08%", "23.64%", "-92.86%", "53.59%", "49.4%",
        "-56.54%", "87.45%"
    ],
    ["2018", "-100%", "58.63%", "-15.14%", "54.1%", "-76.32%", "24.08%", "-23.64%", "92.86%", "-53.59%", "-49.4%",
        "56.54%", "-87.45%"
    ],
    ["2017", "100%", "-58.63%", "15.14%", "", "76.32%", "24.08%", "23.64%", "-92.86%", "53.59%", "49.4%", "-56.54%",
        "87.45%"
    ],
    ["2016", "-100%", "58.63%", "-15.14%", "54.1%", "-76.32%", "24.08%", "-23.64%", "", "-53.59%", "49.4%",
        "-56.54%", "-87.45%"
    ],
    ["2015", "100%", "-58.63%", "15.14%", "-54.1%", "76.32%", "-24.08%", "23.64%", "-92.86%", "53.59%", "49.4%",
        "56.54%", "-87.45%"
    ],
    ["2014", "-100%", "58.63%", "-15.14%", "54.1%", "-76.32%", "24.08%", "-23.64%", "92.86%", "-53.59%", "-49.4%",
        "56.54%", "-87.45%"
    ],
    ["2013", "-100%", "-58.63%", "15.14%", "-54.1%", "76.32%", "24.08%", "23.64%", "-92.86%", "53.59%", "49.4%",
        "-56.54%", "87.45%"
    ],
    ["2012", "", "58.63%", "-15.14%", "-54.1%", "-76.32%", "24.08%", "-23.64%", "92.86%", "-53.59%", "-49.4%",
        "56.54%", "-87.45%"
    ],
    ["2011", "100%", "-58.63%", "-15.14%", "-54.1%", "-76.32%", "24.08%", "23.64%", "-92.86%", "53.59%", "49.4%",
        "-56.54%", "87.45%"
    ],
    ["2010", "-100%", "-58.63%", "15.14%", "54.1%", "76.32%", "-24.08%", "23.64%", "92.86%", "-53.59%", "-49.4%",
        "56.54%", "-87.45%"
    ],
    ["2009", "100%", "58.63%", "15.14%", "54.1%", "-76.32%", "24.08%", "-23.64%", "-92.86%", "53.59%", "49.4%",
        "56.54%", "-87.45%"
    ],
    ["2008", "100%", "58.63%", "-15.14%", "54.1%", "76.32%", "-24.08%", "23.64%", "92.86%", "-53.59%", "-49.4%",
        "56.54%", "-87.45%"
    ],
    ["2007", "-100%", "-58.63%", "15.14%", "-54.1%", "76.32%", "24.08%", "23.64%", "-92.86%", "53.59%", "49.4%",
        "-56.54%", "87.45%"
    ],
    ["2006", "100%", "58.63%", "-15.14%", "54.1%", "-76.32%", "-24.08%", "-23.64%", "-92.86%", "-53.59%", "-49.4%",
        "56.54%", "-87.45%"
    ],
    ["2005", "-100%", "58.63%", "15.14%", "54.1%", "-76.32%", "24.08%", "23.64%", "92.86%", "53.59%", "49.4%",
        "56.54%", "-87.45%"
    ],
    ["2004", "-100%", "-58.63%", "15.14%", "-54.1%", "76.32%", "-24.08%", "23.64%", "-92.86%", "53.59%", "49.4%",
        "-56.54%", "87.45%"
    ],
    ["2003", "100%", "58.63%", "-15.14%", "54.1%", "", "-24.08%", "-23.64%", "-92.86%", "-53.59%", "-49.4%",
        "56.54%", "-87.45%"
    ],
    ["2002", "100%", "-58.63%", "", "36.1%", "-76.32%", "24.08%", "23.64%", "92.86%", "53.59%", "-49.4%",
        "56.54%", "-87.45%"
    ],
    ["2001", "-100%", "58.63%", "-15.14%", "-54.1%", "-76.32%", "-24.08%", "-23.64%", "-92.86%", "-53.59%", "49.4%",
        "56.54%", "-87.45%"
    ],
    ["2000", "-100%", "58.63%", "15.14%", "54.1%", "76.32%", "24.08%", "23.64%", "92.86%", "-53.59%", "-49.4%",
        "56.54%", "-87.45%"
    ]
],
    display_data_table = document.getElementById("display-data-table");

for (var dt = 0; dt < array.length; dt++) {
    // create a new row
    var newRow = display_data_table.insertRow(display_data_table.length);
    for (var idt = 0; idt < array[dt].length; idt++) {
        // create a new cell
        var cell = newRow.insertCell(idt);

        // add value to the cell
        cell.innerHTML = array[dt][idt];
    }
}

var cell = $('#display-data-table td');

cell.each(function () {

    var cell_mainvalue = $(this).html(); //get the value
    cell_value = parseFloat(cell_mainvalue) / 100.0;

    if (cell_value < 0) //if then for if value is negative
        $(this).css({
            'background': '#FD0000'
        }); // changes td to red.

    if (cell_value > 0) //if then for if value is negative
        $(this).css({
            'background': '#00B903'
        }); // changes td to red.

    if (cell_mainvalue === "") //if then for if value is negative
        $(this).css({
            'background': '#B8B8B8'
        }); // changes td to red.

    if (cell_mainvalue > 1000)
        $(this).css({
            'background': '#FBFBFD'
        }); // changes td to red.
});

// ================ DISPLAY 4 TABLE DATA END ================


// ================ ARROW SCROLL BAR START ================

$(document).ready(function () {
    const table001122 = document.querySelector("#table001122");
    $("#Display5 .right-slider5").click(function () {
        $("#table001122").animate({
            scrollLeft: table001122.scrollLeft + 250,
        },
            250
        );
    });
    $("#Display5 .left-slider5").click(function () {
        $("#table001122").animate({
            scrollLeft: table001122.scrollLeft - 250,
        },
            250
        );
    });
});

// ///////////////////////////////////////////
$(document).ready(function () {
    const chartAreaWrapper = document.querySelector(".chartAreaWrapper");
    $(".chart_main_box .right-slider5").click(function () {
        $(".chartAreaWrapper").animate({
            scrollLeft: chartAreaWrapper.scrollLeft + 250,
        },
            250
        );
    });
    $(".chart_main_box .left-slider5").click(function () {
        $(".chartAreaWrapper").animate({
            scrollLeft: chartAreaWrapper.scrollLeft - 250,
        },
            250
        );
    });
});


// ///////////////////////////////////////////
$(document).ready(function () {
    const mytablesty12 = document.querySelector(".mytablesty12");
    $("#style1Table .right-slider5").click(function () {
        $(".mytablesty12").animate({
            scrollLeft: mytablesty12.scrollLeft + 800,
        },
            0
        );
    }).dblclick(function () {
        $(".mytablesty12").animate({
            scrollLeft: mytablesty12.scrollLeft + 800,
        },
            0
        );
    });

    $("#style1Table .left-slider5").click(function () {
        $(".mytablesty12").animate({
            scrollLeft: mytablesty12.scrollLeft - 800,
        },
            0
        );
    }).dblclick(function () {
        $(".mytablesty12").animate({
            scrollLeft: mytablesty12.scrollLeft - 800,
        },
            0
        );
    });
});

// ================ ARROW SCROLL BAR END ================

// ============== DISPLAY 5 SHOW DATE/TIME START =========

newdate5 = new Date();
y = newdate5.getFullYear();
m = newdate5.getMonth() + 1;
d = newdate5.getDate();

let dis_date = document.querySelectorAll(".dis_date");

dis_date.forEach((element) => {

    element.innerHTML = d + "/" + m + "/" + y;

});


window.onload = function () {
    DisplayCurrentTime();
};

function DisplayCurrentTime() {
    var date555 = new Date();
    var hours555 = date555.getHours() > 12 ? date555.getHours() - 12 : date555.getHours();
    var am_pm = date555.getHours() >= 12 ? "PM" : "AM";
    hours555 = hours555 < 10 ? "0" + hours555 : hours555;
    var minutes555 = date555.getMinutes() < 10 ? "0" + date555.getMinutes() : date555.getMinutes();
    var sec555 = date555.getSeconds() < 10 ? "0" + date555.getSeconds() : date555.getSeconds();

    time555 = hours555 + ":" + minutes555 + ":" + sec555 + " " + am_pm;
    time222 = hours555 + ":" + minutes555 + " " + am_pm;

    let dis_time = document.querySelectorAll(".dis_time");
    let dis_time22 = document.querySelectorAll(".dis_time22");

    dis_time.forEach((element) => {

        element.innerHTML = time555;
    });
    dis_time22.forEach((element) => {

        element.innerHTML = time222;
    });
};
// ============== DISPLAY 5 SHOW DATE/TIME END =========


// ============== DISPLAY 5 PROGRESS START =========
// the range of the value is 30 to -30
var pos_value_sub1 = 20.17;
var neg_value_sub1 = 0;

var pos_value_sub2 = 1.09;
var neg_value_sub2 = 0;

var pos_value_sub3 = 2.4;
var neg_value_sub3 = 0;

var pos_value_sub4 = 9.31;
var neg_value_sub4 = 0;

var pos_value_sub5 = 0;
var neg_value_sub5 = -22.49;

var pos_value_sub6 = 0;
var neg_value_sub6 = -1.75;

var pos_value_sub7 = 12.5;
var neg_value_sub7 = 0;

var pos_value_sub8 = 0;
var neg_value_sub8 = -17.36;

var pos_value_sub9 = 0;
var neg_value_sub9 = -4.95;

var pos_value_sub10 = 22.55;
var neg_value_sub10 = 0;



pos_value1 = pos_value_sub1 * 3.34;
pos_value2 = pos_value_sub2 * 3.34;
pos_value3 = pos_value_sub3 * 3.34;
pos_value4 = pos_value_sub4 * 3.34;
pos_value5 = pos_value_sub5 * 3.34;
pos_value6 = pos_value_sub6 * 3.34;
pos_value7 = pos_value_sub7 * 3.34;
pos_value8 = pos_value_sub8 * 3.34;
pos_value9 = pos_value_sub9 * 3.34;
pos_value10 = pos_value_sub10 * 3.34;

neg_value1 = -neg_value_sub1 * 3.34;
neg_value2 = -neg_value_sub2 * 3.34;
neg_value3 = -neg_value_sub3 * 3.34;
neg_value4 = -neg_value_sub4 * 3.34;
neg_value5 = -neg_value_sub5 * 3.34;
neg_value6 = -neg_value_sub6 * 3.34;
neg_value7 = -neg_value_sub7 * 3.34;
neg_value8 = -neg_value_sub8 * 3.34;
neg_value9 = -neg_value_sub9 * 3.34;
neg_value10 = -neg_value_sub10 * 3.34;

var dis5_pos_value1 = pos_value1 * 0.78;
var dis5_pos_value2 = pos_value2 * 0.7;
var dis5_pos_value3 = pos_value3 * 0.7;
var dis5_pos_value4 = pos_value4 * 0.7;
var dis5_pos_value5 = pos_value5 * 0.7;
var dis5_pos_value6 = pos_value6 * 0.7;
var dis5_pos_value7 = pos_value7 * 0.7;
var dis5_pos_value8 = pos_value8 * 0.7;
var dis5_pos_value9 = pos_value9 * 0.7;
var dis5_pos_value10 = pos_value10 * 0.78;

var dis5_neg_value1 = neg_value1 * 1.11;
var dis5_neg_value2 = neg_value2 * 1.11;
var dis5_neg_value3 = neg_value3 * 1.11;
var dis5_neg_value4 = neg_value4 * 1.11;
var dis5_neg_value5 = neg_value5 * 1.11;
var dis5_neg_value6 = neg_value6 * 1.11;
var dis5_neg_value7 = neg_value7 * 1.11;
var dis5_neg_value8 = neg_value8 * 1.11;
var dis5_neg_value9 = neg_value9 * 1.11;
var dis5_neg_value10 = neg_value10 * 1.11;

if (neg_value_sub1 <= -25) {
    var dis5_neg_value1 = neg_value1 * .98;
}
if (neg_value_sub2 <= -25) {
    var dis5_neg_value2 = neg_value2 * .98;
}
if (neg_value_sub3 <= -25) {
    var dis5_neg_value3 = neg_value3 * .98;
}
if (neg_value_sub4 <= -25) {
    var dis5_neg_value4 = neg_value4 * .98;
}
if (neg_value_sub5 <= -25) {
    var dis5_neg_value5 = neg_value5 * .98;
}
if (neg_value_sub6 <= -25) {
    var dis5_neg_value6 = neg_value6 * .98;
}
if (neg_value_sub7 <= -25) {
    var dis5_neg_value7 = neg_value7 * .98;
}
if (neg_value_sub8 <= -25) {
    var dis5_neg_value8 = neg_value8 * .98;
}
if (neg_value_sub9 <= -25) {
    var dis5_neg_value9 = neg_value9 * .98;
}
if (neg_value_sub10 <= -25) {
    var dis5_neg_value10 = neg_value10 * .98;
}

// ==============================================

if (pos_value_sub1 > 0) {
    document.querySelector(".dis5_pos_value1").innerHTML = pos_value_sub1 + "%";
} else if (neg_value_sub1 < 0) {
    document.querySelector(".dis5_neg_value1").innerHTML = neg_value_sub1 + "%";
} else {
    document.querySelector(".dis5_pos_value1").innerHTML = "";
    document.querySelector(".dis5_neg_value1").innerHTML = "";
}
// =======================
if (pos_value_sub2 > 0) {
    document.querySelector(".dis5_pos_value2").innerHTML = pos_value_sub2 + "%";
} else if (neg_value_sub2 < 0) {
    document.querySelector(".dis5_neg_value2").innerHTML = neg_value_sub2 + "%";
} else {
    document.querySelector(".dis5_pos_value2").innerHTML = "";
    document.querySelector(".dis5_neg_value2").innerHTML = "";
}
// =======================
if (pos_value_sub3 > 0) {
    document.querySelector(".dis5_pos_value3").innerHTML = pos_value_sub3 + "%";
} else if (neg_value_sub3 < 0) {
    document.querySelector(".dis5_neg_value3").innerHTML = neg_value_sub3 + "%";
} else {
    document.querySelector(".dis5_pos_value3").innerHTML = "";
    document.querySelector(".dis5_neg_value3").innerHTML = "";
}
// =======================
if (pos_value_sub4 > 0) {
    document.querySelector(".dis5_pos_value4").innerHTML = pos_value_sub4 + "%";
} else if (neg_value_sub4 < 0) {
    document.querySelector(".dis5_neg_value4").innerHTML = neg_value_sub4 + "%";
} else {
    document.querySelector(".dis5_pos_value4").innerHTML = "";
    document.querySelector(".dis5_neg_value4").innerHTML = "";
}
// =======================
if (pos_value_sub5 > 0) {
    document.querySelector(".dis5_pos_value5").innerHTML = pos_value_sub5 + "%";
} else if (neg_value_sub5 < 0) {
    document.querySelector(".dis5_neg_value5").innerHTML = neg_value_sub5 + "%";
} else {
    document.querySelector(".dis5_pos_value5").innerHTML = "";
    document.querySelector(".dis5_neg_value5").innerHTML = "";
}
// =======================
if (pos_value_sub6 > 0) {
    document.querySelector(".dis5_pos_value6").innerHTML = pos_value_sub6 + "%";
} else if (neg_value_sub6 < 0) {
    document.querySelector(".dis5_neg_value6").innerHTML = neg_value_sub6 + "%";
} else {
    document.querySelector(".dis5_pos_value6").innerHTML = "";
    document.querySelector(".dis5_neg_value6").innerHTML = "";
}
// =======================
if (pos_value_sub7 > 0) {
    document.querySelector(".dis5_pos_value7").innerHTML = pos_value_sub7 + "%";
} else if (neg_value_sub7 < 0) {
    document.querySelector(".dis5_neg_value7").innerHTML = neg_value_sub7 + "%";
} else {
    document.querySelector(".dis5_pos_value7").innerHTML = "";
    document.querySelector(".dis5_neg_value7").innerHTML = "";
}
// =======================
if (pos_value_sub8 > 0) {
    document.querySelector(".dis5_pos_value8").innerHTML = pos_value_sub8 + "%";
} else if (neg_value_sub8 < 0) {
    document.querySelector(".dis5_neg_value8").innerHTML = neg_value_sub8 + "%";
} else {
    document.querySelector(".dis5_pos_value8").innerHTML = "";
    document.querySelector(".dis5_neg_value8").innerHTML = "";
}
// =======================
if (pos_value_sub9 > 0) {
    document.querySelector(".dis5_pos_value9").innerHTML = pos_value_sub9 + "%";
} else if (neg_value_sub9 < 0) {
    document.querySelector(".dis5_neg_value9").innerHTML = neg_value_sub9 + "%";
} else {
    document.querySelector(".dis5_pos_value9").innerHTML = "";
    document.querySelector(".dis5_neg_value9").innerHTML = "";
}
// =======================
if (pos_value_sub10 > 0) {
    document.querySelector(".dis5_pos_value10").innerHTML = pos_value_sub10 + "%";
} else if (neg_value_sub10 < 0) {
    document.querySelector(".dis5_neg_value10").innerHTML = neg_value_sub10 + "%";
} else {
    document.querySelector(".dis5_pos_value10").innerHTML = "";
    document.querySelector(".dis5_neg_value10").innerHTML = "";
}
// ==================================================


document.querySelector(".dis5_progress_pos1").style.height = pos_value1 + "%";
document.querySelector(".dis5_progress_neg1").style.height = neg_value1 + "%";
document.querySelector(".dis5_pos_value1").style.bottom = dis5_pos_value1 + "%";
document.querySelector(".dis5_neg_value1").style.top = dis5_neg_value1 + "%";

// ====================
document.querySelector(".dis5_progress_pos2").style.height = pos_value2 + "%";
document.querySelector(".dis5_progress_neg2").style.height = neg_value2 + "%";
document.querySelector(".dis5_pos_value2").style.bottom = dis5_pos_value2 + "%";
document.querySelector(".dis5_neg_value2").style.top = dis5_neg_value2 + "%";
// ====================
document.querySelector(".dis5_progress_pos3").style.height = pos_value3 + "%";
document.querySelector(".dis5_progress_neg3").style.height = neg_value3 + "%";
document.querySelector(".dis5_pos_value3").style.bottom = dis5_pos_value3 + "%";
document.querySelector(".dis5_neg_value3").style.top = dis5_neg_value3 + "%";
// ====================
document.querySelector(".dis5_progress_pos4").style.height = pos_value4 + "%";
document.querySelector(".dis5_progress_neg4").style.height = neg_value4 + "%";
document.querySelector(".dis5_pos_value4").style.bottom = dis5_pos_value4 + "%";
document.querySelector(".dis5_neg_value4").style.top = dis5_neg_value4 + "%";
// ====================
document.querySelector(".dis5_progress_pos5").style.height = pos_value5 + "%";
document.querySelector(".dis5_progress_neg5").style.height = neg_value5 + "%";
document.querySelector(".dis5_pos_value5").style.bottom = dis5_pos_value5 + "%";
document.querySelector(".dis5_neg_value5").style.top = dis5_neg_value5 + "%";
// ====================
document.querySelector(".dis5_progress_pos6").style.height = pos_value6 + "%";
document.querySelector(".dis5_progress_neg6").style.height = neg_value6 + "%";
document.querySelector(".dis5_pos_value6").style.bottom = dis5_pos_value6 + "%";
document.querySelector(".dis5_neg_value6").style.top = dis5_neg_value6 + "%";
// ====================
document.querySelector(".dis5_progress_pos7").style.height = pos_value7 + "%";
document.querySelector(".dis5_progress_neg7").style.height = neg_value7 + "%";
document.querySelector(".dis5_pos_value7").style.bottom = dis5_pos_value7 + "%";
document.querySelector(".dis5_neg_value7").style.top = dis5_neg_value7 + "%";
// ====================
document.querySelector(".dis5_progress_pos8").style.height = pos_value8 + "%";
document.querySelector(".dis5_progress_neg8").style.height = neg_value8 + "%";
document.querySelector(".dis5_pos_value8").style.bottom = dis5_pos_value8 + "%";
document.querySelector(".dis5_neg_value8").style.top = dis5_neg_value8 + "%";
// ====================
document.querySelector(".dis5_progress_pos9").style.height = pos_value9 + "%";
document.querySelector(".dis5_progress_neg9").style.height = neg_value9 + "%";
document.querySelector(".dis5_pos_value9").style.bottom = dis5_pos_value9 + "%";
document.querySelector(".dis5_neg_value9").style.top = dis5_neg_value9 + "%";
// ====================
document.querySelector(".dis5_progress_pos10").style.height = pos_value10 + "%";
document.querySelector(".dis5_progress_neg10").style.height = neg_value10 + "%";
document.querySelector(".dis5_pos_value10").style.bottom = dis5_pos_value10 + "%";
document.querySelector(".dis5_neg_value10").style.top = dis5_neg_value10 + "%";



// ============== DISPLAY 5 PROGRESS END =========

// ============== STYLE 1 STYLE 2 START ==============


// PROGRESS BAR START
var style12_progress = 75;

document.querySelector("#syle12_section .inner-progress-style12").style.width = style12_progress + "%";
document.querySelector(".tab_filter-style12 .progress-style12 p").innerHTML = "Progress " + style12_progress + "%";
// PROGRESS BAR END

// CLICL TO TOGGLE STYLE1 & STYLE2 START =====
$("#style2Con").addClass("displayNone");
$(".style1-box").addClass("clickstylebg");
$(".style2-box").addClass("clickstylebrdr");

$(".style1-box").click(function () {
    $("#style1Table").removeClass("displayNone");
    $("#style2Con").addClass("displayNone");

    $(".style1-box").addClass("clickstylebg");
    $(".style1-box").removeClass("clickstylebrdr");

    $(".style2-box").addClass("clickstylebrdr");
    $(".style2-box").removeClass("clickstylebg");
});

$(".style2-box").click(function () {
    $("#style1Table").addClass("displayNone");
    $("#style2Con").removeClass("displayNone");

    $(".style2-box").addClass("clickstylebg");
    $(".style2-box").removeClass("clickstylebrdr");

    $(".style1-box").addClass("clickstylebrdr");
    $(".style1-box").removeClass("clickstylebg");
});


// CLICL TO TOGGLE STYLE1 & STYLE2 END =====

// ============== STYLE 1 STYLE 2 END ==============

// X CLICK TO REMOVE COLUMN START ==============

$("#resizable554 th").click(function (e) {
    let target = e.target;
    let index = $(this).index() + 1;
    if (target.tagName === "I") {
        target = target.parentNode;
    }
    let regex = /cross/g;
    let regexD = /drop-filter/g;
    if (target.tagName === "DIV" && regex.test(target.id)) {
        $(`#resizable554 th:nth-child(${index})`).addClass("th-dis-none");
        $(`#resizable554 td:nth-child(${index})`).addClass("th-dis-none");
        manResTableRender();
    } else if (target.tagName === "DIV" && regexD.test(target.className)) {
        let dataP = $(`#resizable554 td:nth-child(${index}) .mr-tableData`);
        let headingPop = $(`#resizable554 th:nth-child(${index})`)[0].textContent;

        // this code add the down-animation-icon to the drop filter
        $(`#resizable554 th:nth-child(${index}) .drop-filter .fa-caret-down`).addClass("down-animation-icon");

        $("#col8Filter #tableHeaderPop").html(headingPop);
        let targetModal = $("#col8Filter #checkbox-table-first tbody");
        const dataC = new Set();
        for (let i = 0; i < dataP.length; i++) {
            dataC.add(dataP[i].textContent);
        }
        let tableTr = "";
        for (const item of dataC) {
            tableTr +=
                `<tr>
                <td>
                    <div class="popup__checkbox__page__toggle">
                        <label class="popup__checkbox__toggle">
                            <input class="popup__checkbox__toggle__input" type="checkbox">
                            <span class="popup__checkbox__toggle__label">
                                <span class="popup__checkbox__toggle__text">${item}</span>
                            </span>
                        </label>
                    </div>
                </td>
            </tr>`;
        }
        targetModal.html(tableTr);
        $("#col8Filter .modal-dialog").css({
            top: ((e.clientY) + 20),
            left: ((e.clientX) - 240)
        });
        $("#col8Filter .modal-dialog .table-header-click-popup").css({
            "margin-top": "0px"
        });
    }
});

// ======== STYLE 2
// $("#cross20").click(function () {
//     $(".cross-table-1 th:nth-child(1)").addClass("th-dis-none");
//     $(".cross-table-1 td:nth-child(1)").addClass("th-dis-none");
// });


// X CLICK TO REMOVE COLUMN END ==============

// TABLE RESIZEABLE START ===////////////////===
$(document).ready(function () {
    let thHeight = $("table#resizable554 th:first").height();
    $("table#resizable554 th").resizable({
        handles: "e",
        minHeight: thHeight,
        maxHeight: thHeight,
        minWidth: 40,
        resize: function (event, ui) {
            let sizerID = "." + event.target.classList[0] + "-sizer";
            let valueSize = ui.size.width;
            $(sizerID).width(valueSize);
            let resizer = event.target.classList[0] + "-resizer";
            let shrinkWidth = `#resizable554 tbody .${resizer}`;
            // console.log(shrinkWidth);
            // $(shrinkWidth).width(valueSize);
            // // $(shrinkWidth).width(valueSize - 24);
            // $(shrinkWidth).css({
            //     "min-width": `${valueSize-20}px`
            // });
            var gettingWidth = parseInt($(sizerID).css('width'), 10);
            // let shrinkWidth = `#resizable554 tbody ${sizerID}`;
            $(shrinkWidth).width(gettingWidth + "px");
            console.log(shrinkWidth);
            console.log(gettingWidth);
        }
    });
})
// TABLE RESIZEABLE END ===////////////////===

// TABLE RESIZEABLE STYLE 2 START ===////////////////===
$(document).ready(function () {
    var thHeight = $("table.cross-table-1 th:first").height();
    $("table.cross-table-1 th").resizable({
        handles: "e",
        minHeight: thHeight,
        maxHeight: thHeight,
        minWidth: 40,
        resize: function (event, ui) {
            var sizerID = "#" + $(event.target).attr("id") + "-sizer";
            $(sizerID).width(ui.size.width);
        }
    });
})


// TABLE RESIZEABLE END ===////////////////===
$("table#resizable554").dragableColumns();
// Drag and Drop END

// DRAG AND DROP START FILTER
//Left side drag
$(function () {
    $("#my-drag-list").sortable();
    $("#my-drag-list").disableSelection();
});

//----------====== Manage result filter modal ======--------------------
let dataFilterModal = [];
for (let i = 1; i <= 100; i++) {
    dataFilterModal.push(`Column ${i}`);
}
let my_drag_list = document.querySelector("#my-drag-list");
dataFilterModal.forEach((modalData) => {
    let modalElement = `<li>
    <div class="cursor-box">
        <span>|||</span>
    </div>
    <div class="name-box">
        <span>${modalData}</span>
    </div>
    </li>`;
    my_drag_list.innerHTML += modalElement;
})
//----------====== Manage result filter modal End ======----------------

// ---------- ======= Double Click to ADD or REMOVE Start ======= -------------
// let manageResultTable = [];

function manResTableRender() {
    let tabHD = $("#resizable554 thead th");
    let len = tabHD.length;
    let htmlTableR = "";
    let htmlTableL = "";
    for (let i = 2; i < len; i++) {
        let className = tabHD[i].className.match(/column-header-\d+/g)[0];
        let pos = className.match(/\d+/g)[0];
        let _id = "res-id-table-" + pos;
        let content = tabHD[i].textContent.trim();
        // manageResultTable.push({
        //     id: _id,
        //     name: content
        // });
        let regex = /th-dis-none/g;
        if (regex.test(tabHD[i].className)) {
            htmlTableL += `<tr id="${_id}" ondblclick="dblclickResMove(this)" onclick="clickAddClass(this)">
                <td>${content}</td>
            </tr>`;
        } else {
            htmlTableR += `<tr id="${_id}" ondblclick="dblclickResMove(this)" onclick="clickAddClass(this)">
                <td>${content}</td>
            </tr>`;
        }
    }
    $("#man-res-opt-data-table-right").html(htmlTableR);
    $("#man-res-opt-data-table-left").html(htmlTableL);
}
manResTableRender();

function dblclickResMove(e) {
    let _id = $(e).parent().attr("id");
    let index = $(e).attr("id").match(/\d+/g)[0];
    if (_id == "man-res-opt-data-table-left") {
        $(e).remove();
        $(`#resizable554 th.column-header-${index}`).removeClass("th-dis-none");
        $(`#resizable554 td.column-header-${index}`).removeClass("th-dis-none");
        manResTableRender();
    }
    else if (_id == "man-res-opt-data-table-right") {
        $(e).remove();
        $(`#resizable554 th.column-header-${index}`).addClass("th-dis-none");
        $(`#resizable554 td.column-header-${index}`).addClass("th-dis-none");
        manResTableRender();
    }
}

function moveResLeftToRight() {
    let tr = $("#man-res-opt-data-table-left tr.mark-table-data");
    let len = tr.length;
    for (let i = 0; i < len; i++) {
        let index = $(tr[i]).attr("id").match(/\d+/g)[0];
        $(tr[i]).remove();
        $(`#resizable554 th.column-header-${index}`).removeClass("th-dis-none");
        $(`#resizable554 td.column-header-${index}`).removeClass("th-dis-none");
        manResTableRender();
    }
}

function moveResRightToLeft() {
    let tr = $("#man-res-opt-data-table-right tr.mark-table-data");
    let len = tr.length;
    for (let i = 0; i < len; i++) {
        let index = $(tr[i]).attr("id").match(/\d+/g)[0];
        $(tr[i]).remove();
        $(`#resizable554 th.column-header-${index}`).addClass("th-dis-none");
        $(`#resizable554 td.column-header-${index}`).addClass("th-dis-none");
        manResTableRender();
    }
}

function ResorderUp() {
    let row = $("#man-res-opt-data-table-right tr.mark-table-data");
    let rowFirst = $("#man-res-opt-data-table-right tr")[0];
    if (rowFirst != row[0]) {
        row.each(function () {
            let rw = $(this).closest("tr.mark-table-data");
            let index = $(rw).attr("id").match(/\d+/g)[0];
            rw.insertBefore(rw.prev());
            columnMove(index, "up");
        });
    }
}
function ResorderDown() {
    let row = $("#man-res-opt-data-table-right tr.mark-table-data");
    row.each(function () {
        let rw = $(this).closest("tr.mark-table-data");
        let index = $(rw).attr("id").match(/\d+/g)[0];
        for (let i = 0; i < row.length; i++) {
            rw.insertAfter(rw.next());
            columnMove(index, "down");
        }
    });
}
function findVisible(element, pos) {
    let regex = /th-dis-none/g;
    if (pos == "prev" && regex.test(element.attr("class"))) {
        return findVisible(element.prev(), "prev");
    } else if (pos == "next" && regex.test(element.attr("class"))) {
        return findVisible(element.next(), "next");
    }
    else return element;
}
function columnMove(index, direc) {
    let tHead = $(`#resizable554 th.column-header-${index}`);
    let tBody = $(`#resizable554 td.column-header-${index}`);
    let len = tBody.length;
    if (direc == "up") {
        let eleH = findVisible(tHead.prev(), "prev");
        console.log(eleH);
        tHead.insertBefore(eleH);
        for (let i = 0; i < len; i++) {
            let tbCell = $(tBody[i]);
            let eleC = findVisible(tbCell.prev(), "prev");
            tbCell.insertBefore(eleC);
        }
    } else if (direc == "down") {
        let eleH = findVisible(tHead.next(), "next");
        console.log(eleH);
        tHead.insertAfter(eleH);
        for (let i = 0; i < len; i++) {
            let tbCell = $(tBody[i]);
            let eleC = findVisible(tbCell.next(), "next");
            tbCell.insertAfter(eleC);
        }
    }
}
// ---------- ======= Double Click to ADD or REMOVE End ======= -------------

// ----------- Manage Result Filter Start ------------------
function resetResFilter(e) {
    let inpBox = $(e).parent().parent()
        .children(".outer-data7")
        .find("div.valdata-box div.valinput input.myzap-input");
    inpBox.val("");
}
// ----------- Manage Result Filter End --------------------

// #column-header-3 .drop-filter
// $("#column-header-3 .drop-filter").click( function(event) {
//     $("#col8Filter .modal-dialog").css({
//         top: ((event.clientY) + 15), 
//         left: ((event.clientX) - 240)
//     });
//     // console.log(`Clicked and Top(Page-Y) : ${event.pageY} Left(Page-X) : ${event.pageX} `);
//     // console.log(`Clicked and Top(client-Y) : ${event.clientY} Left(client-X) : ${event.clientX} `);
//     // console.log(`Clicked and Top(screen-Y) : ${event.screenY} Left(screen-X) : ${event.screenX} `);
//     // console.log(`Clicked and Top(offset-Y) : ${event.offsetY} Left(offset-X) : ${event.offsetX} `);
//     // var x = e.clientX,
//     // var y = e.clientY;
//     // console.log("Top: " + top + " and Left: " + left);
// });

$('table#resizable554').on('scroll', function () {
    $("table#resizable554 > *").width($("table#resizable554").width() + $("table#resizable554").scrollLeft());
});

function IconModalClick() {
    let viewModalList = document.getElementsByClassName('view-modal-click');
    for (let i = 0; i < viewModalList.length; i++) {
        viewModalList[i].addEventListener("click", function (event) {
            $("#viewtwo .modal-dialog").css({
                top: ((event.clientY) + 20),
                left: ((event.clientX) - 125)
            });
        });
    }

    let rowModalClick = document.getElementsByClassName('row-modal-click');
    for (let i = 0; i < rowModalClick.length; i++) {
        rowModalClick[i].addEventListener("click", function (event) {
            $("#rowdetails .modal-dialog").css({
                top: ((event.clientY) + 20),
                left: ((event.clientX) - 125)
            });
        });
    }

    let noteModalClick = document.getElementsByClassName('note-modal-click');
    for (let i = 0; i < noteModalClick.length; i++) {
        noteModalClick[i].addEventListener("click", function (event) {
            $("#noteswindow .modal-dialog").css({
                top: ((event.clientY) + 30),
                left: ((event.clientX) - 150)
            });
        });
    }
}

function Style2DropFilterPos() {
    let style2FilterPosition = document.getElementsByClassName('style2-filterPosition');
    for (let i = 0; i < style2FilterPosition.length; i++) {
        style2FilterPosition[i].addEventListener("click", function (event) {
            $("#col8Filter .modal-dialog").css({
                top: ((event.clientY) + 20),
                left: ((event.clientX) - 240),
                height: 350
            });
            $("#col8Filter .modal-dialog .table-header-click-popup").css({
                "margin-top": "-15px"
            });
        });
    }
}

// This Function will trigger when col8Filter is closed
$('#col8Filter').on('hidden.bs.modal', function (e) {
    $("i.fa-caret-down.down-animation-icon").removeClass("down-animation-icon");
});
$('#dropBtnModal').on('hidden.bs.modal', function (e) {
    $("i.fa-caret-down.down-animation-icon").removeClass("down-animation-icon");
});
