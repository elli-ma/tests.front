function filterCourses(courses, d) {
    let res = [];
    for (let i = 0; i < courses.length; i++) {
        let c = courses[i].prices;
        let a = c[0]
        let b = c[1]
        let x = d[0]
        let y = d[1]
        let isNotIncluded = ((b < x) && (b != null) && (x != null)) ||
            ((y < a) && (y != null) && (a != null));
        if (!isNotIncluded) {
            res.push(courses[i])
        }
    }

    return res

}


module.exports = { filterCourses }