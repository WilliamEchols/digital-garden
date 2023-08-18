---
id: a444d7c4-739b-4117-a209-ea0c61a0bdee
---

# GitHub - mshumer/gpt-oracle-trainer
#Omnivore

[Read on Omnivore](https://omnivore.app/me/https-t-co-4-tl-m-yf-9-jlo-ssr-true-18a009e516b)
[Read Original](https://t.co/4TlMYf9jlo?ssr=true)

# State
#Omnivore/inbox

# Content
## Name already in use

 A tag already exists with the provided branch name. Many Git commands accept both tag and branch names, so creating this branch may cause unexpected behavior. Are you sure you want to create this branch?

[ Go to file](https://t.co/mshumer/gpt-oracle-trainer?search=1) Code 

* [ ](https://docs.github.com/articles/which-remote-url-should-i-use)  
 Use Git or checkout with SVN using the web URL.
* [ Open with GitHub Desktop](https://desktop.github.com/)
* [ Download ZIP](https://t.co/mshumer/gpt-oracle-trainer/archive/refs/heads/main.zip)

## Latest commit

## Files

[Permalink](https://t.co/mshumer/gpt-oracle-trainer/tree/3d8e67d73463e74473294d8a1f7253ecd5e29d55)

 Failed to load latest commit information.

Type

Name

Latest commit message

Commit time

[![Twitter Follow](https://proxy-prod.omnivore-image-cache.app/0x0,s81IRNAqLNH6lbkH65gTgpyG3OfTV3FCXb4cGLRQOyH4/https://camo.githubusercontent.com/3f2ef3da38c79ef4c01ff068c1062e0c06200161a767b4015ce0372de4180d96/68747470733a2f2f696d672e736869656c64732e696f2f747769747465722f666f6c6c6f772f6d6174747368756d65725f3f7374796c653d736f6369616c)](https://twitter.com/mattshumer%5F) [![Open Main Version In Colab](https://proxy-prod.omnivore-image-cache.app/0x0,s_bPNKpf9ZsHJuVYKQJMLudD-QQy7SPCvuXvihDg0b9w/https://camo.githubusercontent.com/84f0493939e0c4de4e6dbe113251b4bfb5353e57134ffd9fcab6b8714514d4d1/68747470733a2f2f636f6c61622e72657365617263682e676f6f676c652e636f6d2f6173736574732f636f6c61622d62616467652e737667)](https://colab.research.google.com/drive/1xB0ZeiBAF78FAxNCz-TeRRwQtmmVjxOh?usp=sharing)

## Overview

Creating a chatbot that can accurately answer questions about a product or service's documentation is a complex task. You can fine-tune on the documentation itself (but results won't be conversational), use embeddings (risks losing relevant context), etc. `gpt-oracle-trainer` is an experimental tool that aims to simplify this process and potentially produce better results.

**Simply provide your product or service's documentation, describe your product or service, select a temperature for data generation, and choose the number of training examples to generate per document. The system will then generate the dataset in the correct format, train the model, and allow you to test it.**

## Features

* **Data Generation**: The system generates a question-and-answer dataset based on your documentation, service description, temperature, and number of examples. The data is formatted correctly for model training.
* **Model Training**: The system trains the model using the generated dataset.
* **Model Testing**: Test the trained model with a custom prompt.

## How to Use

1. [Open the notebook in Google Colab ](https://colab.research.google.com/drive/1xB0ZeiBAF78FAxNCz-TeRRwQtmmVjxOh?usp=sharing)or in a local Jupyter notebook.
2. Add your OpenAI API key to the line `openai.api_key = "OPENAI API KEY HERE"`.
3. Paste your documentation into the `docs` list, each document as a separate string.
4. Define your `service_name_and_description`, `temperature`, and `number_of_examples_per_doc`. For example:

```ini
service_name_and_description = "MosaicML, a platform that makes it easier to train and fine-tune large AI models"
temperature = .7
number_of_examples_per_doc = 10

```

1. Run the cells to generate the dataset, train the model, and test it.
2. The final trained model will be saved under the name you specify in `new_model`.

## Contributions are welcome! Some ideas:

* improve the data generation process
* add more customization options for the model training

## License

This project is [MIT](https://github.com/mshumer/gpt-oracle-trainer/blob/master/LICENSE) licensed.

## Contact

Matt Shumer - [@mattshumer\_](https://twitter.com/mattshumer%5F)

Project Link: [https://github.com/mshumer/gpt-oracle-trainer](https://t.co/mshumer/gpt-oracle-trainer/blob/main/url)

Lastly, if you want to try something even cooler than this, sign up for [Personal Assistant](https://www.hyperwriteai.com/personal-assistant) (most of my time is spent on this). It's basically an AI that can operate your web browser to complete tasks for you.

