/* Error: expected "{".
 *   ,
 * 1 | import Main from './Main.js';
 *   |                             ^
 *   '
 *   app.js 1:29  root stylesheet */

body::before {
  font-family: "Source Code Pro", "SF Mono", Monaco, Inconsolata, "Fira Mono",
      "Droid Sans Mono", monospace, monospace;
  white-space: pre;
  display: block;
  padding: 1em;
  margin-bottom: 1em;
  border-bottom: 2px solid black;
  content: "Error: expected \"{\".\a   \2577 \a 1 \2502  import Main from './Main.js';\d\a   \2502                              ^\a   \2575 \a   app.js 1:29  root stylesheet";
}
