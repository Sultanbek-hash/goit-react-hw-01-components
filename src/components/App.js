import data from '../path/data.json';
import { Statistics } from './datalist/datalist';


export const App = () => {
  return (
      <>
      <Statistics title="Upload stats" stats={data} />
      </>
  );
};
