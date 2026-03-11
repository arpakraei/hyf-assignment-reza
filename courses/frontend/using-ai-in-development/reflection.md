## Part A – Improvements

During the development of my portfolio page, I used AI to review and improve my code. The following improvements were implemented:

1. Improved naming conventions
   - Renamed functions and variables to make their purpose clearer.
   - Example: changeBackground() → changeBackgroundColor().

2. Fixed logical errors
   - Corrected the logic for generating a random color.
   - Ensured the function returns a valid value.

3. Improved event handling
   - Replaced inline HTML event handlers with addEventListener().

4. Removed duplicated CSS
   - Combined duplicated rules into a single rule.

5. Improved HTML structure
   - Added important meta tags and language attribute.


## Part A – Diagram of Portfolio Page
+---------------------------------------------------+
|                    PORTFOLIO PAGE                 |
+---------------------------------------------------+
                        |
                        v
+---------------------------------------------------+
|                    index.html                     |
+---------------------------------------------------+
        |                     |                     |
        v                     v                     v
+---------------+   +-------------------+   +-------------------+
|     HTML      |   |        CSS        |   |     JavaScript     |
|   Structure   |   |      Styling      |   |    Interaction     |
+---------------+   +-------------------+   +-------------------+
        |                     |                     |
        v                     v                     v

HTML Layout
-----------
<body>
  |
  +-- container
        |
        +-- h1 (About Me)
        |
        +-- paragraph
        |      "I'm Reza from Iran..."
        |
        +-- hobbies list
        |      - Reading
        |      - Thinking
        |      - Writing
        |
        +-- button
               "Change Background Color"


CSS Styling
-----------
body
  |
  +-- font-family
  +-- background color
  +-- layout spacing

container
  |
  +-- max width
  +-- centered layout
  +-- shadow
  +-- padding

button
  |
  +-- color
  +-- hover animation
  +-- scale effect


JavaScript Logic
----------------
BACKGROUND_COLORS array
        |
        v
getRandomColor()
        |
        v
changeBackgroundColor()
        |
        v
Event Listener
(click button)
        |
        v
document.body.style.backgroundColor


Part B: Ethics and Risks

1. Overreliance on AI Without Critical Thinking
What the issue/risk is

One important risk of using AI in software development is that developers may rely too heavily on AI-generated code without fully understanding it. AI can produce code quickly, but it may contain logical errors, inefficient solutions, or security vulnerabilities. If developers copy and use AI-generated code blindly, they may introduce bugs into their systems or lose the ability to reason about their own code.

How I will personally mitigate it

To reduce this risk, I will always review and analyze AI-generated code before using it in my projects. I will try to understand how the code works and verify that it solves the problem correctly. I will also test the code and compare AI suggestions with documentation or other reliable sources. In this way, AI will support my work but not replace my own critical thinking.

2. Poor Prompting Leading to Incorrect or Misleading Results
What the issue/risk is

Another challenge when using AI is that the quality of the output depends strongly on the quality of the prompt. If a developer provides incomplete context or unclear instructions, the AI may generate incorrect or misleading results. This can lead to wasted time, incorrect implementations, or misunderstanding of the problem.

How I will personally mitigate it

To mitigate this issue, I will focus on writing clear and structured prompts. I will describe the problem, provide necessary context, and specify constraints or expected outcomes. When needed, I will refine my prompts and ask follow-up questions to ensure the output matches the intended goal. This will help me get more accurate and useful responses from AI tools.

3. Choosing the Wrong AI Model for a Task
What the issue/risk is

Different AI models have different strengths and limitations. Some models are optimized for speed, while others are designed for deeper reasoning or complex problem solving. Using the wrong model for a specific task can result in incomplete solutions, incorrect code, or lower-quality outputs.

How I will personally mitigate it

To address this issue, I will try to understand the capabilities and limitations of different AI models before using them. I will select models that are appropriate for the complexity of the task and verify the results carefully. If necessary, I will compare outputs from different models or validate the results using documentation and testing.
