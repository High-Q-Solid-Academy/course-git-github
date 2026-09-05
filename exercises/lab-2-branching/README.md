# Lab 2: Branching & Safe Merging

## 🎯 Goal
Understand Git branch creation, context switching, and merging into `main`.

## 📋 Task Instructions
1. Make sure you are on the `main` branch with clean status:
   ```bash
   git checkout main
   git status
   ```
2. Create and switch to a new feature branch:
   ```bash
   git checkout -b feature/hq-card
   ```
3. Inside this folder, create a file named `my-card.txt` containing a 2-line summary of what you want to build.
4. Stage and commit your changes:
   ```bash
   git add my-card.txt
   git commit -m "feat: add personal card notes"
   ```
5. Switch back to `main`:
   ```bash
   git checkout main
   ```
6. Merge your feature branch:
   ```bash
   git merge feature/hq-card
   ```
7. Verify that `my-card.txt` now appears in `main`!
