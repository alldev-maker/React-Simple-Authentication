import { useReducer } from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceArea,
  ResponsiveContainer,
} from 'recharts';
import moment from 'moment';
import initialData from 'mocks/data.json';

const searchItemIndex = (ref) => {
  return initialData.findIndex((item) => item.date === ref);
};

const getAxisYDomain = (from, to, ref, offset) => {
  const refData = initialData.slice(searchItemIndex(from), searchItemIndex(to));
  let [bottom, top] = [refData[0][ref], refData[0][ref]];

  refData.forEach((d) => {
    if (d[ref] > top) top = d[ref];
    if (d[ref] < bottom) bottom = d[ref];
  });

  return [(bottom | 0) - offset, (top | 0) + offset];
};

const CustomizedAxisTick = ({ x, y, payload }) => {
  const dateParts = payload.value.split('/');
  const dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={5}
        textAnchor="end"
        fill="#363636"
        transform="rotate(-90)"
      >
        {moment(dateObject).format('DD.MM.YYYY')}
      </text>
    </g>
  );
};

const PatientChart = () => {
  const [state, setState] = useReducer((old, news) => ({ ...old, ...news }), {
    data: initialData,
    left: 'dataMin',
    right: 'dataMax',
    refAreaLeft: '',
    refAreaRight: '',
    top: 300,
    bottom: 0,
    animation: true,
    reset: false,
  });

  const zoom = () => {
    let { refAreaLeft, refAreaRight } = state;
    const { data } = state;

    if (refAreaLeft === refAreaRight || refAreaRight === '') {
      setState({
        refAreaLeft: '',
        refAreaRight: '',
      });
      return;
    }

    // xAxis domain
    if (refAreaLeft > refAreaRight)
      [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];
    // yAxis domain
    const [bottom, top] = getAxisYDomain(refAreaLeft, refAreaRight, 'value', 1);

    setState({
      refAreaLeft: '',
      refAreaRight: '',
      data: data.slice(),
      left: refAreaLeft,
      right: refAreaRight,
      bottom,
      top,
      reset: true,
    });
  };

  const zoomOut = () => {
    const { data } = state;
    setState({
      data: data.slice(),
      refAreaLeft: '',
      refAreaRight: '',
      left: 'dataMin',
      right: 'dataMax',
      top: 300,
      bottom: 0,
      reset: false,
    });
  };

  const { data, left, right, refAreaLeft, refAreaRight, top, bottom, reset } =
    state;

  return (
    <div
      className="highlight-bar-charts"
      style={{ userSelect: 'none', width: '100%' }}
    >
      <h3 className="text-center text-secondary">Patients 2022</h3>
      {reset && (
        <div className="text-center">
          <button
            type="button"
            className="btn btn-outline-info"
            onClick={() => zoomOut()}
          >
            Reset
          </button>
        </div>
      )}
      <ResponsiveContainer width={'100%'} height={500}>
        <LineChart
          data={data}
          onMouseDown={(e) => setState({ refAreaLeft: e?.activeLabel })}
          onMouseMove={(e) =>
            state.refAreaLeft && setState({ refAreaRight: e?.activeLabel })
          }
          onMouseUp={() => zoom()}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            allowDataOverflow
            dataKey="date"
            domain={[left, right]}
            tick={CustomizedAxisTick}
            interval={0}
            height={100}
          />
          <YAxis
            allowDataOverflow
            domain={[bottom, top]}
            type="number"
            yAxisId="1"
            tickCount={7}
          />

          <Tooltip />
          <Line
            yAxisId="1"
            dataKey="value"
            stroke="#4d4db4"
            strokeWidth={2}
            dot={false}
            animationDuration={300}
          />

          {refAreaLeft && refAreaRight ? (
            <ReferenceArea
              yAxisId="1"
              x1={refAreaLeft}
              x2={refAreaRight}
              strokeOpacity={0.3}
            />
          ) : null}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
export default PatientChart;
