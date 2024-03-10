import { useState } from "react";

export const App = () => {
  const [selectedValue, setRadioSelect] = useState("");
  const [selectedOption, setSelection] = useState("---");
  const [text, setText] = useState("");
  const [submited, setSubmit] = useState(false);

  const handleInputTextChange = (event) => {
    setText(event.target.value);
  };

  const handleChange = (event) => {
    setSelection(event.target.value);
  };

  const handleRadioSlection = (event) => {
    setRadioSelect(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit(true);
  };

  return (
    <>
      <header>
        <h1>
          The Great Candy Conspiracy:
          <span>A Totally Serious Survey (Maybe)</span>
        </h1>
      </header>
      <main>
        {submited ? (
          <p>
            {selectedValue} {selectedOption} {text}
          </p>
        ) : (
          <>
            <p aria-label="intro">
              We&apos;re here to get to the bottom of a sticky situation (pun
              intended). Help us expose the truth about candy with these highly
              scientific (not really) questions! (Be truthful, but we won&apos;t
              judge... much)
            </p>
            <form>
              <label aria-label="Question 1">
                <h2>
                  <span>1.</span> When faced with a Halloween bucket full of
                  candy, you strategically snatch the:
                </h2>
                <label>
                  <input
                    type="radio"
                    name="radioAnswer"
                    value="radioAnswer1"
                    checked={selectedValue === "radioAnswer1"}
                    onChange={handleRadioSlection}
                    id="radioAnswer"
                  />
                  <p aria-label="Answer 1">
                    The good stuff (you know what we mean)
                  </p>
                </label>
                <label>
                  <input
                    type="radio"
                    name="radioAnswer"
                    value="radioAnswer2"
                    checked={selectedValue === "radioAnswer2"}
                    onChange={handleRadioSlection}
                    id="radioAnswer"
                  />
                  <p aria-label="Answer 2">
                    Whatever nobody else seems to want (free candy is free
                    candy!)
                  </p>
                </label>
                <label>
                  <input
                    type="radio"
                    name="radioAnswer"
                    value="radioAnswer3"
                    checked={selectedValue === "radioAnswer3"}
                    onChange={handleRadioSlection}
                    id="radioAnswer"
                  />
                  <p aria-label="Answer 3">
                    Only the orange and black ones (Halloween spirit, duh)
                  </p>
                </label>
              </label>

              <label htmlFor="">
                <h2>
                  <span>2.</span> What&apos;s the most likely scenario to find
                  you covered in chocolate?
                </h2>
                <select
                  aria-expanded="false"
                  name="selectedOption"
                  value={selectedOption}
                  onChange={handleChange}
                  id="options"
                  required
                >
                  <option value="---">---</option>
                  <option value="optionA">
                    You heroically wrestled a rogue chocolate fountain.
                  </option>
                  <option value="optionB">
                    You attempted a chocolate chip cookie dough &apos;quality
                    check&apos; with questionable hygiene.
                  </option>
                  <option value="optionC">
                    You tripped face-first into a Halloween candy piñata. 🪅
                    We&apos;ve all been there
                  </option>
                  <option value="optionD">
                    You have a pet sloth with a mysterious chocolate addiction.
                    Don&apos;t judge
                  </option>
                </select>
              </label>

              <label htmlFor="">
                <h2>
                  <span>3.</span> Be honest, have you ever tried to sneak candy
                  past the checkout line hidden in another product like, say, a
                  loaf of bread?
                </h2>
                <input
                  type="text"
                  name="text"
                  value={text}
                  onChange={handleInputTextChange}
                  id="text"
                />
              </label>

              <br></br>
              <button onClick={handleSubmit}>Submit your answers</button>
            </form>
          </>
        )}
      </main>
    </>
  );
};
