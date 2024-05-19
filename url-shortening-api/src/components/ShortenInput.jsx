import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/shorteninput.css";

function ShortenInput({ inputRef }) {
  const [baseUrl, setBaseUrl] = useState("");
  const [shortestUrl, setShortestUrl] = useState("");
  const [links, setLinks] = useState([]);

  const getUrl = (e) => {
    const value = e.target.value;
    setBaseUrl(value);
  };
  const clickBtn = (e) => {
    e.preventDefault();
    if (baseUrl) {
      fetchApi(baseUrl);
    } else if (baseUrl === "") {
      console.log(hata);
    }
  };
  const fetchApi = async (inputValue) => {
    const apiKey =
      "QfbRs6RrEDzAHCqJmPQrNEU2kF4UUGdmnInbJ73Tq7kBABAsqmjWGt9gDjeI";
    await axios(
      `https://tinyurl.com/api-create.php?url=${inputValue}&api_key=${apiKey}`
    ).then((data) => {
      setShortestUrl(data.data);
      const newLink = {
        originalUrl: inputValue,
        tinyUrl: data.data,
        copy: true,
      };
      setLinks([...links, newLink]);
    });
    console.log(links);
  };

  const copyToClipboard = async (index) => {
    const updatedLinks = [...links];
    const linkToCopy = updatedLinks[index];
    await navigator.clipboard.writeText(linkToCopy.tinyUrl);
    linkToCopy.copy = false;
    setLinks(updatedLinks);
  };

  return (
    <>
      <div className="form">
        <form>
          <input
            ref={inputRef}
            type="text"
            placeholder="Shorten a link here..."
            onChange={(e) => getUrl(e)}
          />
          <button type="button" onClick={(e) => clickBtn(e)}>
            Shorten it!
          </button>
        </form>
      </div>
      {links.map((link, index) => (
        <div
          key={index}
          className="output"
          style={{
            marginTop: "1rem",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "space-between",
            padding: "1rem",
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          <p className="inputValue" style={{ color: "hsl(260, 8%, 14%)" }}>
            {link.originalUrl}
          </p>
          <div className="output-space-between">
            <a
              href={link.originalUrl}
              className="outputValue"
              style={{ color: "hsl(180, 66%, 49%)", marginRight: "1.3rem" }}
            >
              {link.tinyUrl}
            </a>
            <button
              className="copy-button"
              style={{
                backgroundColor: link.copy
                  ? "hsl(180, 66%, 49%)"
                  : "rgb(240, 151, 88)",
                border: "none",
                padding: "0.5rem",
                color: "white",
                fontSize: "14px",
                fontWeight: "500",
                borderRadius: "0.5rem",
              }}
              type="button"
              onClick={() => copyToClipboard(index)}
              disabled={!link.copy}
            >
              {link.copy ? "Copy" : "Copied"}
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default ShortenInput;
