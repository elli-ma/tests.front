const lib = require('./lib.js')
const assert = require('assert')

describe('filterCourses(courses, range)', () => {
    let courses = [
        { name: "Courses in England", prices: [0, 100] },
        { name: "Courses in Germany", prices: [500, null] },
        { name: "Courses in Italy", prices: [100, 200] },
        { name: "Courses in Russia", prices: [null, 400] },
        { name: "Courses in China", prices: [50, 250] },
        { name: "Courses in Kazakhstan", prices: [56, 324] },
        { name: "Courses in France", prices: [null, null] }
    ];

    it('должно найти курсы до 200 руб', () => {
        assert.deepEqual(lib.filterCourses(courses, [null, 200]), [
            { name: "Courses in England", prices: [0, 100] },
            { name: "Courses in Italy", prices: [100, 200] },
            { name: "Courses in Russia", prices: [null, 400] },
            { name: "Courses in China", prices: [50, 250] },
            { name: "Courses in Kazakhstan", prices: [56, 324] },
            { name: "Courses in France", prices: [null, null] }
        ])
    })

    it('должно найти курсы от 100 до 350 руб', () => {
        assert.deepEqual(lib.filterCourses(courses, [100, 350]), [
            { name: "Courses in England", prices: [0, 100] },
            { name: "Courses in Italy", prices: [100, 200] },
            { name: "Courses in Russia", prices: [null, 400] },
            { name: "Courses in China", prices: [50, 250] },
            { name: "Courses in Kazakhstan", prices: [56, 324] },
            { name: "Courses in France", prices: [null, null] }

        ])
    })

    it('должно найти курсы от 500 руб', () => {
        assert.deepEqual(lib.filterCourses(courses, [500, null]), [
            { name: "Courses in Germany", prices: [500, null] },
            { name: "Courses in France", prices: [null, null] }
        ])
    })

    it('должны найти курсы до 400 руб', () => {
        assert.deepEqual(lib.filterCourses(courses, [null, 400]), [
            { name: "Courses in England", prices: [0, 100] },
            { name: "Courses in Italy", prices: [100, 200] },
            { name: "Courses in Russia", prices: [null, 400] },
            { name: "Courses in China", prices: [50, 250] },
            { name: "Courses in Kazakhstan", prices: [56, 324] },
            { name: "Courses in France", prices: [null, null] }

        ])

    })

    it('должны найти курсы от 100 до 200 руб', () => {
        assert.deepEqual(lib.filterCourses(courses, [100, 200]), [
            { name: "Courses in England", prices: [0, 100] },
            { name: "Courses in Italy", prices: [100, 200] },
            { name: "Courses in Russia", prices: [null, 400] },
            { name: "Courses in China", prices: [50, 250] },
            { name: "Courses in Kazakhstan", prices: [56, 324] },
            { name: "Courses in France", prices: [null, null] }
        ])
    })

    it('должны найти курсы от 200 руб', () => {
        assert.deepEqual(lib.filterCourses(courses, [200, null]), [
            { name: "Courses in Germany", prices: [500, null] },
            { name: "Courses in Italy", prices: [100, 200] },
            { name: "Courses in Russia", prices: [null, 400] },
            { name: "Courses in China", prices: [50, 250] },
            { name: "Courses in Kazakhstan", prices: [56, 324] },
            { name: "Courses in France", prices: [null, null] }
        ])
    })
})