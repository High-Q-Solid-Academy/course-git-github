# 🚀 Git & GitHub Foundations — High Q Solid Academy

Welcome to **Git & GitHub Foundations**, the essential version control masterclass at **High Q Solid Academy**. Version control is the superpower of every professional software engineer.

---

## 🎯 What You Will Learn
- What Version Control is and why it powers modern software development
- Essential Git CLI commands: `status`, `add`, `commit`, `log`, `diff`, `branch`, `checkout`, `merge`
- Branching strategies (feature branches, `main`, bugfix branches)
- Resolving merge conflicts cleanly without panic
- Collaborating on GitHub: Pull Requests (PRs), Code Reviews, and Issues
- Industry-standard **Conventional Commits** (`feat:`, `fix:`, `docs:`, `style:`, etc.)

---

## 📋 Course Curriculum & Labs

### Module 1: The Basics of Git
- Installing & configuring your identity:
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "your.email@example.com"
  ```
- Initializing a repository: `git init`
- The Three Stages of Git:
  1. **Working Directory** (Unstaged)
  2. **Staging Area** (`git add <file>` or `git add .`)
  3. **Repository** (`git commit -m "feat: description"`)

### Module 2: Inspection & History
- Checking status: `git status`
- Reading commit logs: `git log --oneline --graph --decorate`
- Comparing changes: `git diff`

### Module 3: Branching & Merging
- Creating branches: `git branch feature/my-cool-feature`
- Switching branches: `git checkout feature/my-cool-feature` or `git switch feature/my-cool-feature`
- Creating & switching in one command: `git checkout -b feature/my-cool-feature`
- Merging back to main:
  ```bash
  git checkout main
  git merge feature/my-cool-feature
  ```
- Resolving Merge Conflicts step-by-step.

### Module 4: Working with GitHub & Pull Requests
- Linking a remote: `git remote add origin <url>`
- Pushing code: `git push -u origin feature/my-cool-feature`
- Opening a **Pull Request (PR)** on GitHub
- Writing clean PR descriptions and requesting reviews

---

## 🧪 Interactive Hands-On Labs

Complete the following labs located in the `exercises/` folder:

1. **[Lab 1: Your First Clean Commits](exercises/lab-1-commits/README.md)**
   - Create your student profile file and stage it with a conventional commit message.
2. **[Lab 2: Branching & Safe Merging](exercises/lab-2-branching/README.md)**
   - Create a feature branch named `feature/student-card`, make changes, and merge into main.
3. **[Lab 3: Opening an Inspected Pull Request](exercises/lab-3-pull-request/README.md)**
   - Push your branch to GitHub and open a Pull Request using our High Q PR template.

---

## 🤖 Automated Verification Workflow

This repository is equipped with an automated GitHub Action (`.github/workflows/verify-git.yml`):
- Whenever you open or update a Pull Request, the workflow will automatically check:
  - ✅ Your commit messages conform to **Conventional Commits** (e.g. `feat: add student bio`, `docs: update notes`).
  - ✅ Your Pull Request template has been properly filled out.
  - ✅ No unstaged or temporary files were committed.

---

<div align="center">
  <sub>High Q Solid Academy &bull; <a href="https://highqsolidacademy.com">highqsolidacademy.com</a></sub>
</div>
