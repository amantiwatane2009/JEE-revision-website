// =========================================================
// QUIZ ENGINE (shared across every chapter quiz page)
// Place this file at: /js/quiz-engine.js  (site root)
// Every chapter's own script (e.g. rotational-script.js)
// just defines a question bank and calls initQuiz({...})
// =========================================================

/**
 * Shuffle an array in place (Fisher-Yates) and return it.
 */
function shuffleArray(array)
{
    for (let i = array.length - 1; i > 0; i--)
    {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Pick `count` random questions from the full bank, and shuffle
 * each question's answer order so the correct answer isn't
 * always in the same position.
 */
function pickRandomQuestions(bank, count)
{
    const shuffledBank = shuffleArray([...bank]);
    const selected = shuffledBank.slice(0, Math.min(count, bank.length));

    return selected.map((q) => ({
        question: q.question,
        answers: shuffleArray([...q.answers]),
    }));
}

/**
 * Main entry point. Call this from each chapter's script file:
 *
 *   initQuiz({
 *     chapterTitle: "Rotational Motion",
 *     questions: rotationalQuestionBank,
 *     questionCount: 25
 *   });
 */
function initQuiz(config)
{
    const questionBank = config.questions || [];
    const questionCount = config.questionCount || 25;
    const chapterTitle = config.chapterTitle || "Chapter Quiz";

    // DOM Elements
    const startScreen = document.getElementById("start-screen");
    const quizScreen = document.getElementById("quiz-screen");
    const resultScreen = document.getElementById("result-screen");
    const startButton = document.getElementById("start-btn");
    const skipButton = document.getElementById("skip-btn");
    const quizTitle = document.getElementById("quiz-title");
    const questionText = document.getElementById("question-text");
    const answersContainer = document.getElementById("answers-container");
    const currentQuestionSpan = document.getElementById("current-question");
    const totalQuestionsSpan = document.getElementById("total-questions");
    const scoreSpan = document.getElementById("score");
    const finalScoreSpan = document.getElementById("final-score");
    const maxScoreSpan = document.getElementById("max-score");
    const resultMessage = document.getElementById("result-message");
    const restartButton = document.getElementById("restart-btn");
    const progressBar = document.getElementById("progress");

    if (quizTitle)
    {
        quizTitle.textContent = chapterTitle;
    }
    document.title = chapterTitle + " Quiz | JEE MAINS";

    // Quiz state
    let activeQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let answersDisabled = false;
    let answerLog = [];

    startButton.addEventListener("click", startQuiz);
    restartButton.addEventListener("click", startQuiz);
    if (skipButton)
    {
        skipButton.addEventListener("click", skipQuestion);
    }

    function startQuiz()
    {
        // pick a fresh random set of questions every time the quiz (re)starts
        activeQuestions = pickRandomQuestions(questionBank, questionCount);

        currentQuestionIndex = 0;
        score = 0;
        answerLog = [];
        scoreSpan.textContent = 0;

        totalQuestionsSpan.textContent = activeQuestions.length;
        maxScoreSpan.textContent = activeQuestions.length * 4;

        startScreen.classList.remove("is-active");
        resultScreen.classList.remove("is-active");
        quizScreen.classList.add("is-active");

        showQuestion();
    }

    function showQuestion()
    {
        answersDisabled = false;

        const currentQuestion = activeQuestions[currentQuestionIndex];

        currentQuestionSpan.textContent = currentQuestionIndex + 1;

        const progressPercent = (currentQuestionIndex / activeQuestions.length) * 100;
        progressBar.style.width = progressPercent + "%";

        questionText.textContent = currentQuestion.question;

        answersContainer.innerHTML = "";

        currentQuestion.answers.forEach((answer) =>
        {
            const button = document.createElement("button");
            button.textContent = answer.text;
            button.classList.add("quiz-answer-btn");
            button.dataset.correct = answer.correct;

            button.addEventListener("click", selectAnswer);

            answersContainer.appendChild(button);
        });
    }

    function selectAnswer(event)
    {
        if (answersDisabled) return;

        answersDisabled = true;

        const selectedButton = event.target;
        const isCorrect = selectedButton.dataset.correct === "true";

        Array.from(answersContainer.children).forEach((button) =>
        {
            if (button.dataset.correct === "true")
            {
                button.classList.add("correct");
            }
            else if (button === selectedButton)
            {
                button.classList.add("incorrect");
            }
        });

        if (isCorrect)
        {
            score += 4;
        }
        else
        {
            score -= 1;
        }
        scoreSpan.textContent = score;

        answerLog.push({
            question: activeQuestions[currentQuestionIndex].question,
            answers: activeQuestions[currentQuestionIndex].answers,
            selectedText: selectedButton.textContent,
            attempted: true,
        });

        setTimeout(() =>
        {
            currentQuestionIndex++;

            if (currentQuestionIndex < activeQuestions.length)
            {
                showQuestion();
            }
            else
            {
                showResults();
            }
        }, 1000);
    }

    function skipQuestion()
    {
        if (answersDisabled) return;

        answersDisabled = true;

        // Reveal the correct answer for learning purposes, but do NOT
        // touch the score — an unattempted question scores 0, not -1.
        Array.from(answersContainer.children).forEach((button) =>
        {
            if (button.dataset.correct === "true")
            {
                button.classList.add("correct");
            }
        });

        answerLog.push({
            question: activeQuestions[currentQuestionIndex].question,
            answers: activeQuestions[currentQuestionIndex].answers,
            selectedText: null,
            attempted: false,
        });

        setTimeout(() =>
        {
            currentQuestionIndex++;

            if (currentQuestionIndex < activeQuestions.length)
            {
                showQuestion();
            }
            else
            {
                showResults();
            }
        }, 1000);
    }

    function showResults()
    {
        quizScreen.classList.remove("is-active");
        resultScreen.classList.add("is-active");

        finalScoreSpan.textContent = score;

        const maxPossibleScore = activeQuestions.length * 4;
        const percentage = (score / maxPossibleScore) * 100;

        if (percentage === 100)
        {
            resultMessage.textContent = "Perfect! You're a genius!";
        }
        else if (percentage >= 80)
        {
            resultMessage.textContent = "Great job! You know your stuff!";
        }
        else if (percentage >= 60)
        {
            resultMessage.textContent = "Good effort! Keep learning!";
        }
        else if (percentage >= 40)
        {
            resultMessage.textContent = "Not bad! Try again to improve!";
        }
        else
        {
            resultMessage.textContent = "Keep studying! You'll get better!";
        }

        renderReview();
    }

    function renderReview()
    {
        const reviewContainer = document.getElementById("review-container");
        if (!reviewContainer) return;

        reviewContainer.innerHTML = "";

        answerLog.forEach((entry, index) =>
        {
            const item = document.createElement("div");
            item.classList.add("quiz-review-item");

            const questionEl = document.createElement("p");
            questionEl.classList.add("quiz-review-question");
            questionEl.textContent = `Q${index + 1}. ${entry.question}`;
            item.appendChild(questionEl);

            const answersEl = document.createElement("div");
            answersEl.classList.add("quiz-review-answers");

            entry.answers.forEach((answer) =>
            {
                const answerEl = document.createElement("div");
                answerEl.classList.add("quiz-review-answer");
                answerEl.textContent = answer.text;

                if (answer.correct)
                {
                    answerEl.classList.add("correct");
                }
                else if (entry.attempted && answer.text === entry.selectedText)
                {
                    answerEl.classList.add("incorrect");
                }

                answersEl.appendChild(answerEl);
            });

            item.appendChild(answersEl);

            if (!entry.attempted)
            {
                const statusEl = document.createElement("p");
                statusEl.classList.add("quiz-review-status");
                statusEl.textContent = "Not attempted";
                item.appendChild(statusEl);
            }

            reviewContainer.appendChild(item);
        });
    }
}