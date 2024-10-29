
function EachInfo({ info }) {
  return (
    <div className="each-info">
      <div className="infos">
        <span><img className="info-icon" src={info.icon} alt="weather icon"/></span>
        <div>
          <span className="info-value">{info.value}</span>
          <span className="info-value">{info.unit}</span>
        </div>
      </div>
      <div>
        <p className="info-name">{info.name}</p>
      </div>
    </div>
  )
}

export default EachInfo