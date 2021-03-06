/**
* 判断年份是否为润年
* @param {Number} year
*/
function isLeapYear(year) {
    return (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0);
}

/**
* 获取某一年份的某一月份的天数
*
* @param {Number} year
* @param {Number} month
*/
function getMonthDays(year, month) {
   return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month] || (isLeapYear(year) ? 29 :28);
}

// /**有错误
//  * 获取某年的某天是第几周
//  * @param {Number} y
//  * @param {Number} m
//  * @param {Number} d
//  * @returns {Number}
//  */
// function getWeekNumber(y, m, d) {
//     var now = new Date(y, m - 1, d),
//         year = now.getFullYear(),
//         month = now.getMonth(),
//         days = now.getDate();
//     //那一天是那一年中的第多少天
//     for (var i = 0; i < month; i++) {
//         days += getMonthDays(year, i);
//     }
//     //那一年第一天是星期几
//     var yearFirstDay = new Date(year, 0, 1).getDay() || 7;
//
//     var week = null;
//     if (yearFirstDay == 1) {
//         week = Math.ceil(days / yearFirstDay);
//     } else {
//         days -= (7 - yearFirstDay + 1);
//         week = Math.ceil(days / 7) + 1;
//     }
//
//     return week;
// }


//获取日期的周是某年的
function GetWeekInYear(dateobj,weeknum) {
	var year;
	if(weeknum>52)
	{
		month = dateobj.getMonth();
		//alert(month);
		if(month==11)
		{
			year = dateobj.getFullYear();
		}
		else
		{
			year = dateobj.getFullYear()-1;
		}
	}
	else
	{
		year = dateobj.getFullYear();
	}
	return year;
}

//获取日期为某年的第几周
function GetWeekIndex(dateobj) {
　 var firstDay = GetFirstWeekBegDay(dateobj.getFullYear());
　 if (dateobj < firstDay) {
　　 firstDay = GetFirstWeekBegDay(dateobj.getFullYear() - 1);
　 }
　 d = Math.floor((dateobj.valueOf() - firstDay.valueOf()) / 86400000);
　 return Math.floor(d / 7) + 1;　
}

//获取某年的第一天
function GetFirstWeekBegDay(year) {
　 var tempdate = new Date(year, 0, 1);
　 var temp = tempdate.getDay();
　 if (temp == 1){
　　　 return tempdate;
　 }
　 temp = (temp == 0 ? 7 : temp);
　 tempdate = tempdate.setDate(tempdate.getDate() + (8 - temp));
　 return new Date(tempdate);　
}

/**
 *格式化日期
 */
function getNowFormatDate(theDate) {
    var day = theDate;
    var Year = 0;
    var Month = 0;
    var Day = 0;
    var CurrentDate = "";
    // 初始化时间
    Year = day.getFullYear(); // ie火狐下都可以
    Month = day.getMonth() + 1;
    Day = day.getDate();
    CurrentDate += Year + "-";
    if (Month >= 10) {
        CurrentDate += Month + "-";
    } else {
        CurrentDate += "0" + Month + "-";
    }
    if (Day >= 10) {
        CurrentDate += Day;
    } else {
        CurrentDate += "0" + Day;
    }
    return CurrentDate;
}

/**
 * 获取某年第几周的日期范围
 */
function getDateRange(_year, _week) {
    var beginDate;
    var endDate;
    if (_year == null || _year == '' || _week == null || _week == '') {
        return "";
    }
    beginDate = getXDate(_year, _week, 1);
    //endDate = getXDate(_year, (_week - 0 + 1), 7);
    endDate = getXDate(_year, _week, 7);
    return getNowFormatDate(beginDate) + " 至 " + getNowFormatDate(endDate);
}

/**
 * 取得某年(year)第几周(weeks)的星期几(weekDay)的日期
 */
function getXDate(year, weeks, weekDay) {
    // 用指定的年构造一个日期对象，并将日期设置成这个年的1月1日
    // 因为计算机中的月份是从0开始的,所以有如下的构造方法
    var date = new Date(year, "0", "1");

    // 取得这个日期对象 date 的长整形时间 time
    var time = date.getTime();

    // 将这个长整形时间加上第N周的时间偏移
    // 因为第一周就是当前周,所以有:weeks-1,以此类推
    // 7*24*3600000 是一星期的时间毫秒数,(JS中的日期精确到毫秒)
    time += (weeks - 1) * 7 * 24 * 3600000;
	//time += (weeks) * 7 * 24 * 3600000;

    // 为日期对象 date 重新设置成时间 time
    date.setTime(time);
    return getNextDate(date, weekDay);
}
/**
 *取得 某日期(nowDate) 所在周的星期几(weekDay)的日期
 */
function getNextDate(nowDate, weekDay) {
    // 0是星期日,1是星期一,...
    //weekDay %= 7;
    var day = nowDate.getDay();
    //var time = nowDate.getTime();
    var sub = weekDay - day;
    // if (sub <= 0) {
    //     sub += 7;
    // }
    // time += sub * 24 * 3600000;
    // nowDate.setTime(time);
	nowDate.setDate(nowDate.getDate()+sub);
    return nowDate;
}

