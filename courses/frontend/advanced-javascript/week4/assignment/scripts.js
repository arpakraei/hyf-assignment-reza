const capture_button = document.getElementById("capture-button");
const save_button = document.getElementById("save-button");
const url_input = document.getElementById("url-input");
const userMessage = document.getElementById("userMessage");
const imgPreview = document.getElementById("imgPreview");
const screenshotList = document.getElementById("screenshot-list");

//******************************* */
class Screenshot {
  constructor(url, imagedata, id = null, date = null) {
    this._url = url;
    this._imagedata = imagedata;
    this._id = id;
    this._date = date;
  }
  async Save() {
    const option = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        screenshotUrl: this._url,
        screenshotData: this._imagedata,
        screenshotDate: new Date().toLocaleString(),
      }),
    };

    try {
      const response2 = await fetch(CONFIG.CRUDCRUD_URL, option);
      const data2 = await response2.json();

      if (!response2.ok) {
        throw new ApiError("crudcrud: Api error check the configration");
      }
      this._id = data2._id;
    } catch (err) {
      if (err instanceof ApiError) {
        throw err;
      } else {
        throw new NetworkError("crudcrud: Check your connection.");
      }
    }
  }
  render() {
    const card = document.createElement("div");
    const cardImg = document.createElement("img");
    const cardUrl = document.createElement("p");
    const cardDeleteButton = document.createElement("button");
    cardDeleteButton.innerText = "Delete";
    cardDeleteButton.addEventListener("click", async () => {
      await this.delete();
      card.remove();
    });

    cardUrl.textContent = this._url;
    cardImg.src = this._imagedata;
    card.appendChild(cardImg);
    card.appendChild(cardUrl);
    card.appendChild(cardDeleteButton);
    screenshotList.appendChild(card);
  }
  async delete() {
    const option = {
      method: "DELETE",
    };
    const deleteUrl = `${CONFIG.CRUDCRUD_URL}/${this._id}`;
    try {
      const response = await fetch(deleteUrl, option);

      if (!response.ok) {
        throw new ApiError("curdcurd: Delete Error");
      }
      return response;
    } catch (err) {
      if (err instanceof ApiError) {
        throw err;
      } else {
        throw new NetworkError("curdcurd: Network error");
      }
    }
  }
}

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

save_button.addEventListener("click", async () => {
  try {
    if (!currentScreenshot) {
      throw new ValidationError("Screenshot dont exist!");
    }
    await currentScreenshot.Save();
    console.log(currentScreenshot);
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

async function getAllScreenshots() {
  const option = {
    method: "GET",
  };
  try {
    const response = await fetch(CONFIG.CRUDCRUD_URL, option);
    const data = await response.json();
    if (!response.ok) {
      throw new ApiError("curdcurd: Get list Error");
    }
    return data;
  } catch (err) {
    if (err instanceof ApiError) {
      throw err;
    } else {
      throw new NetworkError("curdcurd: Network error");
    }
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const screenshots = await getAllScreenshots();

    screenshots.forEach((item) => {
      let screenshot = new Screenshot(
        item.screenshotUrl,
        item.screenshotData,
        item._id,
        item.screenshotDate,
      );
      screenshot.render();
    });
  } catch (err) {
    console.log(err.message);
  }
});
