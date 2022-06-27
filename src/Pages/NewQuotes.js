import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../libs/api";

const NewQuotes = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();
  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const addQuoteHandler = (quote) => {
    sendRequest(quote);
  };
  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};
export default NewQuotes;
