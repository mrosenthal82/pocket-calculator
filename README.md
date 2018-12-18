# Pocket Calculator (Midterm Project)

Welcome to the Pocket Calculator!

This is our first project where you'll need to design and develop HTML, CSS, and JavaScript to build a full-featured application: an online calculator that you will present to the class. This will serve as 50% of your midterm score (with the other half coming from a written test).

The requirements aren't terribly complicated, but they are very specific. You'll be expected to meet them exactly as they're written. Almost doesn't count. Close enough never is.

## Getting Started

To get started, you'll need to create a [GitHub](https://github.com/) repository to store your Pocket Calculator code. After cloning my skeleton repository, you'll need to setup a remote to push your code to your repository instead of mine. Steps to accomplish this are outlined below.

### Setup

01. Login to your [GitHub](https://github.com/) account and create a new repository named `pocket-calculator`.
02. In GitBash, navigate to your `APCSP` folder.
03. Clone my skeleton repository from [GitHub](https://github.com/). This will make a copy of my repository and store it locally.
```
git clone git@github.com:rwilson-ucvts/principles-pocket-calculator-skeleton.git
```
04. The cloning process will have created a folder named `principles-pocket-calculator-skeleton`. Rename this folder to `pocket-calculator`.
```
mv principles-pocket-calculator-skeleton pocket-calculator
```
05. Change directories to get into your `pocket-calculator` folder.
```
cd pocket-calculator
```
06. Originally, the remote will be pointing at my repository. We need to overwrite this.
```
git remote rename origin upstream
```
07. Lastly, we need to add a new remote that points at the repository you created earlier. Make sure you replace `YOUR-USERNAME` with your actual username.
```
git remote add origin git@github.com:YOUR-USERNAME/pocket-calculator.git
```
08. Launch Atom and select `File > Add Project Folder...`.
09. Navigate to your `pset6` directory and click `Open`.

## Requirements

Every pocket calculator is a little different. Yours, though, must provide a minimum set of functionality (plus some optional nice-to-haves). We're going to use a calculator designed and implemented by Apple as an example. You needn't duplicate the design and style of the calculator, but you must provide the same minimum functionality.

![pocket calculator example](https://www.ucvts.tec.nj.us/cms/lib/NJ03001805/Centricity/domain/760/apcsp-images/pocket-calculator.png)

## Deadline

Your Canvas submission is due at or before 11:59pm on TBD (pending midterm schedule).

### Submission Requirements

All that is required for submission is the public URL (i.e., the GitHub Pages URL) to your [GitHub](https://github.com/) repository for this problem set. If you forgot how to create a public URL for your repository, reread the [original instructions from Problem Set 3¾](https://canvas.instructure.com/courses/1408038/pages/github-pages?module_item_id=19614011).
