import styled from 'styled-components'

const dummy = [
    {type: 'in', amount: 150, timestamp: '2019-10-01'},
    {type: 'out', amount: Math.random() * 10, timestamp: '2019-10-02'},
    {type: 'out', amount: Math.random() * 10, timestamp: '2019-10-02'},
    {type: 'out', amount: Math.random() * 10, timestamp: '2019-10-03'},
    {type: 'out', amount: Math.random() * 10, timestamp: '2019-10-13'},
    {type: 'out', amount: Math.random() * 10, timestamp: '2019-10-06'},
    {type: 'out', amount: Math.random() * 10, timestamp: '2019-10-10'},
    {type: 'out', amount: Math.random() * 10, timestamp: '2019-10-16'},
    {type: 'out', amount: Math.random() * 10, timestamp: '2019-10-17'},
]

const sortDayWeek = (arr) => {
    const now = Date.now()
    const today = arr.filter(t => new Date(t.timestamp).getDate() === new Date(now).getDate())
    const yesterday = arr.filter(t => new Date(t.timestamp).getDate() === new Date(now).getDate() - 1)
    const dates = arr.reduce((un, t) => today.includes(t) || yesterday.includes(t) ? un : [...un, t], [])
    return [today, yesterday, dates]
}


const List = () => {
    var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }    
    const sorted = [...dummy].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    const [today, yesterday, dates] = sortDayWeek(sorted)
    return (<div>
        {<h3>Today</h3>}            
        {today.length > 0 && yesterday.map(c => (
            <p>{`${new Date(c.timestamp).toLocaleString()} / € ${c.amount.toFixed(2)}`}</p>
        ))}
        {yesterday.length > 0 && <h3>Yesterday</h3>}
        {yesterday.length > 0 && yesterday.map(c => (
            <p>{`${new Date(c.timestamp).toLocaleString()} / € ${c.amount.toFixed(2)}`}</p>
        ))}
        {dates.length > 0 && <h3>Later</h3>}   
        {dates.length > 0 && dates.map(c => (
            <p>{`${new Date(c.timestamp).toLocaleString()} / € ${c.amount.toFixed(2)}`}</p>
        ))}
    </div>)
}

export default List