# 📘 Repository Information: Quote‑of‑the‑Day GitHub Profile Updater

This repository powers an automated **Quote of the Day** system for your GitHub profile README.  
Each day, a GitHub Action selects a new quote from `quotes.json` and updates your profile automatically.

This keeps your profile fresh, dynamic, and interesting — without requiring any manual updates.

---

## 🧩 How It Works

The system is made up of three main components:

### 1. **`quotes.json`**
A large list of quotes stored as a JSON array.  
The GitHub Action selects one quote per day based on the day of the year.

### 2. **`update-quote.js`**
A small Node.js script that:

- Loads all quotes from `quotes.json`
- Determines the quote of the day
- Replaces a placeholder inside `README.md`
- Saves the updated README

### 3. **GitHub Action (`.github/workflows/update-quote.yml`)**
This workflow:

- Runs automatically every day at midnight UTC  
- Executes the Node.js script  
- Commits the updated README back to the repository  

This ensures your profile always displays a fresh quote.

---

## 🛠️ Installation & Setup

Follow these steps to use this system in your own GitHub profile repository.

### 1. Add the placeholder to your `README.md`

Insert this where you want the quote to appear:

```md
### 🌟 Quote of the Day
> <!--QUOTE_PLACEHOLDER-->
```

The script will replace the placeholder with a new quote each day.

---

### 2. Add the required files

Your repository should contain:

```Code
README.md
quotes.json
update-quote.js
package.json
.github/
  workflows/
    update-quote.yml
```

### 3. Ensure GitHub Actions has write permissions

Go to:

Settings → Actions → General → Workflow permissions

Select:

✔️ Read and write permissions

✔️ Allow GitHub Actions to create and approve pull requests (optional)

This allows the workflow to push updates to your README.
