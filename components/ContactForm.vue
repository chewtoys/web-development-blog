<template>
  <Section id="contact" class="contact-form">
    <Container>
      <Columns class="is-centered">
        <Column class="is-6 has-text-centered">
          <Content>
            <h2 class="title">
              Want to talk about a new or existing project?
            </h2>
            <p>Any comments on an article?</p>
            <p>See anything that can be improved?</p>
            <p>
              Feel free to send me a message using the form below. I respond to
              all comments and will get back to you as soon as possible!
            </p>
          </Content>

          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/thanks"
            class="control"
          >
            <div class="field">
              <label class="label" for="name">
                Name
              </label>
              <div class="control has-icons-left">
                <input
                  id="name"
                  type="text"
                  class="input"
                  name="Name"
                  placeholder="Your name"
                  minlength="5"
                  required
                >
                <span class="icon is-small is-left">
                  <font-awesome-icon :icon="['fas', 'user']" />
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label" for="email">
                Email
              </label>
              <div class="control has-icons-left">
                <input
                  id="email"
                  class="input"
                  type="email"
                  name="_replyto"
                  placeholder="Your email address"
                  minlength="5"
                  required
                >
                <span class="icon is-small is-left">
                  <font-awesome-icon :icon="['fas', 'envelope']" />
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label" for="message">
                Message
              </label>
              <div class="control has-icons has-icons-left">
                <textarea
                  id="message"
                  class="textarea"
                  name="Message"
                  placeholder="Your message"
                  minlength="5"
                  required
                />
              </div>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <button class="button is-link is-inverted" type="submit">
                  Send message
                </button>
              </div>
            </div>

            <input type="hidden" name="form-name" value="contact">

            <input type="text" name="bot-field" class="hidden">
          </form>
        </Column>
      </Columns>
    </Container>
  </Section>
</template>
