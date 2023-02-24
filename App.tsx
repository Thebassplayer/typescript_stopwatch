import { FC } from 'react';
import * as React from 'react';
import './style.css';

type StopwatchProps = {};

const Stopwatch: FC<StopwatchProps> = () => {
  const [startTime, setStartTime] = React.useState<Date | null>(null);
  return <h1>Stopwatch</h1>;
};

export default function App() {
  return <Stopwatch />;
}
