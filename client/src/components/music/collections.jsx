import React, { useEffect, useRef } from "react";
import { Dots, Play } from "../../assets";
import "./style.scss";

const Collections = ({ data }) => {
  let optionsRef = useRef([]);
  let btnRef = useRef([]);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      let btn = btnRef?.current?.find((elm) => {
        if (elm?.contains(e.target)) {
          return true;
        }
      });

      let menu_options = optionsRef?.current?.find((elm) => {
        if (elm?.contains(e.target)) {
          return true;
        }
      });

      if (!btn && !menu_options) {
        optionsRef?.current?.forEach((elm) => {
          elm.style.display = "none";
        });
      }
    });
  }, []);
  return (
    <div className="collections">
      <table>
        <tbody>
          {data?.map((obj, key) => {
            return (
              <tr key={key}>
                <td>
                  <span className="count grey">{key + 1}</span>
                  <button className="Play">
                    <Play width={"16px"} height={"16px"} />
                  </button>
                </td>
                <td>
                  <img src={obj?.thumbnail} alt={obj?.title} />
                </td>
                <td>
                  <div className="flex-md">
                    <p className="medium">{obj?.extract}</p>
                    <p className="grey medium-device">{obj?.genres?.[0]}</p>
                  </div>
                </td>
                <td className="desktop">
                  <p className="grey">{obj?.genres?.[0]}</p>
                </td>
                <td>4:30</td>
                <td>
                  <button
                    className="more_btn"
                    onClick={() => {
                      optionsRef?.current?.forEach((elm, index) => {
                        if (index === key) {
                          elm.style.display = "block";
                        } else {
                          elm.style.display = "none";
                        }
                      });
                    }}
                    ref={(elm) => (btnRef.current[key] = elm)}
                  >
                    <Dots width={"16px"} height={"16px"} />
                  </button>

                  <div
                    className={`more_options_${key}`}
                    ref={(elm) => (optionsRef.current[key] = elm)}
                  >
                    <ul>
                      <li>Add to playlist</li>
                      <li>Share</li>
                      <li onClick={() => console.log("Clicked")}>Play</li>
                    </ul>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="see_more">
        <button>
          {/* active for animation */}
          <span>&#9679; &#9679; &#9679;</span>
        </button>
      </div>
    </div>
  );
};

export default Collections;