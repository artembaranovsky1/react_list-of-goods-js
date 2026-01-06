import 'bulma/css/bulma.css';
// import cn from 'classnames';
import './App.scss';
import { useState } from 'react';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [visibleGood, setVisibleGood] = useState(goodsFromServer);
  const [sortField, setSortField] = useState('');
  const [reversed, setReversed] = useState(false);

  const reverse = () => {
    setReversed(!reversed);
    setVisibleGood([...visibleGood].reverse());
  };

  const sortByAlph = () => {
    setVisibleGood([...visibleGood].sort());
    setSortField('name');
    setReversed(false);
  };

  const sortByLength = () => {
    setVisibleGood(
      [...visibleGood].sort((good1, good2) => good1.length - good2.length),
    );
    setSortField('length');
    setReversed(false);
  };

  const reset = () => {
    setVisibleGood(goodsFromServer);
    setSortField('');
    setReversed(false);
  };

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={`button is-info ${sortField === 'name' ? '' : 'is-light'}`}
          onClick={sortByAlph}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={`button is-success ${sortField === 'length' ? '' : 'is-light'}`}
          onClick={sortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={`button is-warning ${reversed ? '' : 'is-light'}`}
          onClick={reverse}
        >
          Reverse
        </button>

        {JSON.stringify(visibleGood) !== JSON.stringify(goodsFromServer) ? (
          <button
            type="button"
            className="button is-danger is-light"
            onClick={reset}
          >
            Reset
          </button>
        ) : null}
      </div>

      <ul>
        {visibleGood.map(good => (
          <li data-cy="Good" key={good}>
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
