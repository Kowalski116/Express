module.exports = {
    sum: (a,b) => a+b,
    sortable: (field,sort) => {
        const sortType = field === sort.column ? sort.type : 'default'
        const icons = {
            default: 'oi oi-elevator',
            asc: 'oi oi-sort-ascending',
            desc: 'oi oi-sort-descending',
        }
        const types = {
            default: 'asc',
            asc: 'desc',
            desc: 'asc',
        }
        const icon = icons[sortType]
        const type = types[sort.type]
        return `<a href="?_sort&column=${field}&type=${type}"><span class="${icon}"></span></a>`
    }

}