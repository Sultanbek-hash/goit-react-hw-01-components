export const Statistics  = ({stats}) => {
    return(
        <section className="statistics">
    <ul className="stat-list">
    <h2 className="title">
            Upload stats
            </h2>
        {stats.map(item => (
            <li className="item" key={item.id}>
                <span className="label">
                {item.label}
                </span>
                <span className="percentage">{item.percentage}</span>
            </li>
        ))}
        </ul>
        </section> 
    )
}