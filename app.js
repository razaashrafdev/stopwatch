var jsmin = 0
var jssec = 0
var jsmsec = 0
var min = document.getElementById("min")
var sec = document.getElementById("sec")
var msec = document.getElementById("msec")
var Interval;

function start() {
    Interval = setInterval(function () {
        jsmsec++
        msec.innerHTML = jsmsec
        if (jsmsec >= 60) {
            jssec++
            sec.innerHTML = jssec
            jsmsec = 0
        } else if (jssec >= 60) {
            jsmin++
            min.innerHTML = jsmin
            jssec = 0
        }

        document.getElementById('btn').disabled = true

    }, 10)
}

function stop() {
    clearInterval(Interval)
    document.getElementById('btn').disabled = false
}

function reset() {
    jsmin = 0
    jssec = 0
    jsmsec = 0
    msec.innerHTML = jsmsec
    sec.innerHTML = jssec
    min.innerHTML = jsmin
    clearInterval(Interval)
}