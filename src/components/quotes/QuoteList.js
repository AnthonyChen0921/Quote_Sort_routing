import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, isSortingAscending) => {
  return quotes.sort((a, b) => {
    if (isSortingAscending) {
      return a.id > b.id ? 1 : -1;
    } else {
      return a.id < b.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const queryParama = new URLSearchParams(location.search);
  const isSortingAscending = queryParama.get("sort") === "asc";
  const quotes = sortQuotes(props.quotes, isSortingAscending);
  const sortHandler = (e) => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${(isSortingAscending ? "desc" : "asc")}`
    });
    //history.push(`${location.pathname}?sort=${(isSortingAscending ? "desc" : "asc")}`);
  };
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={sortHandler} className={classes.sortButton}>
          Sort {isSortingAscending ? "Desending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
