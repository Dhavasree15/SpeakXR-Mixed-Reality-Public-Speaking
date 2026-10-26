# Manual Test Cases

| ID | Test | Steps | Expected result |
|---|---|---|---|
| T01 | Empty speech | Leave speech blank; click Review my speech | Prompt asks user to add speech; no results shown |
| T02 | Text review | Enter a short speech; click Review my speech | Word, sentence, and filler-word counts appear |
| T03 | Filler word | Include “um” in speech | Filler count includes the matching word |
| T04 | Reset | Review text, then click Start again | Text/topic clear and results hide |
| T05 | Responsive layout | Open at phone-sized width | Cards stack and controls remain usable |
| T06 | Microphone unsupported | Use a browser without SpeechRecognition | Helpful fallback asks user to type |
| T07 | Microphone permission denied | Deny microphone permission where supported | Error/fallback message appears |
| T08 | Accessibility basics | Navigate with keyboard and inspect focus | Inputs and buttons can be reached and used |

These are manual checks; they have not been run automatically in a CI pipeline.
