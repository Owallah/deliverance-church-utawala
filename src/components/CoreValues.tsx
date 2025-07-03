import "../styles/CoreValues.css";

const values = [
    { label: 'LOVE', colorClass: 'red' },
    { label: 'FELLOWSHIP', colorClass: 'white' },
    { label: 'WISDOM', colorClass: 'blue-dark' },
    { label: 'HOLINESS', colorClass: 'yellow' },
    { label: 'EXCELLENCE', colorClass: 'blue-light' },
  ];

const CoreValuesCircle = () => {

    return (
        <div className="circle-container">
          <div className="pentagon-center">CORE <br /> VALUES</div>
          {values.map((value, index) => (
            <div
              key={index}
              className={`segment ${value.colorClass}`}
              style={{ transform: `rotate(${index * 72}deg)` }}
            >
              <div className="segment-text" style={{ transform: `rotate(${-index * 72}deg)` }}>
                {value.label}
              </div>
            </div>
          ))}
        </div>
      );
};

export default CoreValuesCircle;