//格式化日期：yyyy-MM-dd　　

function formatDate(date) {　　　
　 var myyear = date.getFullYear();　　
　 var mymonth = date.getMonth()+1;　　
　 var myweekday = date.getDate();　　　
　　　　
　 if(mymonth < 10){　　
　　　 mymonth = "0" + mymonth;　　
　 }　　　
　 if(myweekday < 10){　　
　　　 myweekday = "0" + myweekday;　　
　 }　　
　 return (myyear+"-"+mymonth + "-" + myweekday);
}　　　
　　
//获得某月的天数　　
function getMonthDays(paraYear,paraMonth){　　
　 var monthStartDate = new Date(paraYear, paraMonth, 1);　　　
　 var monthEndDate = new Date(paraYear, paraMonth + 1, 1);　　　
　 var　 days　 =　 (monthEndDate　 -　 monthStartDate)/(1000　 *　 60　 *　 60　 *　 24);　　　
　 return　 days;　　　
}　　　
　　
//获得某周的开始日期　　
function getWeekStartDate(paraYear,paraMonth,paraDay,paraDayOfWeek) {　　　
　 var weekStartDate = new Date(paraYear, paraMonth, paraDay + 1 - paraDayOfWeek);　　　
　 return formatDate(weekStartDate);　　
}　　　
　　
//获得某周的结束日期　　
function getWeekEndDate(paraYear,paraMonth,paraDay,paraDayOfWeek) {　　　
　 var weekEndDate = new Date(paraYear, paraMonth, paraDay + (7 - paraDayOfWeek));　　　
　 return formatDate(weekEndDate);　　
}　　　
　　
//获得某月的开始日期　　
function getMonthStartDate(paraYear,paraMonth){　　
　 var monthStartDate = new Date(paraYear, paraMonth, 1);　　　
　 return formatDate(monthStartDate);　　
}　　
　　
//获得某月的结束日期　　
function getMonthEndDate(paraYear,paraMonth){
　 var monthEndDate = new Date(paraYear,paraMonth, getMonthDays(paraYear,paraMonth));　　　
　 return formatDate(monthEndDate);　　
}　　

//获得上月开始时间　
function getLastMonthStartDate(paraYear, lastMonth){　
　 var lastMonthStartDate = new Date(paraYear, lastMonth, 1);　
　 return formatDate(lastMonthStartDate);　　
}　

//获得上月结束时间　
function getLastMonthEndDate(paraYear, lastMonth, lastMonth){　
　 var lastMonthEndDate = new Date(paraYear, lastMonth, getMonthDays(lastMonth));　
　 return formatDate(lastMonthEndDate);　　
}　
　　
//获得某季度的开始日期　　
function getQuarterStartDate(paraYear,paraSeason){　　
　 switch (paraSeason){　　
　　　 case '1' : return paraYear+"-01-01";
　　　 case '2' : return paraYear+"-04-01";
　　　 case '3' : return paraYear+"-07-01";
　　　 case '4' : return paraYear+"-10-01";
　 }
}　　
　　
//获得某季度的结束日期　　
function getQuarterEndDate(paraYear,paraSeason){　　
　 switch (paraSeason){　　
　 case '1' : return paraYear+"-03-31";
　 case '2' : return paraYear+"-06-30";
　 case '3' : return paraYear+"-09-30";
　 case '4' : return paraYear+"-12-31";
　 }　
}

　　//获取某年某周的开始日期
function getBeginDateOfWeek(paraYear, weekIndex){
　 var firstDay = GetFirstWeekBegDay(paraYear);
　 //7*24*3600000 是一星期的时间毫秒数,(JS中的日期精确到毫秒)
　 var time=(weekIndex-1)*7*24*3600000;
　 var beginDay = firstDay;
　 //为日期对象 date 重新设置成时间 time
　 beginDay.setTime(firstDay.valueOf()+time);
　 return formatDate(beginDay);
}

　　//获取某年某周的结束日期
function getEndDateOfWeek(paraYear, weekIndex){
　 var firstDay = GetFirstWeekBegDay(paraYear);
　 //7*24*3600000 是一星期的时间毫秒数,(JS中的日期精确到毫秒)
　 var time=(weekIndex-1)*7*24*3600000;
　 var weekTime = 6*24*3600000;
　 var endDay = firstDay;
　 //为日期对象 date 重新设置成时间 time
　 endDay.setTime(firstDay.valueOf()+weekTime+time);
　 return formatDate(endDay);
}

function bikesubString(str, len, hasDot) {
    var newLength = 0;
    var newStr = "";
    var chineseRegex = /[^\x00-\xff]/g;
    var singleChar = "";
    var strLength = str.replace(chineseRegex, "**").length;
    for (var i = 0; i < strLength; i++) {
        singleChar = str.charAt(i).toString();
        if (singleChar.match(chineseRegex) != null) {
            newLength += 2;
        } else {
            newLength++;
        }
        if (newLength > len) {
            break;
        }
        newStr += singleChar;
    }

    if (hasDot && strLength > len) {
        newStr += "...";
    }
    return newStr;
}


