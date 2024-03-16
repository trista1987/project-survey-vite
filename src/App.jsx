import candy from "./assets/candy.jpg"
import { useState } from "react";

export const App = () => {
  const [selectedValue, setRadioSelect] = useState("");
  const [selectedOption, setSelection] = useState("---");
  const [text, setText] = useState("");
  const [submited, setSubmit] = useState(false);

  const handleInputTextChange = event => {
    setText(event.target.value);
  };

  const handleChange = event => {
    setSelection(event.target.value);
  };

  const handleRadioSlection = event => {
    setRadioSelect(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSubmit(true);
  };

  const radioAnswer1 = "The good stuff (you know what we mean)";
  const radioAnswer2 =
    "Whatever nobody else seems to want (free candy is freecandy!)";
  const radioAnswer3 = "Only the orange and black ones (Halloween spirit, duh)";

  const optionA = "You heroically wrestled a rogue chocolate fountain.";
  const optionB = 
    "You attempted a chocolate chip cookie dough 'quality check' with questionable hygiene.";
  const optionC =
    "You tripped face-first into a Halloween candy piñata. 🪅 We've all been there";
  const optionD =
    "You have a pet sloth with a mysterious chocolate addiction. Don't judge";

  return (
    <>
      {submited ? (
        <>
          <header>
            <h1>
            The Great Candy Conspiracy:
              <span>Your Results are in:</span>
            </h1>
            <img src={candy} alt="sour worm candy" />
          </header>
          <main>
            <div
              className="answer-box"
              aria-label="Your answer">
              <h2>
                Your answers:
              </h2>
              <h3>
                  <span>1.</span> When faced with a Halloween bucket full of
                  candy, you strategically snatch the:
                </h3>
              <p>{selectedValue}</p>
              <h3>
                  <span>2.</span> What&apos;s the most likely scenario to find
                  you covered in chocolate?
                </h3>
              <p>{selectedOption}</p>
              <h3>
                  <span>3.</span> Be honest, have you ever tried to sneak candy
                  past the checkout line hidden in another product like, say, a
                  loaf of bread?
                </h3>
              <p>{text}</p>
            </div>
          </main>
        </>
      ) : (
        <>
          <header>
          <img src={candy} alt="sour worm candy" />
            <h1>
              The Great Candy Conspiracy:
              <span>A Totally Serious Survey (Maybe)</span>
            </h1>
          </header>
          <main className="container">
            <p aria-label="intro">
              We&apos;re here to get to the bottom of a sticky situation (pun
              intended). Help us expose the truth about candy with these highly
              scientific (not really) questions! (Be truthful, but we won&apos;t
              judge... much)
            </p>
            <form>
              <label aria-labelledby="Question 1">
                <h2>
                  <span>1.</span> When faced with a Halloween bucket full of
                  candy, you strategically snatch the:
                </h2>
                <label>
                  <input
                    aria-label="radio answer button 1"
                    aria-labelledby="radio-answer-1"
                    type="radio"
                    name="radioAnswer"
                    value={radioAnswer1}
                    checked={selectedValue === radioAnswer1}
                    onChange={handleRadioSlection}
                    id="radioAnswer1"
                  />
                  <p aria-label="Answer 1" id="radio-answer-1">
                    The good stuff (you know what we mean)
                  </p>
                </label>
                <label>
                  <input
                    aria-label="radio answer button 2"
                    type="radio"
                    name="radioAnswer"
                    value={radioAnswer2}
                    checked={selectedValue === radioAnswer2}
                    onChange={handleRadioSlection}
                    id="radioAnswer2"
                  />
                  <p aria-label="Answer 2">
                    Whatever nobody else seems to want (free candy is free
                    candy!)
                  </p>
                </label>
                <label>
                  <input
                    aria-label="radio answer button 3"
                    type="radio"
                    name="radioAnswer"
                    value={radioAnswer3}
                    checked={selectedValue === radioAnswer3}
                    onChange={handleRadioSlection}
                    id="radioAnswer3"
                  />
                  <p aria-label="Answer 3">
                    Only the orange and black ones (Halloween spirit, duh)
                  </p>
                </label>
              </label>

              <label aria-label="Question 2">
                <h2>
                  <span>2.</span> What&apos;s the most likely scenario to find
                  you covered in chocolate?
                </h2>
                <select
                  aria-expanded="false"
                  name="selectedOption"
                  // value={selectedOption}
                  onChange={handleChange}
                  id="options"
                  required>
                  <option value="---">---</option>
                  <option value={optionA}>
                    You heroically wrestled a rogue chocolate fountain.
                  </option>
                  <option value={optionB}>
                    You attempted a chocolate chip cookie dough &apos;quality
                    check&apos; with questionable hygiene.
                  </option>
                  <option value={optionC}>
                    You tripped face-first into a Halloween candy piñata. 🪅
                    We&apos;ve all been there
                  </option>
                  <option value={optionD}>
                    You have a pet sloth with a mysterious chocolate addiction.
                    Don&apos;t judge
                  </option>
                </select>
              </label>

              <label aria-label="Question 3">
                <h2>
                  <span>3.</span> Be honest, have you ever tried to sneak candy
                  past the checkout line hidden in another product like, say, a
                  loaf of bread?
                </h2>
                <input
                  type="text"
                  name="text"
                  placeholder="Please write your answer here"
                  value={text}
                  onChange={handleInputTextChange}
                  id="text"
                />
              </label>
              <div className="submit-wrapper">
                <button onClick={handleSubmit}>Submit your answers</button>
              </div>
            </form>
          </main>
        </>
      )}
    </>
  );
};
