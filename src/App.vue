<template>
  <div class="main main--dark">
    <div class="main__container container">
      <div class="main__themes-changer themes-changer">
        <label class="themes-changer__slide">
          <input class="themes-changer__input" type="checkbox" />
          <span class="themes-changer__point"></span>
        </label>
        Светлый режим
      </div>
      <div class="main__wrapper clearfix">
        <!-- ******** begin feed-page ******** -->
        <section class="main__feed-page feed-page">
          <div class="feed-page__create feed-create clearfix">
            <textarea
              class="feed-create__content"
              placeholder="О чем вы думаете"
            ></textarea>
            <button class="feed-create__share btn btn--loading">
              Поделиться
            </button>
          </div>
          <div class="feed-page__list">
            <article class="feed-page__feed-item feed-item">
              <div class="feed-item__wrapper clearfix">
                <div class="feed-item__person">
                  <img
                    class="feed-item__avatar"
                    alt="name"
                    src="./assets/avatars/1.png"
                  />
                </div>
                <div class="feed-item__message">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam pariatur delectus nulla illo quo architecto fuga iste
                  accusantium earum commodi nostrum ad, quisquam velit a soluta
                  sunt ea, enim non necessitatibus. Rerum molestiae odio,
                  exercitationem repudiandae saepe dolorem est quidem repellat
                  cumque unde optio minima, dolores perferendis quia illum
                  obcaecati!
                </div>
              </div>
              <div class="feed-item__comments">
                <div class="feed-item__feed-comment feed-comment clearfix">
                  <div class="feed-comment__person">
                    <img
                      src="./assets/avatars/1.png"
                      class="feed-comment__avatar"
                    />
                  </div>
                  <div class="feed-comment__message">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam perspiciatis nesciunt dolores quas repudiandae veniam
                    recusandae delectus incidunt exercitationem ea.
                  </div>
                </div>
                <div class="feed-item__feed-comment feed-comment clearfix">
                  <div class="feed-comment__person">
                    <img
                      src="./assets/avatars/1.png"
                      class="feed-comment__avatar"
                    />
                  </div>
                  <div class="feed-comment__message">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam perspiciatis nesciunt dolores quas repudiandae veniam
                    recusandae delectus incidunt exercitationem ea.
                  </div>
                </div>
                <div class="feed-item__feed-comment feed-comment clearfix">
                  <div class="feed-comment__person">
                    <img
                      src="./assets/avatars/1.png"
                      class="feed-comment__avatar"
                    />
                  </div>
                  <div class="feed-comment__message">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam perspiciatis nesciunt dolores quas repudiandae veniam
                    recusandae delectus incidunt exercitationem ea.
                  </div>
                </div>
              </div>
            </article>
            <article class="feed-page__feed-item feed-item">
              <div class="feed-item__wrapper clearfix">
                <div class="feed-item__person">
                  <img
                    class="feed-item__avatar"
                    alt="name"
                    src="./assets/avatars/1.png"
                  />
                </div>
                <div class="feed-item__message">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam pariatur delectus nulla illo quo architecto fuga iste
                  accusantium earum commodi nostrum ad, quisquam velit a soluta
                  sunt ea, enim non necessitatibus. Rerum molestiae odio,
                  exercitationem repudiandae saepe dolorem est quidem repellat
                  cumque unde optio minima, dolores perferendis quia illum
                  obcaecati!
                </div>
              </div>
              <div class="feed-item__comments">
                <div class="feed-item__feed-comment feed-comment clearfix">
                  <div class="feed-comment__person">
                    <img
                      src="./assets/avatars/1.png"
                      class="feed-comment__avatar"
                    />
                  </div>
                  <div class="feed-comment__message">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam perspiciatis nesciunt dolores quas repudiandae veniam
                    recusandae delectus incidunt exercitationem ea.
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
        <!-- ******** end feed-page ******** -->

        <!-- ******** begin aside ******** -->
        <aside class="main__aside aside">
          <div class="popular-articles">
            <h2 class="popular-articles__title">
              Самые часто обсуждаемые посты
            </h2>
            <div class="popular-articles__list">
              <div
                class="popular-articles__popular-articles-item popular-articles-item clearfix"
              >
                <div class="popular-articles-item__comments-quantity">10</div>
                <div class="popular-articles-item__short">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                  autem.
                </div>
              </div>
            </div>
          </div>
        </aside>
        <!-- ******** end aside ******** -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