function checklogin() {

    var userinfo = $api.getStorage('userinfo');
    if (empty(userinfo)) {

        api.openWin({
            name: 'login',
            url: 'login.html',
            slidBackEnabled: false,
            reload: true,
        })
    }
};

function empty(obj) {
    if (typeof obj == "undefined" || obj == null || obj == "") {
        return true;
    } else {
        return false;
    }
}

function getConfigValue(keyname) {
    var appKey = api.loadSecureValue({
        sync: true,
        key: keyname
    });
    return appKey;
}

function qiandao() {
    api.openWin({
        name: 'qiandao',
        url: 'work_qiandao.html',
        bounces: false,
        //   rect: {
        //       x: 0,
        //       y: 0,
        //       w: 'auto',
        //       h: api.winHeight
        //   },
        pageParam: {
            title: '签到'
        }
    });
}

function qiandaojl() {
    api.openWin({
        name: 'qiandaojl',
        url: 'work_qiandaojl.html',
        bounces: false,
        //   rect: {
        //       x: 0,
        //       y: 0,
        //       w: 'auto',
        //       h: api.winHeight
        //   },
        pageParam: {
            title: '签到纪录'
        }
    });
}

function calendar() {
    api.openWin({
        name: 'calendar',
        url: 'work_calendar.html',
        bounces: false,
        //   rect: {
        //       x: 0,
        //       y: 0,
        //       w: 'auto',
        //       h: api.winHeight
        //   },
        pageParam: {
            title: '日历'
        }
    });
}

function jixiao() {
    api.openWin({
        name: 'jixiao',
        url: 'work_jixiao.html',
        bounces: false,
        //   rect: {
        //       x: 0,
        //       y: 0,
        //       w: 'auto',
        //       h: api.winHeight
        //   },
        pageParam: {
            title: '工作绩效'
        }
    });
}

function pingfen() {
    api.openWin({
        name: 'pingfen',
        url: 'work_pingfen.html',
        bounces: false,
        //   rect: {
        //       x: 0,
        //       y: 0,
        //       w: 'auto',
        //       h: api.winHeight
        //   },
        pageParam: {
            title: '班长评分'
        }
    });
}

function reportday() {
    api.openWin({
        name: 'reportday',
        url: 'work_reportday.html',
        bounces: false,
        //   rect: {
        //       x: 0,
        //       y: 0,
        //       w: 'auto',
        //       h: api.winHeight
        //   },
        pageParam: {
            title: '日报'
        }
    });
}

function reportweekly() {
    api.openWin({
        name: 'reportweekly',
        url: 'work_reportweekly.html',
        bounces: false,
        //   rect: {
        //       x: 0,
        //       y: 0,
        //       w: 'auto',
        //       h: api.winHeight
        //   },
        pageParam: {
            title: '周报'
        }
    });
}

function reportmonth() {
    api.openWin({
        name: 'reportmonth',
        url: 'work_reportmonth.html',
        bounces: false,
        //   rect: {
        //       x: 0,
        //       y: 0,
        //       w: 'auto',
        //       h: api.winHeight
        //   },
        pageParam: {
            title: '月报'
        }
    });
}

function qiandaobarchart() {
    api.openWin({
        name: 'qiandaobarchart',
        url: 'work_qiandaobarchart.html',
        bounces: false,
        //   rect: {
        //       x: 0,
        //       y: 0,
        //       w: 'auto',
        //       h: api.winHeight
        //   },
        pageParam: {
            title: '签到图表'
        }
    });
}

function jixiaolinechart() {
    api.openWin({
        name: 'jixiaolinechart',
        url: 'work_jixiaolinechart.html',
        bounces: false,
        //   rect: {
        //       x: 0,
        //       y: 0,
        //       w: 'auto',
        //       h: api.winHeight
        //   },
        pageParam: {
            title: '巡检图表'
        }
    });
}

function qdjl() {
    api.openWin({
        name: 'qdjl',
        url: 'work_qdjl.html',
        bounces: false,
        //   rect: {
        //       x: 0,
        //       y: 0,
        //       w: 'auto',
        //       h: api.winHeight
        //   },
        pageParam: {
            title: '签到纪录'
        }
    });
}

function nfcxjx() {
    api.openWin({
        name: 'xjx',
        url: 'work_xjx.html',
        bounces: false,
        //   rect: {
        //       x: 0,
        //       y: 0,
        //       w: 'auto',
        //       h: api.winHeight
        //   },
        pageParam: {
            title: '签到纪录'
        }
    });
}
function nfcaddxjd() {
    api.openWin({
        name: 'xjd',
        url: 'work_xjd.html',
        bounces: false,
        //   rect: {
        //       x: 0,
        //       y: 0,
        //       w: 'auto',
        //       h: api.winHeight
        //   },
        pageParam: {
            title: '签到纪录'
        }
    });
}
