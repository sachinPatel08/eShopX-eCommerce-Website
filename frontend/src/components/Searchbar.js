import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

const Searchbar = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  //   const submitHandler = (e) => {
  //     // e.preventDefault();
  //     if( keyword && keyword.trim()) {
  //       history.push(`/search/${keyword}`);
  //     } else {
  //       history.push("/");
  //     }
  //   };
  useEffect(() => {
    if (keyword != "" && keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  }, [keyword]);

  return (
    <Form>
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products..."
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>
      {/* <Button type="submit" variant="outline-success" className="p-2">
        Search
      </Button> */}
    </Form>
  );
};

export default Searchbar;
