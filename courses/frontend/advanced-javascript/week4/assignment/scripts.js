const capture_button = document.getElementById("capture-button");
const save_button = document.getElementById("save-button");
const url_input = document.getElementById("url-input");
const userMessage = document.getElementById("userMessage");
const imgPreview = document.getElementById("imgPreview");

//***************************** */

let currentScreenshot = null;

capture_button.addEventListener("click", async () => {
  const screenshotUrl = url_input.value;
  try {
    urlValidation(screenshotUrl);
    const currentScreenshotData = await getScreenshot(screenshotUrl);
    currentScreenshot = new Screenshot(screenshotUrl, currentScreenshotData);
    imgPreview.src = currentScreenshotData;
  } catch (err) {
    if (err instanceof ValidationError) {
      userMessage.textContent = err.toUserMessage();
    } else if (err instanceof ApiError) {
      userMessage.textContent = err.toUserMessage();
    } else if (err instanceof NetworkError) {
      userMessage.textContent = err.toUserMessage();
    } else {
      userMessage.textContent = "Somethings goes Wrong";
    }
  }
});

async function getScreenshot(url) {
  const rapidUrl = `https://website-screenshot6.p.rapidapi.com/screenshot?url=${url}&width=1280&height=800`;

  const option = {
    method: "GET",
    headers: {
      "x-rapidapi-key": CONFIG.RAPIDAPI_KEY,
      "x-rapidapi-host": CONFIG.RAPIDAPI_HOST,
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(rapidUrl, option);
    const data = await response.json();

    if (!response.ok) {
      throw new ApiError("Rapid: Api error check the configration");
    }

    return data.screenshotUrl;
  } catch (err) {
    if (err instanceof ApiError) {
      throw err;
    } else {
      throw new NetworkError("Rapid: Check your connection.");
    }
  }
}

function urlValidation(url) {
  if (!url.trim()) {
    throw new ValidationError("Url field cant be empty");
  }
  try {
    new URL(url);
  } catch {
    throw new ValidationError("Url is invalid");
  }
}

class AppError extends Error {
  constructor(message) {
    super(message);
  }

  toUserMessage() {
    return this.message;
  }
}
class ValidationError extends AppError {
  constructor(message) {
    super(message);
  }
}
class ApiError extends AppError {
  constructor(message) {
    super(message);
  }
}
class NetworkError extends AppError {
  constructor(message) {
    super(message);
  }
}
