# Lab 1: Your First Clean Commits

<div align="center">

### High Q Solid Academy &bull; Version Control Lab 01
**"Always Ahead of Others"**

</div>

---

## 📖 Theoretical Foundations: Commits & The Git Index

*Reference: GitHub Essentials, Chapter 1: Brief Repository Overview*

### 1. The Git Index as an Explicit Preparation Buffer
In Git, changes made in your working directory do not get captured automatically into the repository history. Instead, Git introduces an intermediate layer known as the **Index (or Staging Area)**.
- **Working Tree**: Contains your actual files on disk.
- **Index (`git add`)**: Prepares an exact snapshot of what will be recorded. Staging allows developers to craft atomic, logical units of work rather than dumping unrelated edits together.
- **Commit (`git commit`)**: Takes the staged snapshot, writes tree and blob objects into `.git/objects`, generates a 40-character SHA-1 hash, attaches your author identity, and moves the branch reference forward.

```
+------------------+         git add          +------------------+        git commit        +------------------+
| Working Tree     | -----------------------> | Staging Area     | -----------------------> | Git Repository   |
| (Modified Files) |                          | (The Index)      |                          | (HEAD Commit)    |
+------------------+                          +------------------+                          +------------------+
```

### 2. Conventional Commits Specification
High Q Solid Academy enforces the **Conventional Commits** standard across all courses and production repositories:

$$\text{Format: } \langle\text{type}\rangle[\text{optional scope}]:\ \langle\text{description}\rangle$$

| Type | When to Use | High Q Example |
| :--- | :--- | :--- |
| `feat` | A new feature or student functionality | `feat: implement student registration form` |
| `fix` | A bug fix | `fix: correct flexbox overflow on mobile navbar` |
| `docs` | Documentation only changes | `docs: add installation instructions for High Q Portal` |
| `style` | Formatting, missing semi-colons, white-space | `style: reformat CSS variables using 2-space indentation` |
| `refactor` | Code change that neither fixes a bug nor adds a feature | `refactor: extract grade calculation into pure helper` |
| `test` | Adding or correcting automated unit tests | `test: add Jest test cases for CBT quiz calculator` |

---

## 📋 Hands-On Lab Instructions

1. **Verify your working directory status**:
   ```bash
   git status
   ```
2. **Inspect and edit `student-profile.md`**:
   Open `exercises/lab-1-commits/student-profile.md` and complete your student credentials:
   - Full Name: (e.g. Adebule Quam)
   - Track: Web Development Foundation
   - Tech Objective: "To master full-stack software engineering at High Q Solid Academy."
3. **Stage the file explicitly**:
   ```bash
   git add exercises/lab-1-commits/student-profile.md
   ```
4. **Commit using Conventional Commits**:
   ```bash
   git commit -m "feat: add student profile for Lab 1"
   ```
5. **Inspect the generated cryptographic commit**:
   ```bash
   git log -1 --stat
   ```
   Note the author, timestamp, 7-character abbreviated SHA hash, and file diff statistics.

---

<div align="center">
  <sub>High Q Solid Academy &bull; <a href="https://highqsolidacademy.com">highqsolidacademy.com</a></sub>
</div>
