function input() {
    var start = Number(document.querySelector("#start").value)
    var stop = Number(document.querySelector("#stop").value)
    var step = Number(document.querySelector("#step").value)
    var resp = document.querySelector("#resp")

    if (start == null || stop == null || step == null || step == 0) {
        window.alert('Step should be a positive number')
        resp.innerHTML = 'Count impossible.'
    } else {
        resp.innerHTML = 'Counter:'
        if (stop >= start) {
            for (start; start <= stop; start += step) {
                resp.innerHTML += ` ${start}`
            }
        } else if (stop < start) {
            for (start; stop < start; start -= step) {
                resp.innerHTML += ` ${start}`
            }
        }
    }
}

// negativo e zero ta travando