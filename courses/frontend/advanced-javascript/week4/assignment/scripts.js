const captureButton = document.getElementById("capture-button");
const saveButton = document.getElementById("save-button");
const urlInput = document.getElementById("url-input");
const userMessage = document.getElementById("userMessage");
const imgPreview = document.getElementById("imgPreview");
const screenshotList = document.getElementById("screenshot-list");
const preview = document.getElementById("preview-container");

//******************************* */

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

      if (!response2.ok) {
        throw new ApiError("crudcrud: Api error check the configration");
      }
      const data2 = await response2.json();
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
    try {
      const card = document.createElement("div");
      card.className = "col";

      card.innerHTML = `
  <div class="card h-100" >
    <img src="${this._imagedata}" class="card-img-top" alt="Screenshot">
    <div class="card-body">
      <p class="card-text mb-0">URL: ${this._url}</p>
      <p class="card-text mb-0">DATE: ${this._date}</p>
      <div class="d-flex justify-content-between align-items-center">
  
      <button class="btn btn-danger btn-sm delete-btn">Delete</button>
    </div>
    </div>
  </div>
`;

      const deleteBtn = card.querySelector(".delete-btn");

      deleteBtn.addEventListener("click", async () => {
        await this.delete();
        card.remove();
      });

      screenshotList.appendChild(card);
    } catch (err) {
      const error = new AppError("Someting goes wrong!");
      userMessage.textContent = error.toUserMessage();
    }
  }
  async delete() {
    const option = {
      method: "DELETE",
    };
    const deleteUrl = `${CONFIG.CRUDCRUD_URL}/${this._id}`;
    try {
      const response = await fetch(deleteUrl, option);

      if (!response.ok) {
        throw new ApiError("curdcurd: Delete Error.");
      }
      return response;
    } catch (err) {
      if (err instanceof ApiError) {
        throw err;
      } else {
        throw new NetworkError("curdcurd: Network error.");
      }
    }
  }
}

//***************************** */

let currentScreenshot = null;

//***************************** */

async function getScreenshot(url) {
  const rapidUrl = `https://website-screenshot6.p.rapidapi.com/screenshot?url=${encodeURIComponent(url)}&width=1280&height=800`;

  const option = {
    method: "GET",
    headers: {
      "x-rapidapi-key": CONFIG.RAPIDAPI_KEY,
      "x-rapidapi-host": CONFIG.RAPIDAPI_HOST,
    },
  };
  try {
    const response = await fetch(rapidUrl, option);

    if (!response.ok) {
      throw new ApiError("Rapid: Api error check the configration");
    }
    const data = await response.json();
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

async function getAllScreenshots() {
  const option = {
    method: "GET",
  };
  try {
    const response = await fetch(CONFIG.CRUDCRUD_URL, option);

    if (!response.ok) {
      throw new ApiError("curdcurd: Get list Error");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    if (err instanceof ApiError) {
      throw err;
    } else {
      throw new NetworkError("curdcurd: Network error");
    }
  }
}

async function renderAllScreenshot() {
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
}

//********************************************** */

captureButton.addEventListener("click", async () => {
  const screenshotUrl = urlInput.value;
  try {
    urlValidation(screenshotUrl);
    const currentScreenshotData = await getScreenshot(screenshotUrl);
    currentScreenshot = new Screenshot(screenshotUrl, currentScreenshotData);
    imgPreview.src = currentScreenshotData;
    preview.classList.remove("d-none");
  } catch (err) {
    userMessage.textContent =
      err instanceof AppError ? err.toUserMessage() : "Somethings goes Wrong";
  }
});

saveButton.addEventListener("click", async () => {
  try {
    if (!currentScreenshot) {
      throw new ValidationError("Screenshot dont exist!");
    }
    await currentScreenshot.Save();
    console.log(currentScreenshot);
  } catch (err) {
    userMessage.textContent =
      err instanceof AppError ? err.toUserMessage() : "Somethings goes Wrong";
  }
});

document.addEventListener("DOMContentLoaded", async () => {
  renderAllScreenshot();
});
