---
id: eefd902f-285e-483b-863e-4fe72824c60a
---

# GitHub - AntonOsika/gpt-engineer: Specify what you want it to build, the AI asks for clarification, and then builds it.
#Omnivore

[Read on Omnivore](https://omnivore.app/me/https-t-co-g-zl-3-a-7-h-so-e-ssr-true-18a0023440a)
[Read Original](https://t.co/gZl3a7hSoE?ssr=true)

# State
#Omnivore/inbox

# Content
## GPT Engineer

[![Discord Follow](https://proxy-prod.omnivore-image-cache.app/0x0,svCULa2MkPPXEu0erb9_90yEHv3DpeUVnF4s6JeeuBds/https://camo.githubusercontent.com/30d92340ce4d508c1689ade54833c5db819d2ffc22488f2df8f074d22748a2dc/68747470733a2f2f646362616467652e76657263656c2e6170702f6170692f7365727665722f38746344513839456a323f7374796c653d666c6174)](https://discord.gg/8tcDQ89Ej2) [![GitHub Repo stars](https://proxy-prod.omnivore-image-cache.app/0x0,sQ1gp9dKQT_V3TsiWhn-twzhOOMfbOg2S3hxnaI50Xro/https://camo.githubusercontent.com/82258872d27a4109f25d718e6a31e812e36d7a9720a13ce7db7d54552086c47f/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f416e746f6e4f73696b612f6770742d656e67696e6565723f7374796c653d736f6369616c)](https://github.com/AntonOsika/gpt-engineer) [![Twitter Follow](https://proxy-prod.omnivore-image-cache.app/0x0,s-EYa6RezUep9U_WY86YWK6UNWINmQCpjUIlfsYu_2hA/https://camo.githubusercontent.com/94a44e04bc46e753607eeeb3a140e51368820fd26cf3453ee9c415fa79d994cc/68747470733a2f2f696d672e736869656c64732e696f2f747769747465722f666f6c6c6f772f616e746f6e6f73696b613f7374796c653d736f6369616c)](https://twitter.com/AntonOsika)

**Specify what you want it to build, the AI asks for clarification, and then builds it.**

GPT Engineer is made to be easy to adapt, extend, and make your agent learn how you want your code to look. It generates an entire codebase based on a prompt.

[Demo](https://twitter.com/antonosika/status/1667641038104674306)

## Project philosophy

* Simple to get value
* Flexible and easy to add new own "AI steps". See `steps.py`.
* Incrementally build towards a user experience of:  
   1. high level prompting  
   2. giving feedback to the AI that it will remember over time
* Fast handovers back and forth between AI and human
* Simplicity, all computation is "resumable" and persisted to the filesystem

## Usage

Choose either **stable** or **development**.

For **stable** release:

* `python -m pip install gpt-engineer`

For **development**:

* `git clone https://github.com/AntonOsika/gpt-engineer.git`
* `cd gpt-engineer`
* `python -m pip install -e .`  
   * (or: `make install && source venv/bin/activate` for a venv)

**API Key**Either just:

* `export OPENAI_API_KEY=[your api key]`

Or:

* Create a copy of `.env.template` named `.env`
* Add your OPENAI\_API\_KEY in .env

Check the [Windows README](https://t.co/AntonOsika/gpt-engineer/blob/main/WINDOWS%5FREADME.md) for windows usage.

**Running**

* Create an empty folder. If inside the repo, you can run:  
   * `cp -r projects/example/ projects/my-new-project`
* Fill in the `prompt` file in your new folder
* `gpt-engineer projects/my-new-project`  
   * (Note, `gpt-engineer --help` lets you see all available options. For example `--steps use_feedback` lets you improve/fix code in a project)

By running gpt-engineer you agree to our [terms](https://github.com/AntonOsika/gpt-engineer/blob/main/TERMS%5FOF%5FUSE.md).

**Results**

Check the generated files in `projects/my-new-project/workspace`

**Alternatives**

You can check [Docker instructions](https://t.co/AntonOsika/gpt-engineer/blob/main/docker/README.md) to use Docker, or simply do everything in your browser:

[![Open in GitHub Codespaces](https://proxy-prod.omnivore-image-cache.app/0x0,slFxLqKVIzIDy9JpPOKxlAJvp5sXqbIqJ44VAOdLnpC4/https://github.com/codespaces/badge.svg)](https://github.com/AntonOsika/gpt-engineer/codespaces)

## Features

You can specify the "identity" of the AI agent by editing the files in the `preprompts` folder.

Editing the `preprompts`, and evolving how you write the project prompt, is how you make the agent remember things between projects.

Each step in `steps.py` will have its communication history with GPT4 stored in the logs folder, and can be rerun with `scripts/rerun_edited_message_logs.py`.

## Vision

The gpt-engineer community is building the **open platform for devs to tinker with and build their personal code-generation toolbox**.

If you are interested in contributing to this, we would be interested in having you.

If you want to see our broader ambitions, check out the [roadmap](https://github.com/AntonOsika/gpt-engineer/blob/main/ROADMAP.md), and join[discord](https://discord.gg/8tcDQ89Ej2)to get input on how you can [contribute](https://t.co/AntonOsika/gpt-engineer/blob/main/.github/CONTRIBUTING.md) to it.

We are currently looking for more maintainers and community organizers. Email [anton.osika@gmail.com](mailto:anton.osika@gmail.com) if you are interested in an official role.

## Example

Demo.mov 

